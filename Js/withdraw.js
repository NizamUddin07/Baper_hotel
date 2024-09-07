// 1. add even handaler
// 2. Get the withdraw amonut 
// Make sure that you converted input to a number if that is string 
//Get Previous withdraw amount

//4 total withdraw amounth
//5 set total withdraw amount
//6 Get previous balance total 
//Calculate new balance total 
//Set the new balance total


// #step-1

document.getElementById('btn-withdraw').addEventListener('click', function(){
// #Step-2
const withdrawField= document.getElementById('withdraw-field');
const neWithdrawAmountString = withdrawField.value;
const neWithdrawAmount = parseFloat(neWithdrawAmountString);

//Step-3
const withdrawalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

//step 4
const currentTotalWithdraw = previousWithdrawTotal + neWithdrawAmount;
withdrawalElement.innerText = currentTotalWithdraw;
//step 5

//Get Previous balance total
const balanceTotalElement = document.getElementById('total-balance');
const previousTotalBalanceString = balanceTotalElement.innerText;
const previousTotalBalance = parseFloat(previousTotalBalanceString);

// Set New balance for total balance 
const newBalanceTotal = previousTotalBalance - neWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;


//clear withdraw value 

withdrawField.value = '';

})