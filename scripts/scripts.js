let printedEntry = `<p>Thanks! We will add that to the list. </p>`;

function onClickAddNew() {
    let newEntry = prompt("Enter the pothole name:").trim();
    printedEntry += `<p>${newEntry}</p>`;
    if (newEntry === null || newEntry === undefined || newEntry == 0) {
        alert(`Enter in a pothole.`);
    } else {
        document.getElementById("entered-pothole").innerHTML = printedEntry;
    }
}

function checkCredentials () { 
    let usernameAnswer = prompt("Enter your username.");
    let passwordAnswer = prompt("Enter your password.");
    if (usernameAnswer === null || usernameAnswer === undefined || usernameAnswer == 0) {
        alert (`Enter a username`);
    } else {
        passwordAnswer;
            if (passwordAnswer === null || passwordAnswer === undefined || passwordAnswer == 0) {
             alert (`No password entered. Log in again.`);  
            } else {
                alert(`Welcome.`);
            }
        }
}