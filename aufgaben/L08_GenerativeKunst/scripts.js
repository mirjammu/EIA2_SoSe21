"use strict";
var GeneratedArt;
(function (GeneratedArt) {
    window.addEventListener("load", start);
    let crc1;
    let crc2;
    let crc3;
    function start(_event) {
        let canvas = document.querySelector("canvas");
        crc1 = canvas.getContext("2d");
        crc2 = canvas.getContext("2d");
        crc3 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        circle();
        triangle();
        box();
    }
    //function of the circles 
    function circle() {
        for (let i = 0; i < 10; i++) {
            let red = Math.floor(Math.random() * 300);
            let green = Math.floor(Math.random() * 300);
            let blue = Math.floor(Math.random() * 300);
            crc1.beginPath();
            crc1.arc(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1), Math.floor(Math.random() * (90) + 1), 0, 2 * Math.PI);
            crc1.stroke();
            crc1.closePath();
            crc1.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc1.fill();
        }
    }
    //function of the triangles
    function triangle() {
        for (let i = 0; i < 3; i++) {
            let red = Math.floor(Math.random() * 1000);
            let green = Math.floor(Math.random() * 1000);
            let blue = Math.floor(Math.random() * 1000);
            crc2.beginPath();
            crc2.moveTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc2.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc2.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc2.fill();
        }
    }
    //function of the boxes
    function box() {
        for (let i = 0; i < 1; i++) {
            let red = Math.floor(Math.random() * 500);
            let green = Math.floor(Math.random() * 500);
            let blue = Math.floor(Math.random() * 500);
            crc3.beginPath();
            crc3.moveTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc3.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc3.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc3.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc3.stroke();
            crc3.closePath();
            crc3.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc3.fill();
        }
    }
})(GeneratedArt || (GeneratedArt = {}));
//# sourceMappingURL=scripts.js.map