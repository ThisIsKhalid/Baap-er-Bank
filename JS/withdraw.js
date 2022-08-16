document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step 2: get the deposit from input field
    // for input field use .value to the value inside the input field
    const withdrawField = document.getElementById('withdraw-feild');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // step 7: clear the deposit field
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please Enter a valid value!')
        return;
    }
    
    // step 3: get the current withdraw total
    // for non input use  inertext to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    

    // step 5: get current balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Gorib tor oto tk nai');
        return;
    }

    // step 4: add numbers to the total deposit
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the total balance
    balanceTotalElement.innerText = currentBalanceTotal;

    

})