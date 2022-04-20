var tipAmount = document.querySelector('#resultTip');
var total = document.querySelector('#resultTotal')
var bill = document.querySelector('#bill')
var people = document.querySelector('#people')
var tip = document.querySelector('input[name="tip"]:checked');
let tipDefault = document.querySelector('#tip15');
var tipCustom = document.querySelector('input[type="text"][name="custom"]');
var tipCustomLabel = document.querySelector('.tip.custom input[type=radio]')
var buttonReset = document.querySelector('#reset');


function getTip(){
  if(tip.id != 'tipCustom'){
    return tip.value;
  }
  if(tipCustom.value == "")
    return 0;

  return tipCustom.value;

}

function updateTip(){
  tip = document.querySelector('input[name="tip"]:checked');
}

function getTipAmount(){
  let tip = getTip();
  return (bill.value * (tip/100)) / Number(people.value);
}

function calcTotal(){
  return (Number(bill.value) / Number(people.value)) + getTipAmount();
}

function updateTotal(){
  tipAmount.innerText = `$${getTipAmount().toFixed(2)}`
  total.innerText = `$${calcTotal().toFixed(2)}`;
}

var inputBoxes = document.querySelectorAll('.input-text input[type=text]');
var radioButtons = document.querySelectorAll('input[name=tip][type=radio]')

tipCustom.addEventListener('click', () => {
  tipCustomLabel.click()
});

tipCustom.addEventListener('change', () => {
  tipCustomLabel.click()
});

inputBoxes.forEach( (x) => {
  x.addEventListener('change',updateTotal);
} )

radioButtons.forEach( (x) => {
  x.addEventListener('click', () => {
    updateTip();
    updateTotal();
  });
})

buttonReset.addEventListener('click', () => {
  bill.value = 10;
  people.value = 1;
  tipDefault.click();
})