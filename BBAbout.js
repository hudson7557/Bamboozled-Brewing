submit = document.getElementById('submit')

//Sends the form information to http://httpbin.org/post 
submit.addEventListener('click', (event) => {
    let req = new XMLHttpRequest();
    let sender = {};
    
    sender.name = document.getElementById('name').value;
    sender.age = document.getElementById('age').value;
    sender.email = document.getElementById('email').value;
    sender.zip = document.getElementById('zip').value;
    sender.topic = document.getElementById('topic-select').value;
    sender.content = document.getElementById('content').value;

    req.open('POST', 'http://httpbin.org/post', true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.addEventListener('load', function() {
        let res = JSON.parse(req.responseText)
        console.log(res.data)
    })

    req.send(JSON.stringify(sender))
    event.preventDefault()
});