let mapDiv = document.getElementById("map")

let gMap = document.getElementById("g_map")

submit = document.getElementById('submit')

submit.addEventListener('click', (event) => {
    //I would've liked to make this adjust the embed but time is not my friend    
    let req = new XMLHttpRequest();
    let sender = {};

    sender.zip = document.getElementById('zip').value;
    sender.flavor = document.getElementById('flavor').value;
    sender.selector1 = document.getElementById('in_house').value;
    sender.selector2 = document.getElementById('in_store').value;

    req.open('POST', 'http://httpbin.org/post', true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.addEventListener('load', function() {
        let res = JSON.parse(req.responseText);
        document.getElementById('search_result').textContent = "* Sorry it looks like this product is unavailable in your area.";
        console.log(res.data) //Left in for ease of use rn.
    });

    req.send(JSON.stringify(sender))
    event.preventDefault()
});