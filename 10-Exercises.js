
function pressButton(selector){
  const button = document.querySelector(selector);
  turnOffPrevButton();

  if (!button.classList.contains('isToggled')){
    button.classList.add('isToggled');
  } else{
    button.classList.remove('isToggled');
    }
  }


function turnOffPrevButton(){
  const prevButton = document.querySelector('.isToggled');
  
  if(prevButton){
    prevButton.classList.remove('isToggled');
  }
}