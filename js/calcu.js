function getInputValue(inputId) {
    const incomeInput = document.getElementById(inputId);
    const incomeAmmountText = incomeInput.value;
    const incomeAmmount = parseFloat(incomeAmmountText); 

    if (incomeAmmount <=0)
    {
        document.getElementById(inputId).value = "Enter Positive Value";
        alert("Enter Positive Value");
    }
    // incomeInput.value = '';
    else if (isNaN(incomeAmmount))
    {
       
        document.getElementById(inputId).value = "Enter Numbers";
        alert("Enter Number Value");
    } 
    else {
        
    }
    
    return incomeAmmount; 
    
}


document.getElementById('total-calc').addEventListener('click',function(){
    const incomeAmmount = getInputValue('income-input');   
    const foodAmmount = getInputValue('food-cost');
    const rentAmmount = getInputValue('rent-cost');
    const clothAmmount = getInputValue('cloth-cost');
//   console.log(incomeAmmount)
//     console.log(foodAmmount)
//     console.log(rentAmmount)
//     console.log(clothAmmount)  
    
    const balanceTotal = document.getElementById('total-balance');
         balanceTotalTk= incomeAmmount-(foodAmmount+rentAmmount+clothAmmount);
         balanceTotal.innerText = 'Total Balance: '+balanceTotalTk; 
         if (balanceTotalTk<=0) {
            balanceTotal.innerText = 'Total Balance:We Cannot Afford Due'; 
         }
         
       
        
    const expenceTotal = document.getElementById('total-expence');
        expenceTotalTk= foodAmmount+rentAmmount+clothAmmount;
        expenceTotal.innerText='Expence: '+expenceTotalTk;
        if (expenceTotalTk<= balanceTotalTk) {
            expenceTotal.innerText='Expence:Too much ';
        }
        
           
        })
        
document.getElementById('save-button').addEventListener('click',function(){
    const saveAmmount = getInputValue('save-input');
    console.log(saveAmmount)
    const incomeAmmount = getInputValue('income-input');
     const savingsTotal = document.getElementById('saving-ammount');
           savingsTotalTk= incomeAmmount * saveAmmount/100;
           console.log(savingsTotalTk)
           savingsTotal.innerText= 'Savings: '+ savingsTotalTk;
           
        const remainingBalanceTotalTk =document.getElementById('remaining-balance');
        remainingBalanceTotal= balanceTotalTk-savingsTotalTk;
        remainingBalanceTotalTk.innerText= 'Remaining Balance: '+ remainingBalanceTotal;
})



