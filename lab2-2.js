const isIPAddress = function(ip){
    const ipPattern = /([0-9]{1,3}[\.]){3}[0-9]{1,3}/;
    return ipPattern.test(ip);
}
const findRGBA = function(text){
    const rgbaPattern = /rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)/gi;
    return text.match(rgbaPattern);
}
const findHexColor = function(text){
    const hexPattern = /#((0x){0,1}|#{0,1})([0-9A-F]{8}|[0-9A-F]{6})/gi;
    return text.match(hexPattern);
}
const findTags = function(tag, text){
    const regex = new RegExp(tag);
    return regex.exec(text);
}
const findPosNum = function(text){
    const regex = /\d+\.?\d*/g;
    var arr = text.match(regex);
    return arr;
}
const findDates = function(text){
    const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g;
    return text.match(regex);
}
const findEmail = function(text){
    const regex = /\S+@\S+\.\S+/g;
    var arr = text.match(regex);
    return arr;
}
alert("IsIpAddress - 192.333.222.22:\n  " + isIPAddress("192.333.222.22"));
alert("FindRGBA - smth1 rgba(12,13,1,2) anythng2):\n  " + findRGBA("smth1 rgba(12,13,1,2) anythng2)"));
alert("findHexColor - #FFCCED smth12#e:\n  " + findHexColor("#FFCCED smth12#e"));
alert("findTags - \"img\" in \"text img ids mgi\":\n  " + findTags("img", "iiii img idsgf gmi mg"));
alert("findPosNum - 1, 21, 18 text:\n  " + findPosNum("1, 21, 18 text"));
alert("findDates - 10 23 23 4 ty yt 1 1980-10-10 1920-12-02:\n  " + findDates("10 23 23 4 ty yt 1 1980-10-10 1920-12-02"));
alert("findEmail - sdf 1 any@gmail.com another@mail.ua:\n  " + findEmail("sdf 1 any@gmail.com another@mail.ua"));
