const login=document.getElementById('login');
login.addEventListener('click',function(){
    document.querySelector('.login-area').style.display='none';
var transition=document.getElementById('transion-area');
transition.style.display='block'
});

var DepositBtn=document.getElementById('depositBtn');
DepositBtn.addEventListener('click',function(){
    var ammountInput=document.getElementById('depositAmmount');
const depositNumber=parseFloat(ammountInput.value);

updateSpanTag('depositCard',depositNumber);
updateSpanTag('currentBalance',depositNumber);
ammountInput.value='';

})
var withdrawBtn=document.getElementById('withdrawbtn');
withdrawBtn.addEventListener('click',function(){
  const widraw=getNumberInput('widrowAmmountInput')
  
updateSpanTag('windrawCard',widraw);
updateSpanTag('currentBalance',-1*widraw);
document.getElementById('widrowAmmountInput').value='';
})

function getNumberInput(id){
    var widrawAmmountInput=document.getElementById(id).value;
    var widraw=parseFloat(widrawAmmountInput);
    return widraw;
}

function updateSpanTag(id,depositNumber){
    const balanceCard=document.getElementById(id).innerText;
    const currentBalance=parseFloat(balanceCard);
    const totalBalance=currentBalance+depositNumber;
    document.getElementById(id).innerText=totalBalance;
    
}