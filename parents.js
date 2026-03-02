// Dummy Student Data (stored in localStorage first time)

if(!localStorage.getItem("students")) {
    localStorage.setItem("students", JSON.stringify([
        {
            roll:"101",
            mobile:"9876543210",
            name:"Rahul Sharma",
            event:"Dance",
            time:"10:00 AM",
            costume:"Traditional Dress",
            seat:"A12"
        },
        {
            roll:"102",
            mobile:"9123456780",
            name:"Priya Patel",
            event:"Singing",
            time:"11:30 AM",
            costume:"White & Blue Outfit",
            seat:"B07"
        }
    ]));
}


// Login Function
function parentLogin() {

    let roll = document.getElementById("rollno").value;
    let mobile = document.getElementById("mobile").value;

    let students = JSON.parse(localStorage.getItem("students"));

    let found = students.find(student => 
        student.roll === roll && student.mobile === mobile
    );

    if(found) {
        localStorage.setItem("loggedStudent", JSON.stringify(found));
        window.location.href = "parents_dashboard.html";
        return false;
    } else {
        alert("Invalid Details!");
        return false;
    }
}


// Load Dashboard
function loadParentDashboard() {

    let student = JSON.parse(localStorage.getItem("loggedStudent"));

    if(student) {
        document.getElementById("studentName").innerText = student.name;
        document.getElementById("eventName").innerText = student.event;
        document.getElementById("eventTime").innerText = student.time;
        document.getElementById("costume").innerText = student.costume;
        document.getElementById("seatNo").innerText = student.seat;
    }
}