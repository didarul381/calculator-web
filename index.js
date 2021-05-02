function insertnum(n){
    var existingnum = $("#result").val();
    $("#result").val(existingnum + n)
}
function c(){
    $("#result").val('')
    
}
function cal(){
    $("#result").val('')
    
}
function cal(){
    var res= eval($("#result").val())
    $("#result").val(res)
}
function dnum(){
    var pnum=$("#result").val()
    if(pnum!= ''){
        $("#result").val(pnum.slice(0,-1));
        
    }
    
}