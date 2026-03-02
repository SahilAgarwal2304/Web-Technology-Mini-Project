// Login Function
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234") {
        window.location.href = "committee_dashboard.html";
        return false;
    } else {
        alert("Invalid Credentials!");
        return false;
    }
}

// Load Dashboard Data
function loadDashboard() {

    if(!localStorage.getItem("events")) {
        localStorage.setItem("events", JSON.stringify([
            {name:"Dance", participants:20},
            {name:"Singing", participants:15},
            {name:"Drama", participants:10}
        ]));
    }

    let events = JSON.parse(localStorage.getItem("events"));

    document.getElementById("totalReg").innerText = 45;
    document.getElementById("totalTickets").innerText = 120;

    let list = document.getElementById("eventList");
    let table = document.getElementById("eventsTable");

    events.forEach((event, index) => {

        // Event-wise count
        let li = document.createElement("li");
        li.innerText = event.name + " : " + event.participants + " participants";
        list.appendChild(li);

        // Table row
        let row = table.insertRow();
        row.insertCell(0).innerText = event.name;

        let actions = row.insertCell(1);

        actions.innerHTML = `
            <button onclick="editEvent(${index})">Edit</button>
            <button onclick="deleteEvent(${index})">Delete</button>
        `;
    });
}

// Add Event
function addEvent() {
    let name = document.getElementById("newEvent").value;
    let events = JSON.parse(localStorage.getItem("events"));

    events.push({name:name, participants:0});
    localStorage.setItem("events", JSON.stringify(events));

    location.reload();
}

// Delete Event
function deleteEvent(index) {
    let events = JSON.parse(localStorage.getItem("events"));
    events.splice(index,1);
    localStorage.setItem("events", JSON.stringify(events));
    location.reload();
}

// Edit Event
function editEvent(index) {
    let events = JSON.parse(localStorage.getItem("events"));
    let newName = prompt("Enter new event name:");
    if(newName) {
        events[index].name = newName;
        localStorage.setItem("events", JSON.stringify(events));
        location.reload();
    }
}

// Approve Registration
function approveRegistration() {
    document.getElementById("approvalStatus").innerText = 
        "All registrations approved successfully!";
}