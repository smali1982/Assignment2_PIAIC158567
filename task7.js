numOne = Number (prompt ("Enter First Number",""));
numTwo = Number (prompt ("Enter Second Number",""));
operator = prompt ("Enter Operator to perform calculation (+, -, *, /, %)","");
resulta = numOne + numTwo;
resultb = numOne - numTwo;
resultc = numOne * numTwo;
resultd = numOne / numTwo;
resulte = numOne % numTwo;


if (operator === "+")
{document.write (resulta);}

else if(operator ==="-") 
{document.write (resultb);}

else if(operator ==="*") 
{document.write (resultc);}

else if(operator ==="/") 
{document.write (resultd);}

else if(operator ==="%") 
{document.write (resulte);}
