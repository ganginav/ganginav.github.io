function calculateGPA() {
  var gradeContainer = document.getElementById("gradecontainer");
var grades = gradeContainer.querySelectorAll("[name=gradeType]");
var types = gradeContainer.querySelectorAll("[name=classType]");
  var emptyField = false;
  for (var i = 0; i < grades.length; i++) {
  if(grades[i].value === "" || types[i].value === "") {
      emptyField = true;
     var btn = document.querySelector(".calculate-gpa-btn");
    btn.classList.add("error");
    setTimeout(function() {
      btn.classList.remove("error");
    }, 2000);
      break;
    }
  }
  if(!emptyField) {
    var totalPoints = 0;
    var totalUnits = 0;
    for (var i = 0; i < grades.length; i++) {
      var grade = grades[i].value;
      var type = types[i].value;
      if(grade.toUpperCase() === "A+") {
        if(type === "AP") {
          totalPoints += 5.33;
          totalUnits += 1;
        } else if(type === "AP15") {
          totalPoints += 5.33*1.5;
          totalUnits += 1.5;
        } else if(type === "H") {
          totalPoints += 5.00;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 4.33;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "A"){
        if(type === "AP") {
          totalPoints += 5.00;
          totalUnits += 1;
        } else if(type === "AP15") {
          totalPoints += 5.00*1.5;
          totalUnits += 1.5;
        } else if(type === "H") {
          totalPoints += 4.67;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 4.00;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "A-"){
        if(type === "AP") {
          totalPoints += 4.67;
          totalUnits += 1;
        } else if(type === "AP15") {
          totalPoints += 4.67*1.5;
          totalUnits += 1.5;
        }else if(type === "H") {
          totalPoints += 4.34;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 3.67;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "B+"){
        if(type === "AP") {
          totalPoints += 4.33;
          totalUnits += 1;
        } else if(type === "AP15") {
          totalPoints += 4.33*1.5;
          totalUnits += 1.5;
        }else if(type === "H") {
          totalPoints += 4.00;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 3.33;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "B"){
        if(type === "AP") {
          totalPoints += 4.00;
          totalUnits += 1;
        }else if(type === "AP15") {
          totalPoints += 4.00*1.5;
          totalUnits += 1.5;
        } else if(type === "H") {
          totalPoints += 3.67;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 3.00;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "B-"){
        if(type === "AP") {
          totalPoints += 3.67;
          totalUnits += 1;
        }else if(type === "AP15") {
          totalPoints += 3.67*1.5;
          totalUnits += 1.5;
        } else if(type === "H") {
          totalPoints += 3.34;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 2.67;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "C+"){
        if(type === "AP") {
          totalPoints += 3.33;
          totalUnits += 1;
        }else if(type === "AP15") {
          totalPoints += 3.33*1.5;
          totalUnits += 1.5;
        } else if(type === "H") {
          totalPoints += 3.00;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 2.33;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "C"){
        if(type === "AP") {
          totalPoints += 3.00;
          totalUnits += 1;
        }else if(type === "AP15") {
          totalPoints += 3.00*1.5;
          totalUnits += 1.5;
        } else if(type === "H") {
          totalPoints += 2.67;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 2.00;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "C-"){
        if(type === "AP") {
          totalPoints += 2.67;
          totalUnits += 1;
        }else if(type === "AP15") {
          totalPoints += 2.67*1.5;
          totalUnits += 1.5;
        } else if(type === "H") {
          totalPoints += 2.00;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 1.67;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "D+"){
        if(type === "AP") {
          totalPoints += 2.34;
          totalUnits += 1;
        }else if(type === "AP15") {
          totalPoints += 2.34*1.5;
          totalUnits += 1.5;
        } else if(type === "H") {
          totalPoints += 2.00;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 1.34;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "D"){
        if(type === "AP") {
          totalPoints += 2.00;
          totalUnits += 1;
        } else if(type === "AP15") {
          totalPoints += 2.00*1.5;
          totalUnits += 1.5;
        }else if(type === "H") {
          totalPoints += 1.67;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 1.00;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "D-"){
        if(type === "AP") {
          totalPoints += 1.67;
          totalUnits += 1;
        }else if(type === "AP15") {
          totalPoints += 1.67*1.5;
          totalUnits += 1.5;
        } else if(type === "H") {
          totalPoints += 1.34;
          totalUnits += 1;
        } else if(type === "CP") {
          totalPoints += 0.67;
          totalUnits += 1;
        }
      }
      else if(grade.toUpperCase() === "F"){
        totalPoints += 0;
        totalUnits += 1;
      }
    }
    var gpa = totalPoints / totalUnits;
    document.getElementById("gpa").innerHTML = "GPA: " + gpa.toFixed(4);
    document.getElementById("cum").innerHTML = "Total Points: " + totalPoints.toFixed(1);
    document.getElementById("credits").innerHTML = "Total Credits: " + totalUnits;
    
  }
}

