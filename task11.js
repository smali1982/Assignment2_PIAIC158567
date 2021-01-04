var tim = prompt ("Please enter time with 24-Hours format","");
tim=parseInt(tim)

if (tim == 0000 || tim <=1200)
{document.write("Good Morning");}

else if (tim>1200 || tim <=1700)
{document.write("Good Afternoon");}

else if (tim>1700 || tim <=2100)
{document.write("Good Evening");}

else if (tim>2100 || tim <=2359)
{document.write("Good Night");}
