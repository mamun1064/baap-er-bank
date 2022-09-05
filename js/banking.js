document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const depositTotal = document.getElementById('add-deposit');
    depositTotal.innerText=depositAmount;
    // const depositTotalAmount = perseFloat(depositTotal.innerText)+perseFloat(depositAmount);
    // const newDepositTotal = depositTotalAmount;
    
    depositInput.value='';
});