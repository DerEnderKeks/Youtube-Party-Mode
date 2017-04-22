// ==UserScript==
// @name         YouTube Party Mode Automated
// @namespace    https://derenderkeks.me/
// @version      0.0.1
// @description  Automatically activates the party mode for the youtube player
// @author       DerEnderKeks
// @updateURL    https://raw.githubusercontent.com/DerEnderKeks/Youtube-Party-Mode/master/ytpartymode.user.js
// @downloadURL  https://raw.githubusercontent.com/DerEnderKeks/Youtube-Party-Mode/master/ytpartymode.user.js
// @include      https://youtube.com/*
// @include      https://*.youtube.com/*
// @require      https://code.jquery.com/jquery-3.2.1.slim.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('.html5-video-player').addClass('ytp-party-mode').addClass('ytp-color-party');
})();
