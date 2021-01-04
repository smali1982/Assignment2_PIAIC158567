var secNum = "8";
var inpNum = prompt ("Guess the secret number","");

if ( inpNum === secNum )
{ document.write ("Bingo! Correct answer");} 

else if ( inpNum == (secNum-1) ) 
{ document.write ("Close enough to the corrct answer"); }

else if (secNum !== inpNum)
{ document.write ("Try Again"); }
