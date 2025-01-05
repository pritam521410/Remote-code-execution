// script.js
document.getElementById("runCodeBtn").addEventListener("click", function() {
    const userCode = document.getElementById("codeInput").value;
    const outputElement = document.getElementById("output");

    try {
        // Execute the code entered by the user in a safe environment (in browser)
        let result = eval(userCode);
        outputElement.innerHTML = "Output: " + result;
    } catch (error) {
        outputElement.innerHTML = "Error: " + error.message;
    }
});
