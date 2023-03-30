// Add your code here
function submitData(name,email){
    return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name,
        email
    })
    })
    .then (response => response.json())
    .then (user => {
        let newID = user.id;
        let p = document.createElement('p');
        p.textContent = newID;
        document.body.appendChild(p);
    })
    .catch(error => {
        let message = document.createElement('p')
        message.textContent = error.message
        document.body.appendChild(message)
    })
};