//varibles
const sendBtn = document.getElementById('sendBtn'),
        email = document.getElementById('email'),
        subject = document.getElementById('subject'),
        message = document.getElementById('message'),
        reset = document.getElementById('resetBtn'),
        showForm = document.getElementById('email-form')

//event listeners
eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded', appInit);
    email.addEventListener('blur', validateForm)
    subject.addEventListener('blur', validateForm)
    message.addEventListener('blur', validateForm)

    showForm.addEventListener('submit', listenToChange)
    reset.addEventListener('click', resetBtn)

}

//functions
function appInit(){
    sendBtn.disabled = true;
}

function listenToChange(e){
    e.preventDefault();

    //show the spinner
    let spinner = document.querySelector('#spinner')
    spinner.style.display='block'

    //show the img
     let showImg = document.createElement('img')
            showImg.src='img/mail.gif';
            showImg.style.display='block';

    setTimeout(function(){
        spinner.style.display = 'none'
        //create the img for the form
        document.querySelector('#loaders').appendChild(showImg)
        setTimeout(function(){
            showImg.remove()
            showForm.reset()
            appInit()
        }, 3000)
    }, 3000)
}

function validateForm(){
    validateLength(this);
    if(this.type === 'email'){
        validateEmail(this)
    }

    let errors = document.querySelectorAll('.error')

    if(email.value !== '' && subject.value !== '' && message.value !== ''){
        if(errors.length === 0){
            sendBtn.disabled = false
        }
        
    }
    
}

function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor ='green'
        field.classList.remove('error')
    }else{
        field.style.borderBottomColor ='red'
        field.classList.add('error')
    }
}

function validateEmail(field){
    let textField = field.value
    if(textField.indexOf('@') !== -1){
        field.style.borderBottomColor ='green'
        field.classList.remove('error')
    }else{
        field.style.borderBottomColor ='red'
        field.classList.add('error')
    }
}

function resetBtn(e){
    e.preventDefault()
    showForm.reset();
    appInit()
}

