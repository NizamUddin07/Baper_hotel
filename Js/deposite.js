document.getElementById('btn-deposite').addEventListener('click', function(){
  
    const depositeField = document.getElementById('deposite-field');
    const depositeAmount = depositeField.value;


    // deposite total 

    const depositeTotalElement = document.getElementById('deposite-total');
    const depositedTotal = depositeTotalElement.innerText;
    depositeTotalElement.innerText =   depositeAmount;

   
})