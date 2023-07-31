function validateform(){
    var name=document.myform.name.value;
    var phnum=document.myform.phnum.value;
    var mail=document.myform.mail.value;
    var message=document.myform.message.value;
    if(name==null || name==""){
    alert("Name can't be blank!");
    return false;
    }else if(mail==null || mail==""){
    alert("Email can't be blank!");
    return false;
    }else if(phnum.length!=10){
    alert("Phone number should be 10 characters long!");
    return false;
    }
}