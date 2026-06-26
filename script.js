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
