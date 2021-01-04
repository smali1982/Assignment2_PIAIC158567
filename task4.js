var marksOne = prompt ("Enter Marks obtained in Subject 1","");
var marksTwo = prompt ("Enter Marks obtained in Subject 2","");
var marksThree = prompt ("Enter Marks obtained in Subject 3","");

marksOne = Number (marksOne);
marksTwo = Number (marksTwo);
marksThree = Number (marksThree);

var totalMarks = "300";

document.write ("<h2>Marks Sheet</h2>");
document.write("<br>Total marks : "+totalMarks);

var marksObtain = (marksOne + marksTwo + marksThree); 
document.write("<br>Marks Obtained: "+ marksObtain);

var a = (marksObtain/totalMarks)*100;
document.write("<br>Percentage : "+ a+"%");

if (a>=80 || a==100) 
{ document.write("<br> Grade: A1"); document.write("<br> Remarks: Excellent"); }
    
else if (a>=70 || a==79) 
{ document.write("<br> Grade: A"); document.write("<br> Remarks: Good"); }

else if (a>=60 || a==69) 
{ document.write("<br> Grade: B"); document.write("<br> Remarks: You need to improve"); }

else if (a>=0 || a==59) 
{ document.write("<br> Grade: Fail"); document.write("<br> Remarks: Sorry"); }
