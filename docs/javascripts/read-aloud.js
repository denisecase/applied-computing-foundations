// Read Aloud JavaScript
// Provides functionality to read aloud the content of an article.
// THIS SHOULD NOT NEED TO BE EDITED
//
// It is added to the page by including it in the zensical.toml configuration.

// extra_javascript = [
//     "javascripts/read-aloud.js",
//     "javascripts/concept-quiz.js",
// ]

(() => {
  const SKIP_SELECTOR =
    "pre, code, details, script, style, nav, .read-aloud-controls, .concept-quiz-controls, .concept-quiz, .no-narrate";

  function getArticle() {
    return document.querySelector("article") || document.querySelector("main");
  }

  function getNarrationBlocks(article) {
    const clone = article.cloneNode(true);

    clone.querySelectorAll(SKIP_SELECTOR).forEach((element) => {
      element.remove();
    });

    const blocks = [];

    clone.querySelectorAll("h1, h2, h3, p, li").forEach((element) => {
      const text = element.innerText.replace(/\s+/g, " ").trim();

      if (!text) {
        return;
      }

      const isHeading = /^H[1-3]$/.test(element.tagName);

      blocks.push(isHeading ? `${text}.` : text);
    });

    return blocks;
  }

  function initializeReadAloud() {
    const article = getArticle();

    if (!article) {
      return;
    }

    if (!("speechSynthesis" in window)) {
      return;
    }

    if (article.querySelector(".read-aloud-controls")) {
      return;
    }

    const controls = document.createElement("div");
    controls.className = "read-aloud-controls";
    controls.style.display = "flex";
    controls.style.gap = "0.5rem";
    controls.style.alignItems = "center";
    controls.style.marginBottom = "1rem";

    const readButton = document.createElement("button");
    readButton.type = "button";
    readButton.textContent = "🔊 Read aloud";

    const pauseButton = document.createElement("button");
    pauseButton.type = "button";
    pauseButton.textContent = "Pause";

    const stopButton = document.createElement("button");
    stopButton.type = "button";
    stopButton.textContent = "Stop";

    pauseButton.disabled = true;
    stopButton.disabled = true;

    readButton.addEventListener("click", () => {
      const blocks = getNarrationBlocks(article);

      if (blocks.length === 0) {
        return;
      }

      window.speechSynthesis.cancel();

      let index = 0;

      function speakNext() {
        if (index >= blocks.length) {
          pauseButton.disabled = true;
          stopButton.disabled = true;
          pauseButton.textContent = "Pause";
          return;
        }

        const utterance = new SpeechSynthesisUtterance(blocks[index]);

        utterance.addEventListener("start", () => {
          pauseButton.disabled = false;
          stopButton.disabled = false;
        });

        utterance.addEventListener("end", () => {
          index += 1;
          speakNext();
        });

        utterance.addEventListener("error", () => {
          pauseButton.disabled = true;
          stopButton.disabled = true;
          pauseButton.textContent = "Pause";
        });

        window.speechSynthesis.speak(utterance);
      }

      speakNext();
    });

    pauseButton.addEventListener("click", () => {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        pauseButton.textContent = "Pause";
        return;
      }

      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        pauseButton.textContent = "Resume";
      }
    });

    stopButton.addEventListener("click", () => {
      window.speechSynthesis.cancel();

      pauseButton.disabled = true;
      stopButton.disabled = true;
      pauseButton.textContent = "Pause";
    });

    controls.append(readButton, pauseButton, stopButton);
    article.prepend(controls);
  }

  function initialize() {
    window.speechSynthesis?.cancel();
    initializeReadAloud();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(initialize);
  } else {
    initialize();
  }
})();
