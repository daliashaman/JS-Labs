/////////////////// NUMBER 1 ////////////////////

let submissions = [  
{name: "Jane", score: 95, date: "2020-01-24", passed: true},
{name:"Joe", score: 77, date: "2018-05-14", passed: true},
{name:"Jack", score: 59, date:"2019-07-05", passed: false},
{name: "Jill", score: 88, date: "2020-04-22", passed:true}

];


/////////////////// NUMBER 2 ////////////////////

function addSubmission(array, newName, newScore, newDate){
    let newObject = {name: newName, score: newScore, date: newDate};

    newObject.score >= 60 ? newObject.passed = true : newObject.passed = false;

    array.push(newObject);
    console.log(array);
}
addSubmission(submissions,"Bob", 80, "2020-04-11");
addSubmission(submissions, "Julie", 57, "2021-03-20");


// /////////////////// NUMBER 3 ////////////////////

function deleteSubmissionByIndex(array,index){
     array.splice(index, 2);
}

(deleteSubmissionByIndex(submissions, 2));
console.log(submissions);


// /////////////////// NUMBER 4 ////////////////////

function deleteSubmissionByName(array, name){
    let indexPosition = array.findIndex(submission => submission.name === name);
   array.splice([indexPosition], 1);
   console.log(submissions);
    
}
(deleteSubmissionByName(submissions, "Jack"));



// /////////////////// NUMBER 5 ////////////////////

function editSubmission(array,index,score){
    array[index].score = score;
    if(score < 60){
        array[index].passed = false;
    }
    else {
        array[index].passed = true;
    }

}
editSubmission(submissions, 3, 72);
editSubmission(submissions, 1, 57);
console.log(submissions);


// /////////////////// NUMBER 6 ////////////////////

function findSubmissionByName(array, name){
    let findName = array.find(sub => sub.name === name);
    console.log(findName);
   
}
findSubmissionByName(submissions, "Jane");


// /////////////////// NUMBER 7 ////////////////////

function findLowestScore(array){
    array.forEach(sub => sub.score);{
        let lowestScore = 60;
        for(sub of array)
            if(sub.score < lowestScore){
                lowestScore = sub.score;
                console.log(sub);
            }
    }
} 

findLowestScore(submissions);


// /////////////////// NUMBER 8 ////////////////////

function findAverageScore(array){
    let sum = 0;
    for(let submission of array){
        sum += submission.score 
    }
    let averageScore = sum / array.length;
    return averageScore;
}
console.log(findAverageScore(submissions));
findAverageScore(submissions);


// /////////////////// NUMBER 9 ////////////////////

function filterPassing(array){
    let passingStudents = array.filter(submission => submission.passed === true);
    console.log(passingStudents);
    
}
filterPassing(submissions);


// /////////////////// NUMBER 10 ////////////////////

function filter90AndAbove(array){
    let above90 = array.filter(submission => submission.score >= 90);
    console.log(above90);
}
filter90AndAbove(submissions);


//Extended Challenges 

 // 1. log range between 2 #s from start to end of parameter.

function createRange(start, end){
    newArray = [ ];
    for(let i = start; i <= end; i++){
        newArray.push(i);
    }
    return newArray;
}
console.log(createRange(2, 22));
createRange(2, 22);

// 2. Return an object with array values as keys and the number of times that key appears in array as values.
