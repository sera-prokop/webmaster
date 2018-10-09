'use strict';

/*
    This file can be used as entry point for webpack!
 */


import slider from 'components/slider/slider';
import personal from 'components/personal/personal';
import header from 'components/header/header';


$(document).ready(function () {

    slider.init();
    personal.init();
    header.init();

});


