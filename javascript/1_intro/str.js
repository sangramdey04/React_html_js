function print(){
    var n=document.getElementById("txt").value;
    var p = '';
    for(var i=n.length-1;i>=0;i--)
    {
        p = p + n.charAt(i);
    }
    document.getElementById("result").innerHTML="The output is: " +p;
}