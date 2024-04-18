let showElderlyCheckbox = document.getElementById("chkElderlyPatients");
let showOutPatientsCheckbox = document.getElementById("chkShowOutPatients");
let tableBody = document.getElementById("tbodyPatientsList");

document.getElementById("patientForm").addEventListener('submit', function(event){

    event.preventDefault();
    let id = document.createElement("td");
    let idStr = document.getElementById("patientIdNumber").value;
    let idText = document.createTextNode(idStr);
    id.appendChild(idText);


    let firstName = document.createElement("td");
    let firstNameStr = document.getElementById("firstName").value;
    let firstNameText = document.createTextNode(firstNameStr);
    firstName.appendChild(firstNameText);


    let middleInitials = document.createElement("td");
    let middleInitialsStr = document.getElementById("middleInitials").value;
    let middleInitialsText = document.createTextNode(middleInitialsStr);
    middleInitials.appendChild(middleInitialsText);


    let lastName = document.createElement("td");
    let lastNameStr = document.getElementById("lastName").value;
    let lastNameText = document.createTextNode(lastNameStr);
    lastName.appendChild(lastNameText);


    let dateOfBirth = document.createElement("td");
    let dateOfBirthStr = document.getElementById("dateOfBirth").value;
    let dateOfBirthText = document.createTextNode(dateOfBirthStr);
    dateOfBirth.appendChild(dateOfBirthText);


    let department = document.createElement("td");
    let departmentStr = document.getElementById("ddlDepartment").value;
    let departmentText = document.createTextNode(departmentStr);
    department.appendChild(departmentText);


    let isOutPatient = document.createElement("td");
    let radio = document.getElementsByName("radioIsOutPatient");
    
    let isOutPatientText;
    for(i = 0; i < radio.length; i++){
        if(radio[i].checked)
            isOutPatientText = document.createTextNode(radio[i].value);
    }

    isOutPatient.appendChild(isOutPatientText)

    let row = document.createElement("tr");
    row.appendChild(id);
    row.appendChild(firstName);
    row.appendChild(middleInitials);
    row.appendChild(lastName);
    row.appendChild(dateOfBirth);
    row.appendChild(department);
    row.appendChild(isOutPatient);

    let tableBody = document.getElementById("tbodyPatientsList");
    tableBody.appendChild(row);


    document.getElementById("patientForm").reset();
})

function calculateAge(dob){
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}

function filterPatients() {
    let elderlyOnly = showElderlyCheckbox.checked;
    let outPatientsOnly = showOutPatientsCheckbox.checked;

    const rows = tableBody.querySelectorAll("tr");
    rows.forEach(row => {
        const isElderly = calculateAge(row.cells[4].textContent) >= 65;
        const isOutPatient = row.cells[6].textContent === "Yes";

        if((elderlyOnly && !isElderly) || (outPatientsOnly && !isOutPatient)){
            row.style.display = "none";
        } else {
            row.style.display = "";
        }
    });
}

showElderlyCheckbox.addEventListener("change", function() {
    filterPatients();
})

showOutPatientsCheckbox.addEventListener("change", function() {
    filterPatients();
})