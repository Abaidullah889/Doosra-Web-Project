const Button = document.getElementsByClassName('toggle')[0];
const optionHome = document.getElementsByClassName('option-home');
const options = document.getElementsByClassName('options');

Button.addEventListener('click', function()
{

    optionHome[0].classList.toggle('active');
    for(var i=0;i<options.length;i++)
    {
        
        options[i].classList.toggle('active');
    
    }
});