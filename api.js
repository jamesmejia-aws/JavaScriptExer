

// Mock database with 2 student records
const mockStudentDB = [
    {
        id: 1779353927081,
        firstName: 'Leslie',
        lastName: 'Andrews',
        email: 'leslie.andrews@example.com'
    },
    {
        id: 1779353927081,
        firstName: 'Emma',
        lastName: 'Baumgarten',
        email: 'emma.baumgarten@example.com'
    }
];


//Simulates the GET REQUEST to fetch all students from the database
export function getStudentsAPI () {
    return mockStudentDB;
}

//Simulates the POST REQUEST to add a new student to the database
export function addStudentsAPI (newStudentData) {
    const savedStudent = {
        id: Math.floor(
        new Date(2020, 0, 1).getTime() +
        Math.random() * (Date.now() - new Date(2020, 0, 1).getTime())
        ), // Generate a random ID based on the current timestamp and a random offset
        ...newStudentData,
    };

    mockStudentDB.push(savedStudent);
    return savedStudent;
}

export {mockStudentDB};

