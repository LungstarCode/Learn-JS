








// Question 
/* A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

Complete the getAverage function which takes in an array of test scores and returns the average score.

The average is calculated by adding up all the scores and dividing by the total number of scores.*/

function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    let avg = sum / scores.length;
    return avg;
  
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

/**
 Now the teacher needs your help converting the student score to a letter grade.

Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.

Here are the scores and their corresponding letter grades:

Score Range	Grade
100	"A++"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"

 */


function getGrade(score) {

    if (score == 100){
      return "A++"
    }else if (score >= 90 & score <=99 ){
      return "A"
    }else if (score >=80 & score <=89){
      return "B"
    }
    else if (score >=70 & score <=79){
      return "C"
    }
    else if (score >=60 & score <=69){
      return "D"
    }else {
      return "F"
    }
  
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));



/* The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".
The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".

Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true if the student has a passing grade and false if they do not.
Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true if the student has a passing grade and false if they do not.*/



  function hasPassingGrade(score) {
    if (score >=60){
      return true;
    }else {
      return false
    }
    
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));


  /* Now that the teacher has all of the information they need, they want to be able to message the student with the results.

Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student.*/

function studentMsg(totalScores, studentScore) {
    if (studentScore >= 60){
      return "Class average: "+ getAverage(totalScores) +". Your grade: "+ getGrade(studentScore) +". You passed the course."
    }
    else {
      return "Class average: "+ getAverage(totalScores) +". Your grade: "+ getGrade(studentScore) +". You failed the course."
    }
 }
 console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));