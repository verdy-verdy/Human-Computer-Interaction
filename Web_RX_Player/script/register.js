

function done() {

    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var sandi = document.getElementById("pass")
    var box = document.getElementById("box")
    
    var pay = document.form.method
    var valid = 0;
    var med = 0;

    if(name.value == ""){
        alert("Name Must Be Filled Out")
        valid++
    }

    if(email == ""){
        alert("Email Must Be Filled Out")
        valid++
    }else if(!email.value.endsWith(".com") ){
        alert("Email Must Be End with .com")
        valid++
    }else if(email.value.endsWith('@') || email.value.startsWith('@') || !email.value.includes('@') || email.value.includes("@.com")){
        alert("Please Input Valid Email")
        valid++
    }else{
        valid = 0;
    }

    if(sandi.value == "" ){
        alert("Password Must Be Filled Out")
        valid++
    }else if(sandi.value.length < 6 ){
        alert("Password at least 6 characters")
        valid++
    }

    if(document.form.myselect.selectedIndex==0){
        alert("Please Choose your Gender")
        valid++
    }

    for(var i = 0; i < pay.length ; i++){
        if(pay[i].checked){
            med = 1;
        }
    }

    if (med == 0){
        alert("Please Choose Payment Method")
        valid++
    }

    if(!box.checked){
        alert("You must agree to terms and conditions")
        valid++
    }

    if(valid == 0){
        alert("success")
    }
    
}