function connect(name) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.twitch.tv/kraken/streams/"+ name +"?client_id=n8d50u0n4ah3rop28l0mzdn61t373i", true);
    xhr.onreadystatechange = function (channel) {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);

            if (data["stream"] === null) {
                $("#info-text").prop('class', "red");
                $("#info-text").html(name + " n'est pas en live actuellement :(");
                $("#info-text").removeAttr("href");
            } else {
                $("#info-text").prop('class', "green");
                $("#info-text").prop('target', "_blank");
                $("#info-text").html("Viens voir " + name + " en live maintenant !");
                $("#info-text").prop('href', "https://www.twitch.tv/" + name);
            }
        }
    };
    xhr.send();
}

$(document).ready(function () {
   $("#search-btn").click(function () {
       var name = $("#stream").val();
        connect(name);
   });
});