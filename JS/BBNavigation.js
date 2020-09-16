let activeLink = document.getElementsByTagName("main")[0].getAttribute("id")

function addUnderLine (link) {
    /*Adds the undline to the active link. Completely unnecessary 
    and a total rabbit trail but I wanted to see if i could do it.*/
    if (link == 'home') {
        return
    }
    let myLink = document.getElementById(link)
    myLink.style.textDecoration = 'underline';
};

addUnderLine(activeLink)