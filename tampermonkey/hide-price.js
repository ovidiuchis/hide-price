// ==UserScript==
// @name         Ascunde pret
// @version      1.0
// @description  Ascunde pretul de pe emag.ro
// @author       pckltr
// @match        http*://*.emag.ro/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    console.log(document);

    var classesArr = [
        "emg-carousel-price",
        "product-new-price",
        "product-old-price",
        "product-prices",
        "produs-listing-price-box",
        "widget_product_initial_price",
        "widget_product_price",
        "emg-fluid-fav-price-area",
        "emg-mini-cart-item-price",
        "product-price"
    ];

    var styleElement = document.createElement("style");

    var getClasses = function(className) {
        styleElement.innerHTML += "." + className + " { display: none !important; } ";
    };

    document.getElementsByTagName("head")[0].appendChild(styleElement);

    Array.prototype.map.call(classesArr, getClasses);

})();
