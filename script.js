function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");
}

window.onload = function () {
  const hasStarted = localStorage.getItem("cellverseStarted") === "true";

  if (window.location.hash === "#dashboard" && hasStarted) {
    openDashboard();
  } else if (hasStarted) {
    document.querySelector(".hero-card button").innerText = "🚀 CONTINUE CELLVERSE";
  }

  updateProgressDots();
};

function startShrink() {
  const name = document.getElementById("studentName").value.trim();
  const studentClass = document.getElementById("studentClass").value.trim();

  if (name === "" && localStorage.getItem("cellverseName") === null) {
    alert("Please enter your Explorer Name.");
    return;
  }

  if (name !== "") localStorage.setItem("cellverseName", name);
  if (studentClass !== "") localStorage.setItem("cellverseClass", studentClass);

  localStorage.setItem("cellverseStarted", "true");

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
      setTimeout(openDashboard, 800);
    }
  }, 600);
}

function openDashboard() {
  const name = localStorage.getItem("cellverseName") || "Explorer";
  const studentClass = localStorage.getItem("cellverseClass") || "";

  document.getElementById("welcomeText").innerText =
    "Welcome back, Explorer " + name + (studentClass ? " from " + studentClass : "") + ". Continue your mission.";

  updateProgressDots();
  showScreen("dashboard");
}

function updateProgressDots() {
  for (let i = 0; i < 6; i++) {
    const dot = document.getElementById("dot" + i);
    if (dot && localStorage.getItem("mission" + i + "Complete") === "true") {
      dot.classList.add("completed-dot");
    }
  }
}
