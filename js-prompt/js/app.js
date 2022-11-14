1

function Confirm(){
    var user='Gamida';
    var text=`Hello ${user}`;
    var body=document.body
    if(confirm(text)==true){
        body.style.backgroundColor='orange'
    }else{
        body.style.backgroundColor='purple'
    }
}
Confirm();

//2

function inputUser() {
    let age = prompt("Please enter your age");
    if (age<18) {
      alert('Too little for this page...Go back!')
    }else{
        alert('Welcome Beauty<3!')
    }
}

inputUser();

//3

function Group(){
    var input=document.getElementById('int');
    var value=input.value 
    document.getElementById('group').innerHTML=value;
    var new_value=value.slice(-3);
    if(new_value[0]=='1'){
        document.getElementById('group').style.color='yellow'
        document.getElementById('name').style.color='black'
        document.body.style.backgroundColor='white'
    }else if(new_value[0]=='2'){
        document.getElementById('group').style.color='red'
        document.getElementById('name').style.color='black'
        document.body.style.backgroundColor='white'
    }else if(new_value[0]=='3'){
        document.getElementById('group').style.color='white'
        document.getElementById('name').style.color='white'
        document.body.style.backgroundColor='black'
    }
}
Group();

