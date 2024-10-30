

function copyEmail() {
    const emailText = document.getElementById("email").innerText;
    const tempInput = document.createElement("input");
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Email copied to clipboard!");
}

