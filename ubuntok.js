// ==UserScript==
// @name         UnbunTok
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes TikTok less addicting by removing recommended videos and customizes the main pages!
// @author       Github.com/danielpiliu
// @match        https://www.tiktok.com/*
// @grant        none
// ==/UserScript==

(function() {
  // Set the background image and color of the top bar
  document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1055867133239754762/1055867173253423125/2587485.png')";
  let topBar = document.querySelector("div.tiktok-xk7ai4-DivHeaderContainer");
// ==UserScript==
// @name         Debtok
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes TikTok less addicting by removing recommended videos and customizes the main pages!
// @author       Github.com/danielpiliu
// @match        https://www.tiktok.com/*
// @grant        none
// ==/UserScript==

(function() {
  document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1055995168144236605/1071601580085891072/debiscoolpt2.webp')";
  let topBar = document.querySelector("div.tiktok-xk7ai4-DivHeaderContainer");
  topBar.style.backgroundColor = "#E95420";

  let targets = [
    "div.tiktok-1id9666-DivMainContainer.ec6jhlz0",
    "div.tiktok-1a4urrd-DivWrapper.e14l9ebt2",
    "div.e14l9ebt0.tiktok-1hi889j-DivScrollContainer-StyledScroll.e1b4u1n1",
    "div.e14l9ebt0.tiktok-176uj12-DivScrollContainer-StyledScroll.e1b4u1n1"
  ];

  let targetsColor = [
    "div.tiktok-irkf35-DivTabsContainer.ea3pfar1",
    "div.tiktok-3q30id-DivContentContainer.e1mecfx00",
    "div.tiktok-cy378a-DivCommentListContainer.ekjxngi0",
    "div.tiktok-19hqadz-DivBottomCommentContainer.e1mecfx04",
    "div.tiktok-1htic8b-DivCommentListContainer.ekjxngi0"
  ];

  function removeElements() {
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
