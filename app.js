import { getStudentsAPI, addStudentsAPI } from "./api.js";

const localStudent = []; // Local array to store student records for rendering
const studentForm = document.getElementById("studentForm"); // Get the form element from the DOM
const studentTableBody = document.getElementById("studentTableBody"); // Get the table body element where student records will be rendered
const normalizeName = (value) => {
    return value
        .toLowerCase()
        .split(/\s+/)
        .map((word) => {
            return word
                .split(/(-)/)
                .map((segment) => segment ? segment.charAt(0).toUpperCase() + segment.slice(1) : segment)
                .join("");
        })
        .join(" ");
}; // Function to normalize names by capitalizing the first letter of each word and handling hyphenated names

const renderTable = (dataArray) => {
    studentTableBody.innerHTML = "";

    if (!dataArray || dataArray.length === 0) {
        studentTableBody.innerHTML = `<tr><td colspan="4">No student records found.</td></tr>`;
        return;
    };
    dataArray.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
        `;
        studentTableBody.appendChild(row);
    });
};

studentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const nameRegex = /^[\p{L}\p{M}\s-]{2,}$/u; // Regular expression to validate names (at least 2 characters, letters, spaces, and hyphens)

    if (!firstName || !lastName || !email) {
        alert("Please fill out all input fields!");
        return;
    }; // Validate that all input fields are filled out

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        alert("Names must be at least 2 characters and may only contain letters, spaces, and hyphens.");
        return;
    }; // Validate that first and last names meet the specified criteria

    const normalizedFirstName = normalizeName(firstName);
    const normalizedLastName = normalizeName(lastName);
    const normalizedEmail = email.toLowerCase(); // Normalize email to lowercase for consistency
    const studentData = { firstName: normalizedFirstName, lastName: normalizedLastName, email: normalizedEmail };

    addStudentsAPI(studentData);

    localStudent.length = 0;
    localStudent.push(...getStudentsAPI());
    
    renderTable(localStudent);
    studentForm.reset();
});

const initApp = () => {
    localStudent.push(...getStudentsAPI());
    renderTable(localStudent);
};

initApp();