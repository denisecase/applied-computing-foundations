// Concept Quiz JavaScript
// Provides functionality to generate and render concept quizzes based on article content.
// THIS SHOULD NOT NEED TO BE EDITED
//
// It is added to the page by including it in the zensical.toml configuration.

// extra_javascript = [
//     "javascripts/read-aloud.js",
//     "javascripts/concept-quiz.js",
// ]

(() => {
  const QUIZ_SIZE = 5;
  const DISTRACTOR_COUNT = 3;

  const SKIP_SELECTOR =
    "pre, code, details, table, figure, script, style, .no-quiz";

  function getArticle() {
    return document.querySelector("article") || document.querySelector("main");
  }

  function createSeed() {
    const now = new Date();

    return Number(
      [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0"),
        String(now.getHours()).padStart(2, "0"),
        String(now.getMinutes()).padStart(2, "0"),
        String(now.getSeconds()).padStart(2, "0"),
      ].join(""),
    );
  }

  function createRandom(seed) {
    let value = seed >>> 0;

    return function () {
      value += 0x6d2b79f5;

      let t = value;

      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(items, random) {
    const result = [...items];

    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));

      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  }

  function sample(items, count, random) {
    return shuffle(items, random).slice(0, count);
  }

  function getNarrativeText(heading) {
    let element = heading.nextElementSibling;

    while (element && element.tagName !== "H3") {
      if (element.tagName === "H2") {
        break;
      }

      if (element.matches(SKIP_SELECTOR)) {
        element = element.nextElementSibling;
        continue;
      }

      if (element.tagName === "P") {
        const text = element.innerText?.trim();

        if (text) {
          return text.replace(/\s+/g, " ");
        }
      }

      element = element.nextElementSibling;
    }

    return "";
  }

  function collectConcepts(article) {
    return [...article.querySelectorAll("h3")]
      .map((heading) => ({
        term: heading.innerText.trim(),
        explanation: getNarrativeText(heading),
      }))
      .filter(
        (concept) => concept.term.length > 0 && concept.explanation.length > 0,
      );
  }

  function buildQuestions(concepts, random) {
    const questionCount = Math.min(QUIZ_SIZE, concepts.length);

    const selected = sample(concepts, questionCount, random);

    return selected.map((concept) => {
      const distractorPool = concepts.filter(
        (candidate) => candidate.term !== concept.term,
      );

      const distractors = sample(distractorPool, DISTRACTOR_COUNT, random);

      const answers = shuffle(
        [
          {
            term: concept.term,
            correct: true,
          },
          ...distractors.map((item) => ({
            term: item.term,
            correct: false,
          })),
        ],
        random,
      );

      return {
        prompt: concept.explanation,
        correctTerm: concept.term,
        answers,
      };
    });
  }

  function renderQuiz(container, questions, seed) {
    container.replaceChildren();

    let score = 0;
    let answered = 0;

    const heading = document.createElement("h2");
    heading.textContent = "Concept Check";

    const seedText = document.createElement("p");
    seedText.textContent = `Quiz seed: ${seed}`;

    container.append(heading, seedText);

    questions.forEach((question, index) => {
      const section = document.createElement("section");
      section.className = "concept-quiz-question";

      const prompt = document.createElement("p");
      prompt.textContent = `${index + 1}. ${question.prompt}`;

      const choices = document.createElement("div");
      choices.className = "concept-quiz-choices";
      choices.style.display = "flex";
      choices.style.flexWrap = "wrap";
      choices.style.gap = "0.75rem";

      const feedback = document.createElement("p");
      feedback.className = "concept-quiz-feedback";
      feedback.setAttribute("aria-live", "polite");

      let questionAnswered = false;

      question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = answer.term;

        button.addEventListener("click", () => {
          if (questionAnswered) {
            return;
          }

          questionAnswered = true;
          answered += 1;

          if (answer.correct) {
            score += 1;
            feedback.textContent = "Correct.";
          } else {
            feedback.textContent = `The correct concept is ${question.correctTerm}.`;
          }

          choices.querySelectorAll("button").forEach((choice) => {
            choice.disabled = true;
          });

          if (answered === questions.length) {
            const result = document.createElement("p");
            result.className = "concept-quiz-score";
            result.textContent = `Score: ${score} / ${questions.length}`;

            container.appendChild(result);
          }
        });

        choices.appendChild(button);
      });

      section.append(prompt, choices, feedback);
      container.appendChild(section);
    });
  }

  function initializeConceptQuiz() {
    const article = getArticle();

    if (!article) {
      return;
    }

    if (article.querySelector(".concept-quiz-controls")) {
      return;
    }

    const concepts = collectConcepts(article);

    if (concepts.length < DISTRACTOR_COUNT + 1) {
      return;
    }

    const controls = document.createElement("div");
    controls.className = "concept-quiz-controls";

    const startButton = document.createElement("button");
    startButton.type = "button";
    startButton.textContent = "Click here to practice concepts";
    startButton.setAttribute("aria-expanded", "false");

    const quizContainer = document.createElement("div");
    quizContainer.className = "concept-quiz";
    quizContainer.hidden = true;

    let quizCreated = false;

    startButton.addEventListener("click", () => {
      const isShowing = !quizContainer.hidden;

      if (isShowing) {
        quizContainer.hidden = true;
        startButton.textContent = "Click here to practice concepts";
        startButton.setAttribute("aria-expanded", "false");
        return;
      }

      if (!quizCreated) {
        const seed = createSeed();
        const random = createRandom(seed);
        const questions = buildQuestions(concepts, random);

        renderQuiz(quizContainer, questions, seed);
        quizCreated = true;
      }

      quizContainer.hidden = false;
      startButton.textContent = "Click to hide practice concepts";
      startButton.setAttribute("aria-expanded", "true");
    });

    controls.appendChild(startButton);

    article.prepend(quizContainer);
    article.prepend(controls);
  }

  function initialize() {
    initializeConceptQuiz();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(initialize);
  } else {
    initialize();
  }
})();
