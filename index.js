// Complete the function using object destructuring.

function getStudentDetails(students) {
    const{name,age,grade} = students;
    return{
        name,
        age,
        grade
    };
}

module.exports = getStudentDetails;
