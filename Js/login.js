
// Step Number One
document.getElementById('btn-submit').addEventListener('click', function(){
    
    // Step 2, Get the Email id 
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    
    // Step 3, Get password 
    const passwordField=document.getElementById('user-password');
    const password = passwordField.value;
   
    // validation of email and password


    if(email=='baperhotel@gmail.com' && password =='password'){
        // console.log('valid user')
        window.location.href='bank.html';
    }
    else{
        // 
        alert('Latti khabi')


    }

})

