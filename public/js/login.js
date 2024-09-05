const login = async (event) => {
    event.preventDefault()
    const username = document.querySelector('#loginUsername').value.trim()
    const password = document.querySelector('#loginPassword').value.trim()
    if(username && password){
        const response = await fetch(`/api/user/login`,{
           method:'POST',
           body:JSON.stringify({username,password}),
           headers:{'Content-Type':'application/json'} 
        })
        if(response.ok){
            document.location.replace('/')
        }
    }
}

document.querySelector('#login').addEventListener('click',login)