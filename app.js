document.getElementById('webhookForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var data = {
        name: name,
        message: message
    };

  
    fetch('https://hooks.zapier.com/hooks/catch/18907417/24xgokx/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Webhook sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error sending webhook.');
    });
});
