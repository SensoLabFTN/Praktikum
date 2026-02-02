const allowedDomain = "@student.uns.ac.rs"; // PROMENI PO POTREBI

function login() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const email = result.user.email;

      if (email.endsWith(allowedDomain)) {
        localStorage.setItem("authorized", "true");
        localStorage.setItem("userEmail", email);
        window.location.href = "labs.html";
      } else {
        document.getElementById("status").innerText =
          "Pristup dozvoljen samo za akademske mejlove.";
        firebase.auth().signOut();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

