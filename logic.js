let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let total = '';
for(item of buttons)
{
  item.addEventListener('click', (e)=>
  {
    buttonText = e.target.innerText;
    console.log('Button text is ', buttonText);
    if (buttonText == '×') 
    {
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    }
    else if (buttonText == 'C') 
    {
      screenValue = '';
      screen.value = screenValue;
    }
    else if (buttonText == '=') 
    {
      screenValue = eval(screenValue);
      screen.value = screenValue;
    }
    else
    {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  })
}