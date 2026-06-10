const header = document.querySelector(".site-header");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// Simulator Logic
const screen = document.getElementById("sim-screen");
const btnDiag = document.getElementById("btn-diag");
const btnDeploy = document.getElementById("btn-deploy");
const btnVote = document.getElementById("btn-vote");

if (screen && btnDiag && btnDeploy && btnVote) {
  btnDiag.addEventListener("click", () => {
    screen.innerHTML = `<span style="color: var(--cyan);">> Running Candidate Diagnostics...</span><br>
[SYSTEM] Analyzing Zannatul Fardaus Zinia...<br>
[GPA] SSC Result: 5.00 / 5.00 <span style="color: var(--green);">[PASS]</span><br>
[LANGUAGES] English: Fluent, Bengali: Native, Japanese: Basic<br>
[TECH] HTML: Slay, C Prog: Slay, AI Prompting: Slay<br>
[LEADERSHIP] Language Club President (2 yrs) <span style="color: var(--green);">[PASS]</span><br>
[DIAGNOSTICS] Zinia is 100% club-ready. Status: READY`;
  });

  btnDeploy.addEventListener("click", () => {
    screen.innerHTML = `<span style="color: var(--cyan);">> Deploying Game Project...</span><br>
[BUILD] Compiling English Shooter Academy...<br>
[BUILD] Packaging assets...<br>
[DEPLOY] Uploading to Web Server...<br>
[DEPLOY] Live at: <a href="https://mubineurosia.github.io/quizzes/" target="_blank" style="color: var(--pink); text-decoration: underline;">mubineurosia.github.io/quizzes/</a><br>
[SUCCESS] Zinia's quiz game deployed successfully.`;
  });

  btnVote.addEventListener("click", () => {
    screen.innerHTML = `<span style="color: var(--pink);">> Casting Vote for Zinia...</span><br>
[VOTE] Processing ICT Club Executive vote...<br>
[VOTE] Candidate: Zannatul Fardaus Zinia<br>
[RESULT] Zinia selected as Executive Member!<br>
[VIBE] Vibe check passed with maximum points.<br>
[SYSTEM] "Slaying the HTML and coding the future."`;
  });
}
