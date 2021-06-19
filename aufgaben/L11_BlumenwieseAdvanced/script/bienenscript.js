"use strict";
var A11_BlumenwieseAdvanced;
(function (A11_BlumenwieseAdvanced) {
    class Bee extends A11_BlumenwieseAdvanced.Moveable {
        //konstruieren der Biene
        constructor(_position) {
            super(_position);
            //position
            if (_position)
                this.position = _position; //position, wie deklaiert
            else
                this.position = new A11_BlumenwieseAdvanced.Vector(750, 470); //position, wenn kein Vektor angegeben ist
            //geschwindigkeit
            this.velocity = A11_BlumenwieseAdvanced.Vector.getRandom(150, 50); //Geschwindigkeit zufällig innerhalb eines Bereichs
        }
        draw() {
            //console.log("Bee draw");
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.beginPath();
            //körper
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            A11_BlumenwieseAdvanced.crc2.fillStyle = "#FFCC33";
            A11_BlumenwieseAdvanced.crc2.fill();
            A11_BlumenwieseAdvanced.crc2.closePath();
            //ssreifen
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.beginPath();
            A11_BlumenwieseAdvanced.crc2.moveTo(this.position.x, this.position.y + 10);
            A11_BlumenwieseAdvanced.crc2.lineTo(this.position.x, this.position.y - 10);
            A11_BlumenwieseAdvanced.crc2.strokeStyle = "black";
            A11_BlumenwieseAdvanced.crc2.lineWidth = 10;
            A11_BlumenwieseAdvanced.crc2.stroke();
            A11_BlumenwieseAdvanced.crc2.closePath();
            A11_BlumenwieseAdvanced.crc2.restore();
            //flügel
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.beginPath();
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x - 2, this.position.y - 9, 5, 0, 2 * Math.PI);
            A11_BlumenwieseAdvanced.crc2.strokeStyle = "white";
            A11_BlumenwieseAdvanced.crc2.fillStyle = "lightblue";
            A11_BlumenwieseAdvanced.crc2.fill();
            A11_BlumenwieseAdvanced.crc2.closePath();
            A11_BlumenwieseAdvanced.crc2.lineWidth = 3;
            A11_BlumenwieseAdvanced.crc2.stroke();
            A11_BlumenwieseAdvanced.crc2.restore();
            //flügel
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.beginPath();
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x + 2, this.position.y - 4, 5, 0, 2 * Math.PI);
            A11_BlumenwieseAdvanced.crc2.strokeStyle = "white";
            A11_BlumenwieseAdvanced.crc2.fillStyle = "lightblue";
            A11_BlumenwieseAdvanced.crc2.fill();
            A11_BlumenwieseAdvanced.crc2.lineWidth = 2;
            A11_BlumenwieseAdvanced.crc2.closePath();
            A11_BlumenwieseAdvanced.crc2.stroke();
            A11_BlumenwieseAdvanced.crc2.restore();
            //fühler oder stachel, liegt im auge des Betrachters
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.beginPath();
            A11_BlumenwieseAdvanced.crc2.moveTo(this.position.x - 8, this.position.y - 2);
            A11_BlumenwieseAdvanced.crc2.lineTo(this.position.x - 15, this.position.y - 5);
            A11_BlumenwieseAdvanced.crc2.strokeStyle = "black";
            A11_BlumenwieseAdvanced.crc2.stroke();
            A11_BlumenwieseAdvanced.crc2.lineWidth = 2;
            A11_BlumenwieseAdvanced.crc2.closePath();
            A11_BlumenwieseAdvanced.crc2.restore();
        }
    } //classklammer
    A11_BlumenwieseAdvanced.Bee = Bee;
})(A11_BlumenwieseAdvanced || (A11_BlumenwieseAdvanced = {})); //namespaceklammer
//# sourceMappingURL=bienenscript.js.map