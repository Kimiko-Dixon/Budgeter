const createBudget = async (event) => {
    event.preventDefault()
    const income = document.querySelector('#income').value.trim()
    if(income){
        const response = await fetch('/api/budget',{
           method:'POST',
           body:JSON.stringify({income}),
           headers:{'Content-Type':'application/json'} 
        })
        if(response.ok){
            document.location.replace('')
        }
    }
}
const addExpenses = async (event) => {
    event.preventDefault()
    const housing = document.querySelector('#housingCost').value
    const transport = document.querySelector('#transportCost').value
    const med = document.querySelector('#medCost').value
    const insurance = document.querySelector('#insuranceCost').value
    const fun = document.querySelector('#funCost').value
    const personal = document.querySelector('#personalCost').value
    const save = document.querySelector('#savingCost').value
    const food = document.querySelector('#foodCost').value
    const util = document.querySelector('#savingCost').value
    if(housing && transport && med && insurance && fun && personal && save && food && util){
        const response = await fetch('/api/budget/expenses',{
           method:'POST',
           body:JSON.stringify({housing,transport,med,insurance,fun,personal,save,food,util}),
           headers:{'Content-Type':'application/json'} 
        })
        if(response.ok){
            document.location.replace('')
        }
    }
}
const addExpense = async (event) => {
    event.preventDefault()
    const name = document.querySelector('#expenseName').value.trim()
    const cost = document.querySelector('#expenseCost').value
    if(name && cost){
        const response = await fetch('/api/budget/expense',{
           method:'POST',
           body:JSON.stringify({name,cost}),
           headers:{'Content-Type':'application/json'} 
        })
        if(response.ok){
            document.location.replace('')
        }
    }
}
const editExpense = async (event) => {
    event.preventDefault()
    const id = event.target.dataset.id
    //chaange id?
    const cost = document.querySelector('#expenseCost').value
    if(cost){
        const response = await fetch(`/api/budget/expense/${id}`,{
           method:'PUT',
           body:JSON.stringify({cost}),
           headers:{'Content-Type':'application/json'} 
        })
        if(response.ok){
            document.location.replace('')
        }
    }
}
const deleteExpense = async (event) => {
    event.preventDefault()
    const id = event.target.dataset.id
    const response = await fetch(`/api/budget/expense/${id}`,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'} 
    })
    if(response.ok){
        document.location.replace('')
    }
}
const editIncome = async (event) => {
    event.preventDefault()
    const id = event.target.dataset.id
    const income = document.querySelector('#newIncome').value
    if(cost){
        const response = await fetch(`/api/budget/income/${id}`,{
           method:'PUT',
           body:JSON.stringify({income}),
           headers:{'Content-Type':'application/json'} 
        })
        if(response.ok){
            document.location.replace('')
        }
    }
}
const addPayment = async (event) => {
    event.preventDefault()
    const id = event.target.dataset.id
    const payment = document.querySelector('#payment').value
    if(payment){
        const response = await fetch(`/api/budget/${id}/payment`,{
           method:'POST',
           body:JSON.stringify({payment}),
           headers:{'Content-Type':'application/json'} 
        })
        if(response.ok){
            document.location.replace('')
        }
    }
}


const logout = async (event) => {
    event.preventDefault()
    const response = await fetch(`/api/user/logout`,{
        method:'POST',
        headers:{'Content-Type':'application/json'} 
    })
    if(response.ok){
        document.location.replace('')
    }
}
