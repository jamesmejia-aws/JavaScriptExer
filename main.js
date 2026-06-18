import  { getStudentsAPI, addStudentsAPI } from "./api.js"

//Test Case 1
console.log("Initial DB State:",getStudentsAPI(), "\n");

//Test Case 2
const newStudent = addStudentsAPI({
    firstName: 'Light',
    lastName: 'Yagami',
    email: 'light.yagami@example.com'
});
console.log("Returned Saved Object:", newStudent, "\n");

//Test Case 3
console.log("Updated DB State:", getStudentsAPI(), "\n");