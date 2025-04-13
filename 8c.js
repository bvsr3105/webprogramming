function confirmStudent() {
    let regNumber = prompt("Enter your registration number:");
    if (regNumber !== null && regNumber.trim() !== "") {
    let isStudent = confirm("Are you a student?");
    if (isStudent) {
    alert("Registration number " + regNumber + " confirmed as a student.");
    } else {
    alert("You are not a student.");
    }
    } else {
    alert("Invalid registration number. Please enter a valid one.");
    }
    }
    confirmStudent();