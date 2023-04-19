let namea = document.getElementById("namea");
let passworda = document.getElementById("passworda");
flag=1;

const validation = () => {
    if (namea.value == "") {
        document.getElementById("NameError").innerHTML = "user name is empty";
flag=0;
    }
    else if (namea.value.length < 3) {
        document.getElementById("NameError").innerHTML = "user name required maximus3 character";
        flag=0;
    }
 
    else {
        document.getElementById("NameError").innerHTML = "";
flag=1;
 
    }
if(passworda.value == ""){
    document.getElementById("PassError").innerHTML="password is empty";
    flag=0; 
}
else{
    document.getElementById("PassError").innerHTML="";
flag=1;
}
if(flag){

    return true;
}
else{
return false;
}

}
