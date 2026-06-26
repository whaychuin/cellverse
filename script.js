function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}

function startShrink() {
  const name = document.getElementById("studentName").value.trim();
  const studentClass = document.getElementById("studentClass").value.trim();

  if (name === "") {
    alert("Please enter your Explorer Name.");
    return;
  }

  localStorage.setItem("cellverseName", name);
  localStorage.setItem("cellverseClass", studentClass);

  showScreen("shrink");

  const shrinkSteps = [
    "Initializing scan...",
    "DNA detected...",
    "Living organism confirmed...",
    "Activating Microscopic Reduction Chamber...",
    "Reducing size: 100 cm",
    "Reducing size: 10 cm",
    "Reducing size: 1 cm",
    "Reducing size: 1 mm",
    "Reducing size: 100 μm",
    "Reducing size: 20 μm",
    "Final size reached: 5 μm",
    "Entering CellVerse..."
  ];

  let step = 0;
  const text = document.getElementById("shrinkText");
  const fill = document.getElementById("loadingFill");

  const interval = setInterval(() => {
    text.innerText = shrinkSteps[step];
    fill.style.width = ((step + 1) / shrinkSteps.length) * 100 + "%";

    step++;

    if (step >= shrinkSteps.length) {
      clearInterval(interval);

      setTimeout(() => {
        openDashboard();
      }, 800);
    }
  }, 650);
}

function openDashboard() {
  const name = localStorage.getItem("cellverseName") || "Explorer";
  const studentClass = localStorage.getItem("cellverseClass") || "";

  document.getElementById("welcomeText").innerText =
    "Welcome, Explorer " + name + (studentClass ? " from " + studentClass : "") + ". Your mission begins now.";

  showScreen("dashboard");
}
let theoryUnlocked = [false, false, false];

function openMission0() {
  showScreen("mission0");
}

function unlockTheory(index) {
  theoryUnlocked[index] = true;
  document.getElementById("theory" + index).innerText = "🟢";

  const messages = [
    "Principle 1 unlocked: Living organisms are made of cells.",
    "Principle 2 unlocked: The cell is the basic unit of life.",
    "Principle 3 unlocked: New cells arise from pre-existing cells."
  ];

  document.getElementById("mission0Feedback").innerText = messages[index];
}

function completeMission0() {
  const completed = theoryUnlocked.every(item => item === true);

  if (!completed) {
    alert("Please unlock all three Cell Theory principles first.");
    return;
  }

  alert("Mission 0 completed! Reduction Chamber activated.");

  const dots = document.querySelectorAll(".progress-dots span");
  dots[0].style.background = "#66ff99";

  showScreen("dashboard");
}
function openMission0() {
  showScreen("mission0");
}
let bacteriaScanned = [false, false, false, false, false, false, false, false];

const bacteriaData = [
  {
    title: "🧬 Chromosomal DNA",
    info: "Single, circular, double-stranded DNA. It is not associated with histone protein and is found in the nucleoid region."
  },
  {
    title: "🧫 Plasmid",
    info: "Small circular double-stranded DNA that carries accessory genes. Some plasmids give bacteria resistance to certain antibiotics."
  },
  {
    title: "🧱 Cell Wall",
    info: "A rigid structure made of peptidoglycan. It helps maintain bacterial shape and provides protection."
  },
  {
    title: "🛡 Capsule",
    info: "A gel-like layer outside the cell wall. It provides extra protection to the bacterial cell."
  },
  {
    title: "🧵 Fimbriae",
    info: "Numerous short hair-like appendages that help bacteria attach to surfaces."
  },
  {
    title: "🔗 Pilus / Pili",
    info: "Larger than fimbriae. It helps bacteria attach to surfaces or to each other and may allow exchange of genetic material."
  },
  {
    title: "🌀 Flagellum",
    info: "A long thread-like structure used for locomotion. It is made of flagellin protein and lacks the 9+2 microtubule arrangement."
  },
  {
    title: "⚡ Mesosome",
    info: "Site for respiration in prokaryotic cells. It performs a similar function to mitochondria."
  }
];

function openMission1() {
  showScreen("mission1");
}

function scanBacteria(index) {
  bacteriaScanned[index] = true;

  document.getElementById("bacteria" + index).innerText = "🟢";
  document.getElementById("bacteriaTitle").innerText = bacteriaData[index].title;
  document.getElementById("bacteriaInfo").innerText = bacteriaData[index].info;
}

function completeMission1() {
  const completed = bacteriaScanned.every(item => item === true);

  if (!completed) {
    alert("Please scan all bacterial structures first.");
    return;
  }

  alert("Mission 1 completed! Badge unlocked: Bacteria Investigator 🦠");

  const dots = document.querySelectorAll(".progress-dots span");
  dots[1].style.background = "#66ff99";

  showScreen("dashboard");
}
