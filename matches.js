const Button = document.getElementsByClassName('toggle')[0];
const optionForm = document.getElementsByClassName('option-matches');
const options = document.getElementsByClassName('options');

Button.addEventListener('click', function()
{

    optionForm[0].classList.toggle('active');
    for(var i=0;i<options.length;i++)
    {
        
        options[i].classList.toggle('active');
    
    }
});