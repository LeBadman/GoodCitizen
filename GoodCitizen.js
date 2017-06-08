// ==UserScript==
// @name         GoodCitizen
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Pour ne plus oublier son devoir de citoyen
// @author       LeBadman
// @updateURL   https://raw.githubusercontent.com/LeBadman/GoodCitizen/master/GoodCitizen.js
// @downloadURL https://raw.githubusercontent.com/LeBadman/GoodCitizen/master/GoodCitizen.js
// @match        https://www.youtube.com/watch*
// @connect     github.com
// @connect     raw.githubusercontent.com
// @icon         http://image.noelshack.com/fichiers/2017/23/1496790392-goodcitizen.png
// ==/UserScript==

var userInfo;
var sentiment;
var userHeader;
setInterval(actionCitoyenne, 100);

function actionCitoyenne() {
    if((userHeader=document.getElementById("watch7-user-header"))){
        userInfo = userHeader.firstElementChild.nextElementSibling;
        channelLink = userInfo.firstElementChild.getAttribute("href");
        if(channelLink == "/channel/UCvmbmTfDzHmC6T6H-5evP1g" || channelLink == "/channel/UCB8il9i9Bl9mxEaCaClFEXQ"){
            sentiment = document.getElementById("watch8-sentiment-actions");
            span = sentiment.firstElementChild;
            span = span.nextElementSibling;
            span = span.lastElementChild;
            span = span.previousElementSibling;
            button = span.firstElementChild;
            if(button.className.search("hid")==-1)
                button.click();
        }
    }
}
