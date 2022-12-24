// ==UserScript==
// @name         TikTok Addiction Prevention
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
  topBar.style.backgroundColor = "#E95420";

  // Create a function to continuously check for and remove the elements
  function removeElements() {
    // Select the elements to be removed
    let target1 = document.querySelector("div.tiktok-1id9666-DivMainContainer.ec6jhlz0");
    let target2 = document.querySelector("div.tiktok-1a4urrd-DivWrapper.e14l9ebt2");
    let target3 = document.querySelector("div.e14l9ebt0.tiktok-1hi889j-DivScrollContainer-StyledScroll.e1b4u1n1");
    let target4 = document.querySelector("div.e14l9ebt0.tiktok-176uj12-DivScrollContainer-StyledScroll.e1b4u1n1");

    // Select the elements to be colored
    let targetColor1 = document.querySelector("div.tiktok-irkf35-DivTabsContainer.ea3pfar1");
    let targetColor2 = document.querySelector("div.tiktok-3q30id-DivContentContainer.e1mecfx00");
    let targetColor3 = document.querySelector("div.tiktok-cy378a-DivCommentListContainer.ekjxngi0");
    let targetColor4 = document.querySelector("div.tiktok-19hqadz-DivBottomCommentContainer.e1mecfx04");

    // Check if the first element exists
    if (target1) {
      // If the first element exists, remove it from the page
      target1.parentNode.removeChild(target1);
    }

    // Check if the second element exists
    if (target2) {
      // If the second element exists, remove it from the page
      target2.parentNode.removeChild(target2);
    }

    // Check if the third element exists
    if (target3) {
      // If the third element exists, remove it from the page
      target3.parentNode.removeChild(target3);
    }

    // Check if the fourth element exists
    if (target4) {
      // If the fourth element exists, remove it from the page
      target4.parentNode.removeChild(target4);
    }

    // Check if the first element to be colored exists
    if (targetColor1) {
      // If the first element to be colored exists, change its color to Ubuntu orange
      targetColor1.style.backgroundColor = "#E95420";
    }

    // Check if the second element to be colored exists
    if (targetColor2) {
      // If the second element to be colored exists, change its color to Ubuntu orange
      targetColor2.style.backgroundColor = "#E95420";
    }

    // Check if the third element to be colored exists
    if (targetColor3) {
      // If the third element to be colored exists, change its color to Ubuntu orange
      targetColor3.style.backgroundColor = "#E95420";
    }

    // Check if the fourth element to be colored exists
    if (targetColor4) {
      // If the fourth element to be colored exists, change its color to Ubuntu orange
      targetColor4.style.backgroundColor = "#E95420";
    }

    // Set a timeout to check again in 1000 milliseconds (1 second)
    setTimeout(removeElements, 1000);
  }


  // Start the continuous removal of the elements and coloring of the specified elements
  removeElements();
})();

