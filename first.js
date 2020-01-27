function multiply()
{
    let number1=document.getElementById("num1").value;
    let number2=document.getElementById("num2").value;
    let result=number1*number2;
    document.getElementById("result").value=result;

}
function division()
{
    let number1=document.getElementById("num1").value;
    let number2=document.getElementById("num2").value;
    let result=number1/number2;
    document.getElementById("result").value=result;

}
function addition()
{
    let number1=parseInt(document.getElementById("num1").value);
    let number2=parseInt(document.getElementById("num2").value);
    let result=number1+number2;
    document.getElementById("result").value=result;

}
function substraction()
{
    let number1=parseInt(document.getElementById("num1").value);
    let number2=parseInt(document.getElementById("num2").value);
    let result=number1-number2;
    document.getElementById("result").value=result;

}