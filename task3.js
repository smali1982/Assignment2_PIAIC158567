var a = 4;
if (++a === 5) { alert("given condition for variable a is true"); }
// Since Pre-Increment Operator condition is True, a=5 //

var b = 82;
if (b++ === 83) { alert("given condition for variable b is true"); }
// Since Post-Increment Operator condition is False, b=82 //

var c = 12;
if (c++ === 13) { alert("condition 1 is true"); }
// Since Post-Increment Operator condition is False, c=13 //

if (c === 13) { alert("condition 2 is true"); }
// This Conditional Operator condition is True, c=13 //

if (++c < 14) { alert("condition 3 is true"); }
// Since Pre-Increment Operator condition is False, c=14 //

if(c === 14) { alert("condition 4 is true"); }
// This Conditional Operator condition is True, c=14 //

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
// This Conditional Operator condition is True, totalCost=22000 //

if (true) { alert("True"); }
// Since totalCost=22000, This Condition is True //

if (false) { alert("False"); }
// Since totalCost=22000, This Condition is False //

if("car" < "cat") { alert("car is smaller than cat"); }
//  This condition is not correct therefore only alert will be displayed //