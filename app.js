document.getElementById("calculate").addEventListener("click",function(){

    var currentGpa = document.getElementById("gpa").value;
    var currentGpaNumber = parseFloat(currentGpa);
    document.getElementById("gpa-display").innerText = currentGpaNumber;

    var currentCredit = document.getElementById("credit").value;
    var currentCreditNumber = parseFloat(currentCredit); 
    document.getElementById("credit-display").innerText = currentCreditNumber;

    var cgpa = currentGpaNumber * currentCreditNumber;
    document.getElementById("gpaxcredit-display").innerText = cgpa.toFixed(2);

    const avgCreditDisplay = document.getElementById("current-average-Credit").innerText;
    const avgCredit = parseFloat(avgCreditDisplay);
    const currentAvgCreditNum = avgCredit + currentCreditNumber;
    document.getElementById("current-average-Credit").innerText = currentAvgCreditNum;

    const averageGpa = document.getElementById("average-gpa-display").innerText;
    const averageGpaNum = parseFloat(averageGpa);
    const totalGpa = cgpa + averageGpaNum;
    document.getElementById("average-gpa-display").innerText = totalGpa.toFixed(2);

    const myGpa = totalGpa / currentAvgCreditNum;
    document.getElementById("my-cgpa-display").innerText = myGpa.toFixed(2);
 })

 document.getElementById("convert").addEventListener("click",function(){
     var currentMarks = document.getElementById("marks").value;
    var currentMarksNumber = parseFloat(currentMarks);

    if(currentMarksNumber < 60){
        document.getElementById("convert-display").innerText = "Fail. Grade: 0";
    }
    if(currentMarksNumber == 60){
        document.getElementById("convert-display").innerText = 1;
                }
    if(currentMarksNumber >= 61 && currentMarksNumber <= 62){
                    document.getElementById("convert-display").innerText = 1.3;
            }
    if(currentMarksNumber >= 63 && currentMarksNumber <= 65){
                    document.getElementById("convert-display").innerText = 1.7;
            }
    if(currentMarksNumber >= 66 && currentMarksNumber <= 69){
                    document.getElementById("convert-display").innerText = 2;
            }
    if(currentMarksNumber >= 70 && currentMarksNumber <= 72){
                    document.getElementById("convert-display").innerText = 2.3;
            }
    if(currentMarksNumber >= 73 && currentMarksNumber <= 75){
                    document.getElementById("convert-display").innerText = 2.7;
            }
    if(currentMarksNumber >= 76 && currentMarksNumber <= 79){
                    document.getElementById("convert-display").innerText = 3;
            }
    if(currentMarksNumber >= 80 && currentMarksNumber <= 84){
                    document.getElementById("convert-display").innerText = 3.3;
            }
    if(currentMarksNumber >= 85 && currentMarksNumber <= 89){
                    document.getElementById("convert-display").innerText = 3.7;
            }
    if(currentMarksNumber >= 90 && currentMarksNumber <= 100){
                    document.getElementById("convert-display").innerText = 4;
            }
  })