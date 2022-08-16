//steo 1: add event listener to the deposit 
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step 2: get the deposit from input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-feild');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 7: clear the deposit field
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please Enter a valid value!');
        return;
    }

    // step 3: get the current deposit total
    // for non input use  inertext to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4: add numbers to the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString); 

    // step 6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the total balance
    balanceTotalElement.innerText = currentBalanceTotal;

    
})