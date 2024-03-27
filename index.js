function checkPassword() {
    // Get the value entered in the password input field
    var password = document.getElementById("passwordInput").value;

    // Check if the password matches the expected value
    if (password === "KWASU") {
        // If the password is correct, redirect to another page
        window.location.href = "main.html"; // Replace "another_page.html" with the URL of the page you want to redirect to
    } else {
        // If the password is incorrect, display an error message
        alert("Incorrect password. Please try again.");
         document.getElementById("errorMessage").style.display = "block";
    }
  }
