function toggleText() {
    var text = document.getElementById("demo");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

const questions = Array("orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", "What?", "when?")
const answers = Array("song1", "song2", "song3");

function randomQuestion() {
  const len = answers.length;
  const rnd = Math.floor(Math.random() * len);
  document.getElementById('randomQuestion').value = questions[rnd];
  document.getElementById('randomAnswer').value = answers[rnd];
}
