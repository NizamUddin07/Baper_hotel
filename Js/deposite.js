document.getElementById('btn-deposite').addEventListener('click', function(){
  
    const depositeField = document.getElementById('deposite-field');
    const newdepositeAmountString = depositeField.value;
    const newdepositeAmount = parseFloat(newdepositeAmountString);
    


    // deposite total 

    const depositeTotalElement = document.getElementById('deposite-total');
    const previousdepositedTotalString = depositeTotalElement.innerText;
    const previousdepositedTotal = parseFloat(previousdepositedTotalString);

    
    const currentDepositetotal = previousdepositedTotal + newdepositeAmount;

    depositeTotalElement.innerText= currentDepositetotal;

    












    // balance total 

    const balancetoalElement= document.getElementById('total-balance');
    const previousBalanceTotalString = balancetoalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    // calculate current total
    const currentTotalBalance = previousBalanceTotal + newdepositeAmount;
    

    // set the value to show on website 
    balancetoalElement.innerText = currentTotalBalance;

    // delete value 
    depositeField.value = '';

   
})