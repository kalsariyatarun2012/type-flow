/* ============================================================
   TypeFlow — script.js
   ============================================================ */

/* ── Word bank ─────────────────────────────────────────────── */
const WORDS = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "it", "for", "not", "on", "with",
  "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her",
  "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up",
  "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time",
  "no", "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could",
  "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think",
  "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even",
  "new", "want", "because", "any", "these", "give", "day", "most", "us", "great", "between",
  "need", "large", "often", "hand", "high", "place", "hold", "free", "real", "life", "few",
  "north", "open", "seem", "together", "next", "white", "children", "begin", "got", "walk",
  "example", "ease", "paper", "group", "always", "music", "those", "both", "mark", "book",
  "letter", "until", "mile", "river", "car", "feet", "care", "second", "enough", "plain",
  "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel", "talk",
  "bird", "soon", "body", "dog", "family", "direct", "pose", "leave", "song", "measure", "door",
  "product", "black", "short", "numeral", "class", "wind", "question", "happen", "complete",
  "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece", "told", "knew",
  "pass", "since", "top", "whole", "king", "space", "heard", "best", "hour", "better", "true",
  "during", "hundred", "five", "remember", "step", "early", "hold", "west", "ground", "interest"
];

const QUOTES = [
  "The only way to do great work is to love what you do.",
  "In the middle of every difficulty lies opportunity.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Life is what happens when you are busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not final, failure is not fatal, it is the courage to continue that counts.",
  "You miss one hundred percent of the shots you do not take.",
  "Whether you think you can or you think you cannot, you are right.",
  "The best time to plant a tree was twenty years ago. The second best time is now.",
  "An unexamined life is not worth living.",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  "When you reach the end of your rope, tie a knot in it and hang on.",
  "Always remember that you are absolutely unique, just like everyone else.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "You will face many defeats in life, but never let yourself be defeated."
];

const NUMBERS = "0123456789".split("");
const PUNCTUATION = ".,!?;:'\"()".split("");

/* ── Paragraphs (20+ lines each for paragraph mode) ─────────── */
const PARAGRAPHS = [
  "Technology has fundamentally transformed the way we live, work, and communicate with one another. From the invention of the printing press to the rise of the internet, each major technological breakthrough has reshaped society in profound and often unexpected ways. Today, we carry powerful computers in our pockets, access vast libraries of knowledge with a single tap, and connect with people across the globe in real time. Artificial intelligence is beginning to automate tasks that once required human judgment, while advances in biotechnology promise to revolutionize medicine and agriculture. Yet with these remarkable capabilities come serious challenges. Privacy concerns grow as our digital footprints expand. The rapid pace of change can leave entire industries obsolete almost overnight. Workers must continuously learn new skills to remain relevant in an ever-shifting job market. Meanwhile, the environmental cost of manufacturing and powering billions of devices demands creative solutions. As we look to the future, the relationship between humanity and technology will only grow more complex. Finding the right balance between innovation and responsibility is perhaps the defining challenge of our era. We must ensure that the tools we create serve the common good, promote equity, and preserve the natural world that sustains us all. The decisions we make today about how to develop and deploy technology will echo through generations to come.",

  "The natural world is a tapestry of breathtaking beauty and staggering complexity. Every ecosystem, from the deepest ocean trenches to the highest mountain peaks, harbors an intricate web of life that has evolved over millions of years. Coral reefs teem with colorful fish and delicate invertebrates, forming underwater cities that rival any human metropolis in their density and diversity. Tropical rainforests, often called the lungs of the Earth, generate vast quantities of oxygen while sheltering countless species of plants, insects, birds, and mammals. Temperate forests cycle through dramatic seasonal changes, their canopies shifting from lush green to fiery red and gold before standing bare against winter skies. Grasslands stretch across continents, supporting herds of grazing animals and the predators that depend on them. Deserts, far from being barren wastelands, host remarkably adapted organisms that thrive under extreme conditions. Wetlands act as natural water filters, purifying runoff before it reaches rivers and oceans. Mountains create unique microclimates that support distinct communities of life at different elevations. Even the polar regions, locked in ice for much of the year, sustain specialized creatures like penguins, polar bears, and seals. Each of these environments faces threats from human activity, including deforestation, pollution, and climate change. Protecting biodiversity is not merely an ethical obligation but a practical necessity, for the health of every ecosystem ultimately affects the wellbeing of human civilization itself.",

  "Education is the cornerstone of personal growth and societal progress. Throughout history, access to knowledge has been a powerful force for social mobility, enabling individuals to transcend the circumstances of their birth and contribute meaningfully to the world around them. In ancient civilizations, learning was often restricted to a privileged elite, with scribes, priests, and scholars guarding the written word. The development of public schools and universities gradually democratized education, though significant disparities persist to this day. Modern educational philosophy emphasizes critical thinking, creativity, and collaboration over rote memorization. Students are encouraged to ask questions, challenge assumptions, and apply their knowledge to real world problems. Technology has opened new avenues for learning, with online courses, interactive simulations, and digital textbooks making information more accessible than ever before. However, the digital divide remains a serious obstacle, as millions of children around the world lack reliable internet access or even basic school supplies. Teachers play a vital role in shaping young minds, yet the profession often suffers from low pay and insufficient support. Effective education requires not only skilled instructors but also safe, well equipped learning environments and curricula that reflect the diverse experiences of all students. Lifelong learning has become essential in a rapidly changing world, where the skills needed today may be obsolete tomorrow. Investing in education is investing in the future, for an informed and capable citizenry is the foundation of a healthy democracy and a thriving economy.",

  "Creativity is a fundamental aspect of the human experience, driving innovation in art, science, business, and everyday life. It is the spark that ignites new ideas, the force that transforms abstract concepts into tangible realities. From cave paintings to digital art, from folk songs to symphonies, creative expression has been a constant companion throughout human history. Yet creativity is not limited to the arts. Scientists rely on creative thinking to formulate hypotheses and design experiments. Engineers use imagination to solve complex problems and build structures that were once thought impossible. Entrepreneurs identify unmet needs and devise novel products and services to address them. Even in routine daily tasks, we exercise creativity when we find a new route to work, improvise a recipe with available ingredients, or rearrange furniture to better suit our needs. Research suggests that creativity can be cultivated through practice, exposure to diverse perspectives, and a willingness to take risks and learn from failure. Environments that encourage curiosity and tolerate mistakes tend to foster the most innovative thinking. Collaboration also plays a crucial role, as the cross pollination of ideas between disciplines and cultures often leads to breakthrough discoveries. In an age of automation and artificial intelligence, creativity may be the most valuable human trait, setting us apart from the machines that can replicate but not truly originate. Nurturing creativity in ourselves and in future generations is essential for addressing the complex challenges that lie ahead.",

  "Physical and mental health are deeply interconnected, forming a foundation upon which all other aspects of life depend. Regular exercise strengthens the cardiovascular system, builds muscle and bone density, and releases endorphins that improve mood and reduce stress. A balanced diet rich in fruits, vegetables, whole grains, and lean proteins provides the nutrients our bodies need to function optimally. Adequate sleep is equally important, allowing the brain to consolidate memories, repair tissues, and regulate hormones. Yet in modern society, many people struggle to maintain healthy habits. Sedentary lifestyles, processed foods, and chronic stress have contributed to rising rates of obesity, diabetes, heart disease, and mental health disorders. The stigma surrounding mental illness often prevents individuals from seeking help, even as conditions like anxiety and depression become increasingly common. Access to quality healthcare remains unequal, with marginalized communities frequently facing barriers to treatment. Preventive medicine, which focuses on maintaining wellness rather than merely treating illness, offers a promising approach to reducing healthcare costs and improving outcomes. Mindfulness practices, social connections, and time spent in nature have all been shown to benefit both physical and mental wellbeing. Communities that prioritize walkable neighborhoods, green spaces, and affordable recreational facilities tend to produce healthier and happier residents. Addressing the global health crisis requires a holistic approach that considers not only medical interventions but also the social, economic, and environmental factors that shape our lives.",

  "The story of human exploration is one of relentless curiosity and extraordinary courage. From the earliest migrations out of Africa to the voyages of discovery that connected distant continents, our species has always been driven to see what lies beyond the horizon. Ancient Polynesian navigators crossed thousands of miles of open ocean using nothing but the stars, wind patterns, and ocean currents as their guides. European explorers charted new trade routes and encountered civilizations that challenged their understanding of the world. The age of scientific exploration brought systematic study of geography, biology, and geology, revealing the true scale and diversity of our planet. In the twentieth century, humanity turned its gaze upward, achieving powered flight, breaking the sound barrier, and ultimately stepping onto the surface of the Moon. Today, robotic probes explore the outer reaches of our solar system, while telescopes peer billions of light years into the cosmos, searching for clues about the origin and fate of the universe. Underwater exploration has revealed astonishing ecosystems around hydrothermal vents deep beneath the ocean surface. Extreme environments on Earth, from Antarctic ice sheets to volcanic calderas, serve as testing grounds for technologies that may one day support life on other worlds. The spirit of exploration is not confined to physical journeys. Intellectual exploration in mathematics, philosophy, and the arts continually expands the boundaries of human understanding. Each discovery raises new questions, ensuring that the adventure of exploration will never truly end.",

  "Music is a universal language that transcends cultural boundaries and speaks directly to the human soul. From the rhythmic drumming of ancient tribal ceremonies to the sophisticated compositions of classical orchestras, music has accompanied humanity through every stage of its development. It can evoke the deepest emotions, conjure vivid memories, and create a sense of connection among strangers. Neuroscience research has revealed that listening to music activates multiple areas of the brain simultaneously, engaging regions responsible for emotion, memory, motor control, and language processing. Learning to play a musical instrument has been linked to improved cognitive function, enhanced spatial reasoning, and greater academic achievement in children. Music therapy is now recognized as an effective treatment for a range of conditions, including chronic pain, depression, and neurological disorders such as Parkinson's disease. Different musical traditions reflect the unique histories and values of the cultures that created them. Jazz emerged from the African American experience, blending African rhythms with European harmonies to produce something entirely new. Indian classical music employs complex scales and improvisation to create meditative soundscapes. Electronic music harnesses technology to push the boundaries of what sound can be, creating genres that evolve at a dizzying pace. In an increasingly fragmented world, music remains one of the few forces capable of uniting people across divides of language, nationality, and belief. Supporting music education and ensuring that all communities have access to the transformative power of song should be a priority for any society that values human flourishing.",

  "Architecture is the art and science of designing spaces that shelter, inspire, and define the communities that inhabit them. Great buildings do more than provide protection from the elements. They express cultural values, commemorate historical events, and shape the daily experiences of millions of people. The ancient Egyptians built pyramids that have endured for millennia, testaments to both their engineering prowess and their beliefs about the afterlife. Greek and Roman architects developed principles of proportion and symmetry that continue to influence design today. Gothic cathedrals soared heavenward, their pointed arches and flying buttresses creating interiors flooded with colored light. The industrial revolution introduced new materials like steel and reinforced concrete, enabling the construction of skyscrapers, bridges, and vast public spaces that would have been impossible with traditional methods. Modern architecture embraces a wide range of philosophies, from the minimalist clarity of glass and steel towers to the organic curves of buildings inspired by natural forms. Sustainable design has become a critical concern, as the construction and operation of buildings account for a significant portion of global energy consumption and carbon emissions. Green building practices incorporate renewable energy sources, efficient insulation, natural ventilation, and recycled materials to reduce environmental impact. Urban planning, closely related to architecture, addresses the arrangement of buildings, parks, transportation networks, and public amenities to create livable, equitable cities. The best architecture balances aesthetic beauty with functional excellence, creating spaces that serve human needs while respecting the natural environment.",

  "The ocean covers more than seventy percent of the Earth's surface, yet much of it remains unexplored and poorly understood. This vast body of water plays a critical role in regulating the planet's climate, absorbing carbon dioxide, generating oxygen, and distributing heat through complex current systems. Marine ecosystems support an extraordinary diversity of life, from microscopic plankton that form the base of the food chain to enormous blue whales that traverse entire ocean basins. Coastal environments such as mangrove forests, salt marshes, and seagrass beds provide vital nursery habitats for commercially important fish species while also protecting shorelines from erosion and storm surges. Deep sea environments, once thought to be lifeless deserts, have been revealed as home to bizarre and fascinating organisms adapted to crushing pressure, near freezing temperatures, and total darkness. Hydrothermal vents on the ocean floor support chemosynthetic communities that derive energy not from sunlight but from chemical reactions, challenging our assumptions about the requirements for life. Human activities pose serious threats to ocean health. Overfishing has depleted many fish stocks to dangerously low levels. Plastic pollution has created vast garbage patches in the open ocean and infiltrated even the most remote marine environments. Ocean acidification, driven by rising carbon dioxide levels, threatens the ability of shell forming organisms to build their protective structures. Rising sea temperatures contribute to coral bleaching events that can devastate entire reef systems. Addressing these challenges requires international cooperation, innovative technology, and a fundamental shift in how we value and manage this indispensable resource.",

  "Communication is the thread that binds human societies together, enabling the exchange of ideas, the coordination of collective action, and the formation of meaningful relationships. The evolution of communication technology has been one of the most transformative forces in human history. Spoken language, developed tens of thousands of years ago, allowed our ancestors to share knowledge, tell stories, and organize complex social structures. The invention of writing around five thousand years ago made it possible to record information permanently, creating the foundation for law, literature, science, and commerce. The printing press, introduced in the fifteenth century, dramatically reduced the cost of producing books and pamphlets, fueling the spread of literacy, the Protestant Reformation, and the Scientific Revolution. The telegraph and telephone collapsed the barrier of distance, enabling near instantaneous communication across continents. Radio and television brought news, entertainment, and political messaging into homes around the world, shaping public opinion on an unprecedented scale. The internet has taken this process further still, creating a global network where anyone with a connection can publish, broadcast, and interact with audiences of millions. Social media platforms have given ordinary people powerful tools for self expression and community building, but they have also amplified misinformation, hate speech, and political polarization. The challenge of our time is to harness the extraordinary potential of modern communication while mitigating its risks. Media literacy, thoughtful regulation, and a commitment to honest and respectful discourse are essential if we are to build a more informed, connected, and compassionate world."
];

/* ── State ──────────────────────────────────────────────────── */
let state = {
  mode: "time",         // time | words | quote | zen
  timeLimit: 30,
  wordCount: 25,
  usePunctuation: false,
  useNumbers: false,
  theme: "dark",

  words: [],            // array of word strings
  letterIndex: 0,       // current letter index (flat)
  wordIndex: 0,         // current word index
  inputHistory: [],     // typed chars per word
  currentInput: "",

  timer: null,
  timeLeft: 30,
  started: false,
  finished: false,
  startTime: null,

  correctChars: 0,
  incorrectChars: 0,
  extraChars: 0,
  missedChars: 0,

  wpmHistory: [],       // [{time, wpm}] per second
  graphZoom: 1,
};

/* ── DOM refs ───────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const wordsContainer = $("words-container");
const hiddenInput = $("hidden-input");
const caretEl = $("caret");
const timerDisplay = $("timer-display");
const timerValue = $("timer-value");
const liveStats = $("live-stats");
const liveWpm = $("live-wpm");
const liveAcc = $("live-acc");
const testScreen = $("test-screen");
const resultScreen = $("result-screen");
const restartBtn = $("restart-btn");
const retryBtn = $("retry-btn");
const newTestBtn = $("new-test-btn");
const themeBtn = $("theme-btn");
const timeSelector = $("time-selector");
const wordSelector = $("word-selector");
const toastEl = $("toast");
const paraOverlay = $("paragraph-confirm-overlay");
const paraCancelBtn = $("para-cancel-btn");
const paraProceedBtn = $("para-proceed-btn");

/* ── Init ───────────────────────────────────────────────────── */
function init() {
  generateWords();
  renderWords();
  resetTimer();
  showTestScreen();
  hiddenInput.value = "";
  state.started = false;
  state.finished = false;
  state.paragraphConfirmed = false;
  state.letterIndex = 0;
  state.wordIndex = 0;
  state.inputHistory = [];
  state.currentInput = "";
  state.correctChars = 0;
  state.incorrectChars = 0;
  state.extraChars = 0;
  state.missedChars = 0;
  state.wpmHistory = [];
  state.graphZoom = 1;
  liveStats.classList.remove("visible");
  timerDisplay.classList.remove("visible", "warning");
  // Keep caret fully hidden until user starts typing
  caretEl.classList.remove("visible", "blinking");
  hiddenInput.focus();
}

/* ── Word generation ────────────────────────────────────────── */
function generateWords() {
  let pool = [...WORDS];
  let count = state.mode === "words" ? state.wordCount
    : state.mode === "quote" ? 0
      : 80;

  if (state.mode === "quote") {
    const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    state.words = q.split(" ");
    return;
  }

  if (state.mode === "paragraph") {
    const p = PARAGRAPHS[Math.floor(Math.random() * PARAGRAPHS.length)];
    state.words = p.split(" ");
    return;
  }

  shuffle(pool);
  let words = pool.slice(0, count);

  if (state.useNumbers) {
    words = words.map(w => Math.random() < 0.2
      ? String(Math.floor(Math.random() * 1000))
      : w);
  }
  if (state.usePunctuation) {
    words = words.map(w => {
      if (Math.random() < 0.15) w = w + PUNCTUATION[Math.floor(Math.random() * PUNCTUATION.length)];
      if (Math.random() < 0.08) w = w.charAt(0).toUpperCase() + w.slice(1);
      return w;
    });
  }

  state.words = words;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* ── Render words ───────────────────────────────────────────── */
function renderWords() {
  wordsContainer.innerHTML = "";
  state.words.forEach((word, wi) => {
    const wordEl = document.createElement("div");
    wordEl.classList.add("word");
    wordEl.dataset.index = wi;
    word.split("").forEach((ch, li) => {
      const span = document.createElement("span");
      span.classList.add("letter", "pending");
      span.dataset.letter = ch;
      span.textContent = ch;
      wordEl.appendChild(span);
    });
    wordsContainer.appendChild(wordEl);
  });
}

/* ── Timer ──────────────────────────────────────────────────── */
function resetTimer() {
  clearInterval(state.timer);
  state.timeLeft = state.timeLimit;
  timerValue.textContent = state.mode === "time" ? state.timeLeft : "0";
}

function startTimer() {
  state.startTime = Date.now();
  if (state.mode === "time") {
    timerDisplay.classList.add("visible");
    liveStats.classList.add("visible");
    state.timer = setInterval(() => {
      state.timeLeft--;
      timerValue.textContent = state.timeLeft;
      if (state.timeLeft <= 5) timerDisplay.classList.add("warning");
      recordWpmSnapshot();
      if (state.timeLeft <= 0) endTest();
    }, 1000);
  } else {
    timerDisplay.classList.add("visible");
    liveStats.classList.add("visible");
    state.timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
      timerValue.textContent = elapsed;
      recordWpmSnapshot();
    }, 1000);
  }
}

function recordWpmSnapshot() {
  const elapsed = (Date.now() - state.startTime) / 60000;
  const wpm = elapsed > 0 ? Math.round(state.correctChars / 5 / elapsed) : 0;

  const raw = elapsed > 0 ? Math.round((state.correctChars + state.incorrectChars) / 5 / elapsed) : 0;

  const prev = state.wpmHistory.length > 0 ? state.wpmHistory[state.wpmHistory.length - 1] : { _c: 0, _i: 0 };
  const dCorrect = state.correctChars - (prev._c || 0);
  const dIncorrect = state.incorrectChars - (prev._i || 0);
  const errors = dIncorrect;
  // burst is raw speed in the last second
  const burst = Math.round((dCorrect + dIncorrect) / 5 * 60);

  state.wpmHistory.push({
    time: state.wpmHistory.length + 1,
    wpm,
    raw,
    errors,
    burst,
    _c: state.correctChars,
    _i: state.incorrectChars
  });

  liveWpm.textContent = wpm;
  const total = state.correctChars + state.incorrectChars;
  liveAcc.textContent = total > 0 ? Math.round((state.correctChars / total) * 100) + "%" : "—";
}

/* ── Input handling ─────────────────────────────────────────── */
hiddenInput.addEventListener("input", handleInput);
hiddenInput.addEventListener("keydown", handleKeydown);
wordsContainer.addEventListener("click", () => hiddenInput.focus());
wordsContainer.addEventListener("focus", () => hiddenInput.focus());

function handleKeydown(e) {
  if (state.finished) return;

  // Tab+Enter => restart
  if (e.key === "Tab") { e.preventDefault(); return; }

  if (e.key === "Backspace") {
    e.preventDefault();
    handleBackspace(e.ctrlKey);
    return;
  }

  // Start on first real key
  if (!state.started && e.key.length === 1) {
    if (state.mode === "paragraph" && !state.paragraphConfirmed) {
      e.preventDefault();
      paraOverlay.classList.add("open");
      hiddenInput.blur();
      return;
    }
    state.started = true;
    // Show caret only now, positioned at current letter
    updateCaretPos();
    caretEl.classList.add("visible");
    startTimer();
  }

  // End test if words mode and all done
  if (state.mode === "words" && state.wordIndex >= state.words.length) {
    endTest();
  }
}

function handleInput(e) {
  if (state.finished) return;
  const val = hiddenInput.value;
  hiddenInput.value = "";

  if (val === " " || val === "") {
    if (val === " " && state.currentInput.length > 0) commitWord();
    return;
  }

  const ch = val[val.length - 1];
  if (ch === " ") {
    if (state.currentInput.length > 0) commitWord();
    return;
  }

  typeLetter(ch);
}

function typeLetter(ch) {
  const word = state.words[state.wordIndex];
  if (!word) return;

  state.currentInput += ch;
  const li = state.currentInput.length - 1;

  const wordEl = wordsContainer.children[state.wordIndex];
  if (!wordEl) return;

  if (li < word.length) {
    const letterEl = wordEl.children[li];
    if (ch === word[li]) {
      letterEl.className = "letter correct";
      state.correctChars++;
    } else {
      letterEl.className = "letter incorrect";
      state.incorrectChars++;
    }
  } else {
    // Extra character
    const extra = document.createElement("span");
    extra.classList.add("letter", "extra");
    extra.textContent = ch;
    wordEl.appendChild(extra);
    state.extraChars++;
    state.incorrectChars++;
  }

  updateCaretPos();
}

function handleBackspace(ctrl) {
  if (state.currentInput.length === 0) {
    // Go back to previous word
    if (state.wordIndex === 0) return;
    state.wordIndex--;
    state.currentInput = state.inputHistory.pop() || "";
    // Remove any extra letters
    const wordEl = wordsContainer.children[state.wordIndex];
    const word = state.words[state.wordIndex];
    while (wordEl.children.length > word.length) wordEl.removeChild(wordEl.lastChild);
    // Re-apply styles
    for (let i = 0; i < state.currentInput.length; i++) {
      const ch = state.currentInput[i];
      if (i < wordEl.children.length) {
        wordEl.children[i].className = "letter " + (ch === word[i] ? "correct" : "incorrect");
      }
    }
    // Reset remainder
    for (let i = state.currentInput.length; i < word.length; i++) {
      wordEl.children[i].className = "letter pending";
    }
    wordEl.classList.remove("error");
    updateCaretPos();
    return;
  }

  if (ctrl) {
    // Erase whole word
    const wordEl = wordsContainer.children[state.wordIndex];
    const word = state.words[state.wordIndex];
    while (wordEl.children.length > word.length) wordEl.removeChild(wordEl.lastChild);
    Array.from(wordEl.children).forEach(l => l.className = "letter pending");
    state.currentInput = "";
    updateCaretPos();
    return;
  }

  // Single backspace
  const wordEl = wordsContainer.children[state.wordIndex];
  const word = state.words[state.wordIndex];
  const li = state.currentInput.length - 1;

  if (li >= word.length) {
    wordEl.removeChild(wordEl.lastChild);
  } else if (wordEl.children[li]) {
    wordEl.children[li].className = "letter pending";
  }
  state.currentInput = state.currentInput.slice(0, -1);
  updateCaretPos();
}

function commitWord() {
  const word = state.words[state.wordIndex];
  const wordEl = wordsContainer.children[state.wordIndex];

  // Check if word has errors
  let hasError = false;
  if (state.currentInput.length !== word.length) {
    hasError = true;
    state.missedChars += Math.abs(word.length - state.currentInput.length);
  }
  for (let i = 0; i < Math.min(state.currentInput.length, word.length); i++) {
    if (state.currentInput[i] !== word[i]) { hasError = true; break; }
  }
  if (hasError) wordEl.classList.add("error");
  else {
    wordEl.classList.add("just-completed");
    setTimeout(() => wordEl.classList.remove("just-completed"), 150);
  }

  state.inputHistory.push(state.currentInput);
  state.currentInput = "";
  state.wordIndex++;

  // Scroll words
  scrollWords();

  // Words mode — check end
  if (state.mode === "words" && state.wordIndex >= state.words.length) {
    endTest(); return;
  }
  // Quote mode — check end
  if (state.mode === "quote" && state.wordIndex >= state.words.length) {
    endTest(); return;
  }
  // Paragraph mode — check end
  if (state.mode === "paragraph" && state.wordIndex >= state.words.length) {
    endTest(); return;
  }

  updateCaretPos();
}

/* ── Scroll words to keep current line visible ──────────────── */
function scrollWords() {
  const wordEl = wordsContainer.children[state.wordIndex];
  if (!wordEl) return;
  const containerTop = wordsContainer.getBoundingClientRect().top;
  const wordTop = wordEl.getBoundingClientRect().top;
  const lineH = parseFloat(getComputedStyle(wordsContainer).lineHeight) || 48;
  const relativeTop = wordTop - containerTop;
  if (relativeTop > lineH * 1.2) {
    wordsContainer.scrollTop += lineH;
  }
}

/* ── Caret positioning ──────────────────────────────────────── */
function updateCaretPos() {
  const wordEl = wordsContainer.children[state.wordIndex];
  if (!wordEl) return;

  const li = state.currentInput.length;
  let targetEl;

  if (li < wordEl.children.length) {
    targetEl = wordEl.children[li];
  } else {
    // After last letter: place caret to the right of it
    targetEl = wordEl.children[wordEl.children.length - 1];
  }

  if (!targetEl) return;

  // Position relative to test-wrapper — the caret's actual CSS offset parent.
  // getBoundingClientRect() already accounts for the container's scroll,
  // so we must NOT add scrollTop manually.
  const wrapperRect = $('test-wrapper').getBoundingClientRect();
  const targetRect = targetEl.getBoundingClientRect();

  let left = targetRect.left - wrapperRect.left;
  let top = targetRect.top - wrapperRect.top;

  // If we've typed past the last letter, place caret after it
  if (li >= wordEl.children.length) {
    left = targetRect.right - wrapperRect.left;
  }

  caretEl.style.left = left + 'px';
  caretEl.style.top = top + 'px';
  caretEl.style.height = targetRect.height + 'px';
}

/* ── End test ───────────────────────────────────────────────── */
function endTest() {
  if (state.finished) return;
  state.finished = true;
  clearInterval(state.timer);
  hiddenInput.blur();

  const elapsed = (Date.now() - state.startTime) / 1000;
  const minutes = elapsed / 60;
  const wpm = Math.round(state.correctChars / 5 / minutes);
  const raw = Math.round((state.correctChars + state.incorrectChars) / 5 / minutes);
  const total = state.correctChars + state.incorrectChars;
  const acc = total > 0 ? Math.round((state.correctChars / total) * 100) : 0;

  $("result-wpm").textContent = isFinite(wpm) ? wpm : 0;
  $("result-acc").textContent = acc + "%";
  $("result-raw").textContent = isFinite(raw) ? raw : 0;
  $("result-time").textContent = Math.round(elapsed) + "s";
  $("result-mode").textContent = state.mode === "time"
    ? `time — ${state.timeLimit}s`
    : state.mode === "words"
      ? `words — ${state.wordCount}`
      : state.mode;

  const correct = state.correctChars;
  const incorrect = state.incorrectChars;
  const extra = state.extraChars;
  const missed = state.missedChars;
  $("result-chars").innerHTML =
    `<span style="color:var(--success)">${correct}</span>/` +
    `<span style="color:var(--danger)">${incorrect}</span>/` +
    `<span style="color:var(--info)">${extra}</span>/` +
    `<span style="color:var(--text-muted)">${missed}</span>`;

  // Motivational
  const msgs = wpm >= 100 ? ["Insane speed! 🔥", "You're on fire!", "Blazing fast! ⚡"]
    : wpm >= 70 ? ["Great job! 💪", "Keep it up!", "Solid performance!"]
      : wpm >= 40 ? ["Good effort! 👍", "Getting there!", "Practice makes perfect."]
        : ["Keep practicing! 🎯", "Every expert was once a beginner.", "You've got this!"];
  $("motivational-msg").textContent = msgs[Math.floor(Math.random() * msgs.length)];

  setTimeout(() => {
    testScreen.classList.remove("active");
    resultScreen.classList.add("active");
    drawGraph();
  }, 300);
}

/* ── WPM Graph ──────────────────────────────────────────────── */
function drawGraph() {
  const canvas = $("wpm-graph");
  const container = canvas.parentElement; // graph-scroll-area

  // Set very high resolution for crisp rendering
  const dpr = window.devicePixelRatio || 1;
  const baseWidth = container.parentElement.clientWidth - 40 || 800; // Account for padding
  const baseHeight = container.clientHeight || 160;

  const logicalWidth = Math.max(baseWidth, baseWidth * state.graphZoom);
  const logicalHeight = baseHeight;

  canvas.style.width = logicalWidth + "px";
  canvas.style.height = logicalHeight + "px";

  canvas.width = logicalWidth * dpr;
  canvas.height = logicalHeight * dpr;

  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const W = logicalWidth;
  const H = logicalHeight;
  const data = state.wpmHistory;

  ctx.clearRect(0, 0, W, H);

  const isDark = !document.body.classList.contains("light");
  const bg = isDark ? "#16213e" : "#f1f5f9";
  const grid = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
  const accent = "#e2b714";
  const textC = isDark ? "#4a5568" : "#94a3b8";

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  if (!data.length) return;

  const maxWpm = Math.max(...data.map(d => Math.max(d.wpm, d.raw || 0)), 10);
  const padL = 40, padR = 20, padT = 20, padB = 30;
  const gW = W - padL - padR;
  const gH = H - padT - padB;

  // Save layout data on canvas for tooltip calculation
  canvas._layout = { padL, padR, padT, padB, gW, gH, maxWpm, data };

  // Grid lines
  ctx.strokeStyle = grid;
  ctx.lineWidth = 1;
  [0, 0.25, 0.5, 0.75, 1].forEach(frac => {
    const y = padT + gH * (1 - frac);
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(padL + gW, y); ctx.stroke();
    ctx.fillStyle = textC;
    ctx.font = "11px 'Roboto Mono', monospace";
    ctx.textAlign = "right";
    ctx.fillText(Math.round(maxWpm * frac), padL - 6, y + 4);
  });

  // X axis labels
  ctx.fillStyle = textC;
  ctx.textAlign = "center";
  data.forEach((d, i) => {
    if (i % Math.max(1, Math.floor(data.length / 8)) === 0) {
      const x = padL + (i / (data.length - 1 || 1)) * gW;
      ctx.fillText(d.time + "s", x, H - 6);
    }
  });

  // Gradient fill
  const grad = ctx.createLinearGradient(0, padT, 0, padT + gH);
  grad.addColorStop(0, "rgba(226,183,20,0.4)");
  grad.addColorStop(1, "rgba(226,183,20,0)");

  ctx.beginPath();
  data.forEach((d, i) => {
    const x = padL + (i / (data.length - 1 || 1)) * gW;
    const y = padT + gH * (1 - d.wpm / maxWpm);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  const lastX = padL + gW;
  const lastY = padT + gH;
  ctx.lineTo(lastX, lastY);
  ctx.lineTo(padL, lastY);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 2.5;
  ctx.lineJoin = "round";
  data.forEach((d, i) => {
    const x = padL + (i / (data.length - 1 || 1)) * gW;
    const y = padT + gH * (1 - d.wpm / maxWpm);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Raw WPM Line
  ctx.beginPath();
  ctx.strokeStyle = textC; // Grey
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  data.forEach((d, i) => {
    const x = padL + (i / (data.length - 1 || 1)) * gW;
    const y = padT + gH * (1 - (d.raw || 0) / maxWpm);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();

  // WPM Dots
  data.forEach((d, i) => {
    const x = padL + (i / (data.length - 1 || 1)) * gW;
    const y = padT + gH * (1 - d.wpm / maxWpm);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = accent;
    ctx.fill();
  });

  // Errors 'x' markers
  const errColor = isDark ? "#ef4444" : "#dc2626";
  ctx.strokeStyle = errColor;
  ctx.lineWidth = 2;
  data.forEach((d, i) => {
    if (d.errors > 0) {
      const x = padL + (i / (data.length - 1 || 1)) * gW;
      const y = padT + gH * (1 - d.wpm / maxWpm);
      ctx.beginPath();
      ctx.moveTo(x - 3, y - 10 - 3);
      ctx.lineTo(x + 3, y - 10 + 3);
      ctx.moveTo(x + 3, y - 10 - 3);
      ctx.lineTo(x - 3, y - 10 + 3);
      ctx.stroke();
    }
  });
}

/* ── Graph Tooltip Events ───────────────────────────────────── */
const wpmGraph = $("wpm-graph");
const graphTooltip = $("graph-tooltip");
const ttTime = $("tt-time");
const ttErrors = $("tt-errors");
const ttWpm = $("tt-wpm");
const ttRaw = $("tt-raw");
const ttBurst = $("tt-burst");

$("zoom-in-btn").addEventListener("click", () => {
  if (state.graphZoom < 5) {
    state.graphZoom += 0.5;
    drawGraph();
  }
});

$("zoom-out-btn").addEventListener("click", () => {
  if (state.graphZoom > 1) {
    state.graphZoom -= 0.5;
    drawGraph();
  }
});

wpmGraph.addEventListener("mousemove", (e) => {
  const layout = wpmGraph._layout;
  if (!layout || !layout.data.length) return;

  const rect = wpmGraph.getBoundingClientRect();
  const x = e.clientX - rect.left;

  if (x < layout.padL || x > layout.padL + layout.gW) {
    graphTooltip.classList.add("hidden");
    return;
  }

  // Find closest data point index
  const fraction = (x - layout.padL) / layout.gW;
  const idx = Math.round(fraction * (layout.data.length - 1));
  const pt = layout.data[idx];
  if (!pt) return;

  // Position tooltip
  const ptX = layout.padL + (idx / (layout.data.length - 1 || 1)) * layout.gW;

  // Place it slightly above the point or fixed
  const yOffset = 20;

  graphTooltip.style.left = ptX + "px";
  graphTooltip.style.top = yOffset + "px";
  graphTooltip.classList.remove("hidden");

  ttTime.textContent = pt.time;
  ttErrors.textContent = pt.errors || 0;
  ttWpm.textContent = pt.wpm || 0;
  ttRaw.textContent = pt.raw || 0;
  ttBurst.textContent = pt.burst || 0;
});

wpmGraph.addEventListener("mouseleave", () => {
  graphTooltip.classList.add("hidden");
});

/* ── Screens ────────────────────────────────────────────────── */
function showTestScreen() {
  testScreen.classList.add("active");
  resultScreen.classList.remove("active");
}

/* ── Toast ──────────────────────────────────────────────────── */
function showToast(msg, duration = 2000) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), duration);
}

/* ── Mode/option buttons ────────────────────────────────────── */
document.querySelectorAll("[data-mode]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-mode]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.mode = btn.dataset.mode;

    timeSelector.classList.toggle("hidden", state.mode !== "time");
    wordSelector.classList.toggle("hidden", state.mode !== "words");

    if (state.mode === "zen") {
      timerDisplay.classList.remove("visible");
      showToast("Zen mode — type freely, no timer");
    }
    if (state.mode === "paragraph") {
      showToast("Paragraph mode — complete the full paragraph");
    }
    init();
  });
});

document.querySelectorAll("[data-time]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-time]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.timeLimit = parseInt(btn.dataset.time);
    init();
  });
});

document.querySelectorAll("[data-words]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-words]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.wordCount = parseInt(btn.dataset.words);
    init();
  });
});

document.querySelectorAll("[data-modifier]").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("toggled");
    const mod = btn.dataset.modifier;
    if (mod === "punctuation") state.usePunctuation = !state.usePunctuation;
    if (mod === "numbers") state.useNumbers = !state.useNumbers;
    showToast(mod + (btn.classList.contains("toggled") ? " on" : " off"));
    init();
  });
});

/* ── Restart ────────────────────────────────────────────────── */
restartBtn.addEventListener("click", init);
retryBtn.addEventListener("click", init);
newTestBtn.addEventListener("click", () => { generateWords(); init(); });

/* ── Tab + Enter ────────────────────────────────────────────── */
document.addEventListener("keydown", e => {
  if (e.key === "Tab") { e.preventDefault(); }
  if (e.key === "Enter" && e.target !== hiddenInput) {
    init();
  }
});

// Detect Tab held then Enter
let tabHeld = false;
document.addEventListener("keydown", e => {
  if (e.key === "Tab") tabHeld = true;
});
document.addEventListener("keyup", e => {
  if (e.key === "Tab") tabHeld = false;
  if (e.key === "Enter" && tabHeld) init();
});

/* ── Theme ──────────────────────────────────────────────────── */
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "🌙" : "☀";
  showToast(isLight ? "Light mode" : "Dark mode");
});

/* ── Window resize — re-calc caret ─────────────────────────── */
window.addEventListener("resize", () => updateCaretPos());

/* ── Logo restarts test ─────────────────────────────────────── */
$("logo-btn").addEventListener("click", e => { e.preventDefault(); init(); });

/* ── Custom time modal ──────────────────────────────────────── */
const MAX_SECONDS = 86340; // 23h 59m

const customOverlay = $("custom-time-overlay");
const customInput = $("custom-time-input");
const customError = $("modal-error");
const customCurrentLb = $("modal-current-label");
const customApplyBtn = $("modal-apply-btn");
const customCancelBtn = $("modal-cancel-btn");
const customTimeBtn = $("time-custom");

/** Parse user input into total seconds.
 *  Accepts: "30" (seconds), "1h", "45m", "1h30m", "1h 30m"
 *  Returns seconds (integer) or NaN if invalid.
 */
function parseCustomTime(raw) {
  const s = raw.trim().toLowerCase().replace(/\s+/g, "");
  if (!s) return NaN;

  // Pure number → treat as seconds
  if (/^\d+$/.test(s)) {
    return parseInt(s, 10);
  }

  // Pattern: optional Xh optional Ym
  const match = s.match(/^(?:(\d+)h)?(?:(\d+)m)?$/);
  if (!match || (!match[1] && !match[2])) return NaN;

  const h = parseInt(match[1] || "0", 10);
  const m = parseInt(match[2] || "0", 10);
  return h * 3600 + m * 60;
}

/** Format seconds as a human-readable label */
function formatDuration(secs) {
  if (secs < 60) return secs + " second" + (secs !== 1 ? "s" : "");
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  let parts = [];
  if (h) parts.push(h + "h");
  if (m) parts.push(m + "m");
  if (s) parts.push(s + "s");
  return parts.join(" ");
}

function openCustomModal() {
  customInput.value = state.timeLimit < 60
    ? String(state.timeLimit)
    : formatDuration(state.timeLimit).replace(/\s/g, "");
  customCurrentLb.textContent = formatDuration(state.timeLimit);
  customError.textContent = "";
  customInput.classList.remove("invalid");
  customOverlay.classList.add("open");
  setTimeout(() => customInput.focus(), 80);
}

function closeCustomModal() {
  customOverlay.classList.remove("open");
}

function applyCustomTime() {
  const secs = parseCustomTime(customInput.value);

  if (isNaN(secs) || secs <= 0) {
    customError.textContent = "Invalid format. Try: 30  |  1h  |  45m  |  2h30m";
    customInput.classList.add("invalid");
    customInput.focus();
    return;
  }
  if (secs > MAX_SECONDS) {
    customError.textContent =
      `Maximum is 23h 59m (86,340 s). You entered ${formatDuration(secs)}.`;
    customInput.classList.add("invalid");
    customInput.focus();
    return;
  }

  // Apply — deactivate preset buttons, mark custom active
  document.querySelectorAll("[data-time]").forEach(b => b.classList.remove("active"));
  customTimeBtn.classList.add("active");
  customTimeBtn.title = formatDuration(secs);

  state.timeLimit = secs;
  closeCustomModal();
  showToast("Custom: " + formatDuration(secs));
  init();
}

// Live validation while typing
customInput.addEventListener("input", () => {
  const secs = parseCustomTime(customInput.value);
  customInput.classList.toggle("invalid", !isNaN(secs) && (secs <= 0 || secs > MAX_SECONDS));
  if (!isNaN(secs) && secs > 0 && secs <= MAX_SECONDS) {
    customCurrentLb.textContent = formatDuration(secs);
    customError.textContent = "";
  } else if (!isNaN(secs) && secs > MAX_SECONDS) {
    customError.textContent = "Exceeds maximum (23h 59m).";
  } else {
    customError.textContent = "";
  }
});

// Enter inside modal applies
customInput.addEventListener("keydown", e => {
  if (e.key === "Enter") { e.preventDefault(); applyCustomTime(); }
  if (e.key === "Escape") { e.preventDefault(); closeCustomModal(); }
});

customTimeBtn.addEventListener("click", openCustomModal);
customApplyBtn.addEventListener("click", applyCustomTime);
customCancelBtn.addEventListener("click", closeCustomModal);

// Click outside modal to close
customOverlay.addEventListener("click", e => {
  if (e.target === customOverlay) closeCustomModal();
});

// Escape key to close
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && customOverlay.classList.contains("open")) {
    closeCustomModal();
  }
});

/* ── Paragraph confirmation modal ───────────────────────────── */
paraCancelBtn.addEventListener("click", () => {
  paraOverlay.classList.remove("open");

  // Switch back to default 30s time test
  document.querySelectorAll("[data-mode]").forEach(b => b.classList.remove("active"));
  $("opt-time").classList.add("active");
  state.mode = "time";

  document.querySelectorAll("[data-time]").forEach(b => b.classList.remove("active"));
  $("time-30").classList.add("active");
  state.timeLimit = 30;

  timeSelector.classList.remove("hidden");
  wordSelector.classList.add("hidden");

  init();
});

paraProceedBtn.addEventListener("click", () => {
  paraOverlay.classList.remove("open");
  state.paragraphConfirmed = true;
  hiddenInput.focus();
});

/* ── Boot ───────────────────────────────────────────────────── */
init();