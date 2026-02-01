function submitQuiz() {
  const answer = document.getElementById("quiz-answer").value.trim().toLowerCase();
  const result = document.getElementById("quiz-result");

  if(answer === "e=1/2cv^2" || answer === "e=1/2 cv^2") {
    result.innerText = "Čestitamo! Položili ste kviz.";
    localStorage.setItem("quizPassed", "true");
    showLab();
  } else {
    result.innerText = "Odgovor nije tačan, pokušajte ponovo.";
  }
}

function showLab() {
  if(localStorage.getItem("quizPassed") === "true") {
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("lab-content").style.display = "block";
  }
}

// Automatski prikaži vežbu ako je kviz već položen
showLab();

