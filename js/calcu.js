function getInputValue(inputId) {
    const incomeInput = document.getElementById(inputId);
    const incomeAmmountText = incomeInput.value;
    const incomeAmmount = parseFloat(incomeAmmountText); 
    // incomeInput.value = '';
    return incomeAmmount;
    
}

document.getElementById('total-calc').addEventListener('click',function(){
    const incomeAmmount = getInputValue('income-input');
    const foodAmmount = getInputValue('food-cost');
    const rentAmmount = getInputValue('rent-cost');
    const clothAmmount = getInputValue('cloth-cost');
    
    
    console.log(incomeAmmount)
    console.log(foodAmmount)
    console.log(rentAmmount)
    console.log(clothAmmount)
    
    const balanceTotal = document.getElementById('total-balance');
         balanceTotalTk= incomeAmmount-(foodAmmount+rentAmmount+clothAmmount);
        balanceTotal.innerText = 'Total Balance: '+balanceTotalTk;
        
    const expenceTotal = document.getElementById('total-expence');
        expenceTotalTk= foodAmmount+rentAmmount+clothAmmount;
           expenceTotal.innerText='Expence: '+expenceTotalTk;
        })
document.getElementById('save-button').addEventListener('click',function(){
    const saveAmmount = getInputValue('save-input');
    console.log(saveAmmount)
    const incomeAmmount = getInputValue('income-input');
     const savingsTotal = document.getElementById('saving-ammount');
           savingsTotalTk= (incomeAmmount * saveAmmount)/100;
           savingsTotal.innerText= 'Savings: '+ savingsTotalTk;
           
        const remainingBalanceTotalTk =document.getElementById('remaining-balance');
        remainingBalanceTotal= balanceTotalTk-savingsTotalTk;
        remainingBalanceTotalTk.innerText= 'Remaining Balance: '+ remainingBalanceTotal;
})


