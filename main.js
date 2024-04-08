let errorMessage = document.querySelectorAll('.form__input-error-message');
let emailMessage = errorMessage[0];
let passwordMessage = errorMessage[1];



document.querySelector('.form__button').addEventListener('click', (e)=>{
    e.preventDefault();
    let input = document.querySelectorAll('.form__input');

    if(input[0].value === ''){
        setInputError(emailMessage, 'Please enter your Username or email')
    }
    else if((input[0].value !== '') && !(validateEmail(input[0].value))){
        
        setInputError(emailMessage, 'Please enter a valid email')
    }else{
        emailMessage.textContent = ''
    }

    if(input[1].value===''){
        setInputError(passwordMessage, 'Please enter your Password')
    }
    else if((input[1].value !== '') && (input[1].value.length <8)){
        
        setInputError(passwordMessage, 'Password is less than 8 characters')
    }else{
        passwordMessage.textContent = ''
    }
    
    

    
})

function setInputError(inputElement, message){
    inputElement.textContent = message;
}

function validateEmail(email){
    const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email)
}