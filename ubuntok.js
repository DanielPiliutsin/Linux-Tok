// ==UserScript==
// @name         UbunTok
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Makes TikTok less addicting by removing recommended videos and customizes the main pages!
// @author       Github.com/danielpiliu
// @match        https://www.tiktok.com/*
// @grant        none
// ==/UserScript==

(function() {
   document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1055867133239754762/1055867173253423125/2587485.png')";
   document.body.style.backgroundRepeat = "no-repeat";
   document.body.style.backgroundSize = "100% 100%";
   document.body.style.backgroundAttachment = "fixed";

  let topBar = document.querySelector("div.tiktok-xk7ai4-DivHeaderContainer");
  topBar.style.backgroundColor = "#E95420";

  let targets = [
    "div.tiktok-1a4urrd-DivWrapper.e14l9ebt2",
    "div.e14l9ebt0.tiktok-1hi889j-DivScrollContainer-StyledScroll.e1b4u1n1",
    "div.e14l9ebt0.tiktok-176uj12-DivScrollContainer-StyledScroll.e1b4u1n1",
    "div.tiktok-1qpva5c-DivListContainer.e1ymawm00",
    "div.tiktok-1vrbodl-DivPromotionContainer.ejkrawn0",
    "div.tiktok-1ps1qld-ButtonBasicButtonContainer-StyledVideoSwitch.e11s2kul14",
    "div.tiktok-3qrapw-DivMainContainer.ec6jhlz0"
  ];

  let targetsColor = [
    "div.tiktok-irkf35-DivTabsContainer.ea3pfar1",
    "div.tiktok-3q30id-DivContentContainer.e1mecfx00",
    "div.tiktok-cy378a-DivCommentListContainer.ekjxngi0",
    "div.tiktok-19hqadz-DivBottomCommentContainer.e1mecfx04",
    "div.tiktok-1htic8b-DivCommentListContainer.ekjxngi0",
    "div.tiktok-xlp5i2-PVideoListTitle.ege8lhx6"
  ];

function removeElements() {
  let errorMessage = document.querySelector("div.tiktok-1tttox1-DivErrorContainer.emuynwa0");
  if (errorMessage) {
    errorMessage.parentNode.removeChild(errorMessage);
    location.reload();
    return;
  }

  targets.forEach(target => {
    let element = document.querySelector(target);
    if (element) {
      element.parentNode.removeChild(element);
    }
  });

  targetsColor.forEach(targetColor => {
    let element = document.querySelector(targetColor);
    if (element) {
      element.style.backgroundColor = "#E95420";
    }
  });

  setTimeout(removeElements, 1000);
}


removeElements();
})();
