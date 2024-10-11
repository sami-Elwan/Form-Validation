
// ==>  USING IF & ELSE STATEMENT.

const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password1=document.getElementById("password1");
const password2=document.getElementById("password2");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    find();
});

function find(){
//user name 
    if(username.value ===""){
       
        ErrorText(username, 'please enter user name');
    }
    else{
         SuccessText(username);
    }

// email
    if(email.value ===""){
       
        ErrorText(email, 'please enter email');
    }
    else{
         SuccessText(email);
    }

    //pass1
     if(password1.value ===""){
       
          ErrorText(password1, 'please enter password1');
} 
    else{
          SuccessText(password1);
}

  //pass2
      if(password2.value ===""){
       
    ErrorText(password2, 'please enter password2');
      }
     else{
     SuccessText(password2);
     }}

function ErrorText(input,message){
    const demo=input.parentElement;
    const small=demo.querySelector('small');

    small.innerText=message;
    demo.className="bad";
}
function SuccessText(input){
    const demo=input.parentElement;
    demo.className="good";
}