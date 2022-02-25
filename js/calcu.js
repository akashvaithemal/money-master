// creating function for inputs 
function getInputValue(inputId) {
    const incomeInput = document.getElementById(inputId);
    const incomeAmmountText = incomeInput.value;
    const incomeAmmount = parseFloat(incomeAmmountText); 
// input validation 
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
    // getting input values using function 
    const incomeAmmount = getInputValue('income-input');   
    const foodAmmount = getInputValue('food-cost');
    const rentAmmount = getInputValue('rent-cost');
    const clothAmmount = getInputValue('cloth-cost');
//   console.log(incomeAmmount)
//     console.log(foodAmmount)
//     console.log(rentAmmount)
//     console.log(clothAmmount)  
    // balance total 
    const balanceTotal = document.getElementById('total-balance');
         balanceTotalTk= incomeAmmount-(foodAmmount+rentAmmount+clothAmmount);
         balanceTotal.innerText = 'Total Balance: '+balanceTotalTk; 
        //  input validtion 
        if (incomeAmmount <=0)
        {
            balanceTotal.innerText = "Enter Positive Value";
            
            
        }
        else if (balanceTotalTk<=0) {
            balanceTotal.innerText = 'Total Balance:Expence Is Too High We Cannot Afford Due'; 
         }
         else if (isNaN(incomeAmmount))
         {
            
            balanceTotal.innerText = "Enter Positive Value";
         } 
         
       
    //    expence total  
    const expenceTotal = document.getElementById('total-expence');
        expenceTotalTk= foodAmmount+rentAmmount+clothAmmount;
        expenceTotal.innerText='Expence: '+expenceTotalTk; 

        
           
        })
    //   save ammount and remaining balance   
document.getElementById('save-button').addEventListener('click',function(){
    const saveAmmount = getInputValue('save-input');
    // console.log(saveAmmount)
    
    const incomeAmmount = getInputValue('income-input');
    // save total 
     const savingsTotal = document.getElementById('saving-ammount');
           savingsTotalTk= incomeAmmount * saveAmmount/100;
           console.log(savingsTotalTk)
           savingsTotal.innerText= 'Savings: '+ savingsTotalTk;
           if (saveAmmount>100) {
            savingsTotal.innerText= 'Savings: Persentage is High'; 
        }
         else  if (isNaN(saveAmmount)) {
            savingsTotal.innerText= 'Savings: Persentage is High'; 
        }
        //   remaining balance total  
        const remainingBalanceTotalTk =document.getElementById('remaining-balance');
        remainingBalanceTotal= balanceTotalTk-savingsTotalTk;
        remainingBalanceTotalTk.innerText= 'Remaining Balance: '+ remainingBalanceTotal;
        // input validation 
        if (remainingBalanceTotal<0) {
            remainingBalanceTotalTk.innerText= 'Remaining Balance:Expence Is Too High We Cannot Afford Due ';
        }
        else  if (isNaN(remainingBalanceTotal)) {
            remainingBalanceTotalTk.innerText= 'Remaining Balance: Give Number Input'; 
        }
})



