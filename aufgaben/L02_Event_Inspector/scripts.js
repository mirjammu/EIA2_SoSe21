"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    //install mouse move listener on document
    function handleLoad(_event) {
        console.log(_event);
        //install mousemove listener on document:
        document.addEventListener("mousemove", setInfoBox);
        //install click and keyup listeners on document, body and all divs:
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        //create span and add to dom
        let mousePositionSpan = document.createElement("span");
        document.body.appendChild(mousePositionSpan);
    }
    //mouse move
    function setInfoBox(_event) {
        console.log("mousemove");
        //display mouse position and event's target in span-element
        let mousePositionSpan = document.querySelector("span");
        let x = _event.pageX;
        let y = _event.pageY;
        //set position of span with position of mouse, offset
        mousePositionSpan.style.left = x + 10 + "px";
        mousePositionSpan.style.top = y + 10 + "px";
    }
    //log info to browser console
    function logInfo(_event) {
        //log event's type, target, current Target and whole event object to console
        console.log(_event);
        console.log(_event.target);
        console.log(_event.currentTarget);
    }
})(EventInspector || (EventInspector = {})); //end namespace
//# sourceMappingURL=scripts.js.map