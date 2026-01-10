
// Start Learning Button
document.getElementById("startBtn").onclick = function() {
    document.getElementById("message").innerText =
        "🚀 Coding journey started. Stay consistent!";
}

// Submit Button
document.getElementById("submitBtn").onclick = function() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if(name === "" || email === "") {
        document.getElementById("message").innerText = "⚠ Please fill all fields";
        return;
    }

    document.getElementById("message").innerText =
        "✅ Thanks " + name + "! We will contact you at " + email;
}
