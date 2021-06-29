var num1, num2, res;
getvalue = function(){
    num1=Number(document.myform.txt1.value);
    num2=Number(document.myform.txt2.value);
    resultto={
        "Number1" :num1,
        "Number2" :num2,
    }
    return resultto;

}
function add(){
    numberofval=getvalue();
    res=num1+num2;
    document.myform.txt3.value=res;
}
function sub(){
    numberofval=getvalue();
    res=num1-num2;
    document.myform.txt3.value=res;
}
function mul(){
    numberofval=getvalue();
    res=num1*num2;
    document.myform.txt3.value=res;
}
function div(){
    numberofval=getvalue();
    res=num1/num2;
    document.myform.txt3.value=res;
}
function Mod(){ 
    numberofval=getvalue();
    res=num1 % num2;
    document.myform.txt3.value=res;
}

