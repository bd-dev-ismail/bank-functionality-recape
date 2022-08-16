/*
Step-1: Add event listener to the withdraw button
Step-2: GEt the withdraw amount form withdraw field
Step-2.5: Convert withdraw amount to number
Step-3: Clear withdraw field after getting the value
Step-4: Get the previous Withdraw amount!
Step-5: Calculate the new withdraw total & set the value to the withdraw total!
Step-6: Get the current balance!
Step-7: Calculate new balance & set the value to the total balance
*/
//Step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //Step-2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldAmountString = withdrawField.value;
    //Step-2.5
    const withdrawFieldAmount = parseFloat(withdrawFieldAmountString);
    //Step-3
    withdrawField.value = '';
    //Step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //Step-5
    const newWithdrawTotal = previousWithdrawTotal + withdrawFieldAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    //Step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //Step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotalElement.innerText = newBalanceTotal;
});