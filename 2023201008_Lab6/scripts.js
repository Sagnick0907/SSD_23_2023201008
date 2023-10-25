function validName() {
    const teamNameInput = document.getElementById("teamname");
    const errorDiv = document.querySelector(".error");

    // Regular expression to check for at least one uppercase letter and one numeric character
    const regex = /^(?=.*[A-Z])(?=.*\d).+$/;

    if (regex.test(teamNameInput.value)) {
        errorDiv.style.display = "none"; // Hide error message
    } else {
        errorDiv.style.display = "block"; // Show error message
    }
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
}

function validatePassword() {
    const passwordInput = document.getElementById("passwd");
    const confirmPasswordInput = document.querySelector('input[name="passwd2"]');
    const errorDiv = document.querySelector('.error');

    // Get the values of the password and confirm password fields
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    // Check if the passwords match
    if (passwordValue !== confirmPasswordValue) {
        errorDiv.style.display = "block"; // Display error message
    } else {
        errorDiv.style.display = "none"; // Hide error message
    }
}


function allowDrop(event) {
    event.preventDefault();
}

// Function called when the drag operation starts
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Function called while an element is being dragged (optional)
function dragging(event) {
    // You can add any desired behavior here while dragging.
}

// Function called when an element is dropped
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "Dropped: " + data;
}

function validatePicklist() {
    const selectedMembers = document.getElementById('selectedMembers');
    const picklistErrorDiv = selectedMembers.nextElementSibling;

    if (selectedMembers.options.length === 0) {
        picklistErrorDiv.style.display = 'block';
        return false;
    } else {
        picklistErrorDiv.style.display = 'none';
        return true;
    }
}
function toggleMode() {
    const body = document.body;

    // Toggle the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');
}

// Event listener to toggle mode when Ctrl + M is pressed
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'm') {
        toggleMode();
    }
});
function validateForm() {
    let isValid = true;

    const teamNameInput = document.getElementById('teamName');
    const errorDiv = teamNameInput.nextElementSibling;

    if (!(teamNameInput.value.length > 0 && /^(?=.[A-Z])(?=.\d).+$/.test(teamNameInput.value))) {
        teamNameInput.classList.add('is-invalid');
        errorDiv.style.display = 'block';
        isValid = false;
    }

    isValid = isValid && validatePicklist();

    return isValid;
}

function handleSubmit(event) {
    event.preventDefault();

    // Gather form data
    const teamName = document.getElementById("teamname").value;
    const teamEmail = document.querySelector('input[type="email"]').value;
    const teamCoach = document.querySelector('input[name="coachname"]').value;
    const teamCaptain = document.getElementById("teamCaptain").value;
    const teamMembersContainer = document.querySelectorAll('.droptarget')[1];
    const teamMembers = teamMembersContainer.querySelectorAll('p');

    // Extract member names
    const memberNames = [];
    for (const member of teamMembers) {
        memberNames.push(member.textContent);
    }

    // Create the alert message
    const alertMessage = `
        Team Name: ${teamName}
        Team Email ID: ${teamEmail}
        Team Coach Name: ${teamCoach}
        Team Captain: ${teamCaptain}
        Team Members: ${memberNames.join(", ")}
    `;

    // Display the alert with the gathered data
    alert(alertMessage);
}