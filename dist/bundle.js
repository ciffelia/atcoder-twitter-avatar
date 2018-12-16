// ==UserScript==
// @name         AtCoder Twitter Avatar
// @namespace    https://ciffelia.com/
// @version      1.0.2
// @description  Display Twitter avatar on AtCoder user page
// @author       Ciffelia <mc.prince.0203@gmail.com> (https://ciffelia.com/)
// @license      MIT
// @homepage     https://github.com/ciffelia/atcoder-twitter-avatar#readme
// @supportURL   https://github.com/ciffelia/atcoder-twitter-avatar/issues
// @match        http*://atcoder.jp/user/*
// @match        https://beta.atcoder.jp/users/*
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  const twLinkElm = document.querySelector('a[href*="//twitter.com/"]');

  if (twLinkElm !== null) {
    const screenName = twLinkElm.innerText;
    const avatarUrl = `https://avatars.io/twitter/${screenName}/small`;

    const avatarElm = document.createElement('img');
    avatarElm.src = avatarUrl;
    avatarElm.referrerPolicy = 'no-referrer';
    Object.assign(avatarElm.style, {
      width: '20px',
      height: '20px',
      marginRight: '5px',
      borderRadius: '50%'
    });

    twLinkElm.insertAdjacentElement('afterbegin', avatarElm);
  }

}());
