const allowedDomain = "@ftn.edu.rs"; // promeni po potrebi

const provider = new firebase.auth.GoogleAuthProvider();

function login() {
  firebase.auth().signInWithRedirect(provider);
}

firebase.auth().getRedirectResult()
  .then((result) => {
    if (!result.user) return;

    const email = result.user.email;

    if (email.endsWith(allowedDomain)) {
      localStorage.setItem("authorized", "true");
      localStorage.setItem("userEmail", email);
      window.location.href = "labs.html";
    } else {
      alert("Pristup dozvoljen samo studentima sa akademskim mejlom.");
      firebase.auth().signOut();
    }
  })
  .catch((error) => {
    console.error(error);
  });
