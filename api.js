
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

export function getStudentsAPI () {
    return mockStudentDB;
}

export function addStudentsAPI (newStudentData) {
    const savedStudent = {
        id: Math.floor(
        new Date(2020, 0, 1).getTime() +
        Math.random() * (Date.now() - new Date(2020, 0, 1).getTime())
        ),
        ...newStudentData,
    };

    mockStudentDB.push(savedStudent);
    return savedStudent;
}