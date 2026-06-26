let studentName = "";
let score = 0;
let currentQuestion = 0;

const questions = [
  {
    mission: "Mission 1: Cell Detective",
    question: "Which cell has no true nucleus?",
    answers: ["Animal cell", "Plant cell", "Prokaryotic cell", "Fungal cell"],
    correct: "Prokaryotic cell"
  },
  {
    mission: "Mission 2: Plant vs Animal Cell",
    question: "Which structure is found in plant cells but not animal cells?",
    answers: ["Mitochondrion", "Cell wall", "Ribosome", "Cell membrane"],
    correct: "Cell wall"
  },
  {
    mission: "Mission 3: Organelle Mission",
    question: "Which organelle is responsible for ATP production?",
    answers: ["Nucleus", "Golgi apparatus", "Mitochondrion", "Ribosome"],
    correct: "Mitochondrion"
  },
  {
    mission: "Mission 4: Fluid Mosaic Model",
    question: "Which molecule can pass directly through the phospholipid bilayer most easily?",
    answers: ["Glucose", "Protein", "Oxygen", "Sodium ion"],
    correct: "Oxygen"
  }
];

function startMission() {
  studentName = document.getElementById("studentName").value;

  if (studentName.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  document.querySelector(".hero").classList.add("hidden");
  document.getElementById("missionArea").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("missionTitle").innerText = q.mission;
  document.getElementById("questionText").innerText = q.question;
  document.getElementById("feedback").innerText = "";

  const answerDiv = document.getElementById("answerButtons");
  answerDiv.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.className = "answer-btn";
    btn.onclick = function() {
      checkAnswer(answer);
    };
    answerDiv.appendChild(btn);
  });
}

function checkAnswer(answer) {
  const q = questions[currentQuestion];

  if (answer === q.correct) {
    score += 10;
    document.getElementById("feedback").innerText = "✅ Correct! Excellent, Cell Scientist!";
  } else {
    document.getElementById("feedback").innerText = "❌ Not quite. Correct answer: " + q.correct;
  }

  document.getElementById("score").innerText = score;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endMission();
  }
}

function endMission() {
  document.getElementById("missionArea").classList.add("hidden");
  document.getElementById("finalArea").classList.remove("hidden");

  document.getElementById("finalMessage").innerText =
    studentName + ", your final score is " + score + " / 40.";
}
