function getUrlRelativePath() {
    var url = document.location.toString();
    var arrUrl = url.split("//");
    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符
    if (relUrl.indexOf("?") != -1) {
        relUrl = relUrl.split("?")[0];
    }
    return relUrl;
}

function openSesame() {
    console.log("\"Open Sesame...\" Whisper you.");
    var location = getUrlRelativePath().toString().substring(0,7);
    if(location == "/about/"){
        console.log("The gate opens.");
        console.log("You find a scroll in the secret cave.");
        console.log("On which nothing but a letter is written: \"y\"!");
        return 0;
    }else{
        console.log("Nothing happened.");
        return 1;
    }
}