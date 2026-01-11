document.getElementById("demoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;

  document.getElementById("message").innerText =
    "Thanks " + name + "! This is a demo submission.";
});
