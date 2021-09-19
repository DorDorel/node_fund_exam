const topNStudentsAttendees = (students, attendees, N) => {

    let studentsList = [];
    students.forEach(student => {
        studentsList.push({
            name: student,
            arrivals: 0,
            lecture: []

        });
    });
    let numOfLecture = 0;
    for (let lecture of attendees) {
        const lectureLength = lecture.length;
        for (let attend = 0; attend <= lectureLength - 1; attend++) {
            const studentChecker = studentsList.find(val => val.name === lecture[attend]);
            if (studentChecker) {
                if (!studentChecker.lecture.includes(numOfLecture)) {
                    studentChecker.arrivals++;
                    studentChecker.lecture.push(numOfLecture);
                }
            }
            if (attend === lectureLength - 1) {
                numOfLecture++;
            }
        }
    }

    studentsList.sort((a, b) => {
        return b.arrivals - a.arrivals;
    });

    let top = [];
    for (let i = 0; i < N; i++) {
        top.push(studentsList[i].name);
    }

     return top;   
}






// // test
// students = ['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas'];

// attendees = [['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas', 'Ortal', 'Dor'],
// ['Berry', 'Nitzan', 'Yoni', 'Eden', 'Hadas', 'Ortal'],
// ['Maxim', 'Ortal', 'Yoni', 'Refael', 'Nitzan', 'Alex',],
// ['Eden', 'Andrew', 'Yoni', 'Nitzan', 'Ortal', 'Nitzan']];

// console.log(topNStudentsAttendees(students, attendees, 3));


