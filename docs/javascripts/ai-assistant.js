// ============================================================
// docs/javascripts/ai-assistant.js
// ============================================================
// WHAT: Ask questions about the current documentation page.
// WHY: Send requests through the Worker so API credentials remain private.

(() => {
  "use strict";

  const WORKER_URL =
    "https://pro-analytics-02-assistant.denisecase.workers.dev";

  const MAX_QUESTION_CHARS = 1000;
  const MAX_CONTEXT_CHARS = 20000;

  function getPageContext(article) {
    const copy = article.cloneNode(true);

    copy.querySelectorAll(
      "[data-ai-assistant], script, style, .headerlink"
    ).forEach((element) => element.remove());

    return [
      `Page title: ${document.title}`,
      `Page URL: ${location.origin}${location.pathname}`,
      "",
      copy.textContent.trim(),
    ].join("\n").slice(0, MAX_CONTEXT_CHARS);
  }

  async function requestAnswer(question, context, signal) {
    const response = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, context }),
      signal,
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error("The daily request limit has been reached.");
      }

      throw new Error(data.error || "The assistant is unavailable.");
    }

    if (typeof data.answer !== "string" || !data.answer.trim()) {
      throw new Error("The assistant returned no answer.");
    }

    return data.answer;
  }

  function createDialog() {
    const dialog = document.createElement("dialog");
    dialog.dataset.aiAssistant = "";
    dialog.setAttribute("aria-labelledby", "ai-assistant-title");

    Object.assign(dialog.style, {
      width: "min(42rem, 92vw)",
      maxHeight: "85vh",
      overflowY: "auto",
      padding: "1.25rem",
      border: "1px solid var(--md-default-fg-color--lighter, #888)",
      borderRadius: "0.5rem",
      background: "var(--md-default-bg-color, white)",
      color: "var(--md-default-fg-color, #222)",
      textAlign: "left",
    });

    // Static markup only. Model output is assigned with textContent.
    dialog.innerHTML = `
      <h2 id="ai-assistant-title">Ask the agent</h2>
      <p>
        Ask about this page. Your question and the page text are sent
        to Google Gemini through the guide's assistant service.
        Do not include passwords, API keys, or personal information.
        Press Enter to submit your question, or Shift+Enter for a new line.
      </p>
      <form>
        <label for="ai-assistant-question">Your question</label>
        <textarea
          id="ai-assistant-question"
          name="question"
          rows="4"
          maxlength="${MAX_QUESTION_CHARS}"
          required
        ></textarea>
        <div>
          <button type="submit" class="md-button md-button--primary">
            Ask
          </button>
          <button type="button" class="md-button" data-close>
            Close
          </button>
        </div>
      </form>
      <p data-status role="status"></p>
      <div data-answer aria-live="polite"></div>
    `;

    const textarea = dialog.querySelector("textarea");
    Object.assign(textarea.style, {
      display: "block",
      boxSizing: "border-box",
      width: "100%",
      margin: "0.5rem 0 1rem",
      padding: "0.5rem",
      border: "1px solid currentColor",
      font: "inherit",
      color: "inherit",
      background: "transparent",
    });

    Object.assign(dialog.querySelector("[data-answer]").style, {
      whiteSpace: "pre-wrap",
      overflowWrap: "anywhere",
      marginTop: "1rem",
    });

    return dialog;
  }

  function initializeAssistant() {
    // Remove a dialog left behind by instant navigation.
    document.querySelectorAll("dialog[data-ai-assistant]")
      .forEach((dialog) => {
        dialog.dispatchEvent(new Event("assistant-dispose"));
        dialog.remove();
      });

    const article = document.querySelector("article.md-content__inner");
    if (!article) return;

    article.querySelectorAll("[data-ai-assistant]")
      .forEach((element) => element.remove());

    const button = document.createElement("button");
    button.type = "button";
    button.className = "md-button";
    button.dataset.aiAssistant = "";
    button.textContent = "Ask the agent";
    button.setAttribute("aria-haspopup", "dialog");
    article.append(button);

    const dialog = createDialog();
    document.body.append(dialog);

    const form = dialog.querySelector("form");
    const textarea = dialog.querySelector("textarea");
    const submit = dialog.querySelector('[type="submit"]');
    const status = dialog.querySelector("[data-status]");
    const answer = dialog.querySelector("[data-answer]");

    let controller = null;

    textarea.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" || event.shiftKey || event.isComposing) return;

      event.preventDefault();
      if (!controller && !event.repeat) {
        form.requestSubmit(submit);
      }
    });

    button.addEventListener("click", () => {
      dialog.showModal();
      textarea.focus();
    });

    dialog.querySelector("[data-close]").addEventListener("click", () => {
      dialog.close();
    });

    dialog.addEventListener("close", () => {
      controller?.abort();
      if (button.isConnected) button.focus();
    });

    dialog.addEventListener("assistant-dispose", () => {
      controller?.abort();
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (controller) return;

      const question = textarea.value.trim();
      if (!question) {
        textarea.focus();
        return;
      }

      if (WORKER_URL.includes("REPLACE_ME")) {
        status.textContent = "The assistant endpoint has not been configured.";
        return;
      }

      controller = new AbortController();
      const timeout = setTimeout(() => controller?.abort(), 60000);

      submit.disabled = true;
      textarea.readOnly = true;
      answer.textContent = "";
      status.textContent = "Asking the agent…";

      try {
        answer.textContent = await requestAnswer(
          question,
          getPageContext(article),
          controller.signal,
        );
        status.textContent = "Check the answer against the documentation.";
      } catch (error) {
        status.textContent = error.name === "AbortError"
          ? "The request was canceled or timed out. Please try again."
          : error.message;
      } finally {
        clearTimeout(timeout);
        controller = null;
        submit.disabled = false;
        textarea.readOnly = false;
      }
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializeAssistant);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAssistant);
  } else {
    initializeAssistant();
  }
})();
