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
