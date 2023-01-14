function calculateFinalGrade() {
  var currentGrade = document.getElementById("currentGrade").value;
  var desiredGrade = document.getElementById("desiredGrade").value;
  var finalWorthPercentage = document.getElementById("finalWorthPercentage").value;

  var finalGradeNeeded = ((desiredGrade/100) - (1 - finalWorthPercentage/100)*(currentGrade/100))/(finalWorthPercentage/100)*100;

  document.getElementById("finalGrade").innerHTML = "Final grade needed: " + Math.round(finalGradeNeeded) + "%";
}