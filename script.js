function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}