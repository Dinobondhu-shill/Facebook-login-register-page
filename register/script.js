let firstname = document.querySelector('.firstname')
let firstnameerr = document.querySelector('.firstnameerr')
let button = document.querySelector('.button')
let surname = document.querySelector('.surname')
let surnameerr = document.querySelector('.surnameerr')
let email =document.querySelector('.email')
let emailerr = document.querySelector('.emailerr')
let pass = document.querySelector('.pass')
let passerr = document.querySelector('.passerr')

button.addEventListener('click', function(e){
    e.preventDefault()

    if(firstname.value== ''){
        firstnameerr.innerHTML ='Name k dibe re?';
        firstnameerr.style= "visibility: visible;";
    }
    else if(surname.value ==''){
        surnameerr.innerHTML = 'Surname de 🥺' 
        surnameerr.style= 'visibility: visible'
    }
    else if(email.value ==''){
        emailerr.innerHTML = 'Email Dite hbe vai 😐' 
        emailerr.style= 'visibility: visible'
    }
    else if(pass.value ==''){
        passerr.innerHTML = 'Password ki tor nana dibe?😾' 
        passerr.style= 'visibility: visible'
    }
   
})


$('.slidimg').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });