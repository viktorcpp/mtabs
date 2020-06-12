
'use strict';

import "core-js";
//import "regenerator-runtime/runtime";

import MTabs from './MTabs.js';

function Main(e)
{
    window.mtabs = new MTabs();

} // Main


function OnLoaded(e)
{
    window.mtabs.Init();

} // OnLoaded


window.addEventListener( "DOMContentLoaded", Main );
window.addEventListener( "load",             OnLoaded );
