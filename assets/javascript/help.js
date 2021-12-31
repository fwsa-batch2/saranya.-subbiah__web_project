
   handleSubmit(event) 
    fetch('url', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    name: this.state.name,
    description: this.state.description
    })
    }).then(res => {
    return res.json()
    })
    .then(data => console.log(data))
    .then(() => {
    window.location.reload(false)
    })
    
    
    .catch(error => console.log('ERROR from create component'))
     