// ==>     USING ARRAY

const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password1=document.getElementById("password1");
const password2=document.getElementById("password2");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    check([username,email,password1,password2])
    
});
function check(inputs){
       for(let i=0;i<inputs.length;i++){
          const store=inputs[i];
       if(store.value===""){
        
           const message=store.id+' is mandatory';
           ErrorText(store,message);
       }
       else{
        SuccessText(store);
       }
}}

function ErrorText(store,message){
    const demo=store.parentElement;
    const small=demo.querySelector('small');

    small.innerText=message;
    demo.className="bad";
}
function SuccessText(store){
    const demo=store.parentElement;
    demo.className="good";
}