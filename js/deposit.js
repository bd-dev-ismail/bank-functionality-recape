/*
Step-1: Add event listener to the deposit button!
Step-2: Get deposit from the deposit input filed!
2.5: Convert deposit amount to number type!
Step-3.Clear the deposit filed after the getting the value!
Step-4: Get the deposit previous Total!
Step-5: Calculate new deposit total & set the value to the deposit total!
Step-6: Get the current balance
Step-6.5: Calculate new Balance & set it to the balance element!
*/
//Step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    //Step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //Step-3Clear deposit field
    depositField.value = '';//pass a empty string to clear input filed
    //Step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //Step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    //Step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //Step-6.5
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
});