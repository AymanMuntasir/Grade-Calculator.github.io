function validate(event) {
    event.preventDefault();

    var marks_gotten = document.querySelector("#marks_gotten").value;
    var gpa = document.querySelector("#marks");
    var grade = document.querySelector("#gra");
    var obtainedMarks = parseFloat(marks_gotten);
    marks.innerText = obtainedMarks;
    if (obtainedMarks < 40) {
        gpa.innerText="0"
        grade.innerText = "F";
    } else if (obtainedMarks >= 40 && obtainedMarks <= 45) {
        gpa.innerText="1"
        grade.innerText = "C";
    } else if (obtainedMarks >= 46 && obtainedMarks <= 49) {
        gpa.innerText="1"
        grade.innerText = "C";
    } else if (obtainedMarks >= 50 && obtainedMarks <= 55) {
        gpa.innerText="2"
        grade.innerText = "B";
    } else if (obtainedMarks >= 56 && obtainedMarks <= 59) {
        gpa.innerText="2.5"
        grade.innerText = "B";
    } else if (obtainedMarks >= 60 && obtainedMarks <= 65) {
        gpa.innerText="3"
        grade.innerText = "A-";
    } else if (obtainedMarks >= 66 && obtainedMarks <= 69) {
        gpa.innerText="3.5"
        grade.innerText = "A-";
    } else if (obtainedMarks >= 70 && obtainedMarks <= 75) {
        gpa.innerText="4"
        grade.innerText = "A";
    } else if (obtainedMarks >= 76 && obtainedMarks <= 79) {
        gpa.innerText="4.5"
        grade.innerText = "A";
    } else if (obtainedMarks >= 80 && obtainedMarks <= 89) {
        gpa.innerText="5"
        grade.innerText = "A+";
    } else if (obtainedMarks >= 90 && obtainedMarks <= 100) {
        gpa.innerText="5"
        grade.innerText = "A+";
    }

    return false;
}

document.querySelector("form").onsubmit = validate;
