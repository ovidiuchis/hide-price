// ==UserScript==
// @name         Ascunde pret
// @namespace    http://google.com/
// @version      1
// @description  Ascunde pretul de pe emag.ro
// @author       You
// @match        http*://*.emag.ro/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var classesArr = [
        "emg-carousel-price",
        "product-new-price",
        "product-old-price",
        "product-prices",
        "produs-listing-price-box",
        "widget_product_initial_price",
        "widget_product_price",
        "emg-fluid-fav-price-area",
        "emg-mini-cart-item-price"
    ];

    var styleElement = document.createElement("style");
    styleElement.innerHTML = ".hide-price-hidden { position: relative; display: none !important;} .hide-price-hidden:before { content: 'Pret ascuns'; position: absolute; background-color: #005eb8; border-radius: 4px; z-index: 9999; transform: rotate(2.5deg); left: -10px; color: white; font-size: 150%; padding: 8%; }";
    document.getElementsByTagName("body")[0].appendChild(styleElement);

    var getClasses = function(className) {
        return Array.prototype.map.call(document.getElementsByClassName(className), setHideClass);
    };

    var setHideClass = function(priceElement) {
        if (priceElement.classList.contains("hide-price-hidden") === false) {
            return priceElement.classList.add("hide-price-hidden");
        }
    };

    var hidePrice = function(){
        console.log('asd');
        Array.prototype.map.call(classesArr, getClasses);
    };

    var hidePriceInterval = setInterval(hidePrice, 1);

    setTimeout(function(){clearInterval(hidePriceInterval);}, 5000);

    var hidePriceIntervalSlow = setInterval(hidePrice, 1000);

})();
