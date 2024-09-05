const signup = async (event) => {
    event.preventDefault()
    const username = document.querySelector('#signUsername').value.trim()
    const password = document.querySelector('#signPassword').value.trim()
    if(username && password){
        const response = await fetch(`/api/user/signup`,{
           method:'POST',
           body:JSON.stringify({username,password}),
           headers:{'Content-Type':'application/json'} 
        })
        if(response.ok){
            console.log(response)
            // document.location.replace('')
        }
    }
}

document.querySelector('#signup').addEventListener('click',signup)