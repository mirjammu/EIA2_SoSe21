"use strict";
var A10_BlumenwiesePolymorphie;
(function (A10_BlumenwiesePolymorphie) {
    class Bee extends A10_BlumenwiesePolymorphie.Moveable {
        //konstruieren der Biene
        constructor(_position) {
            super(_position);
            //position
            if (_position)
                this.position = _position; //position, wie deklaiert
            else
                this.position = new A10_BlumenwiesePolymorphie.Vector(750, 470); //position, wenn kein Vektor angegeben ist
            //geschwindigkeit
            this.velocity = new A10_BlumenwiesePolymorphie.Vector(1000, 0); //Geschwindigkeit
            this.velocity.random(120, 20); //Geschwindigkeit zufällig innerhalb eines Bereichs
        }
        draw() {
            //console.log("Bee draw");
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            //körper
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            A10_BlumenwiesePolymorphie.crc2.fillStyle = "#FFCC33";
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.closePath();
            //ssreifen
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.moveTo(this.position.x, this.position.y + 10);
            A10_BlumenwiesePolymorphie.crc2.lineTo(this.position.x, this.position.y - 10);
            A10_BlumenwiesePolymorphie.crc2.strokeStyle = "black";
            A10_BlumenwiesePolymorphie.crc2.lineWidth = 10;
            A10_BlumenwiesePolymorphie.crc2.stroke();
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.restore();
            //flügel
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x - 2, this.position.y - 9, 5, 0, 2 * Math.PI);
            A10_BlumenwiesePolymorphie.crc2.strokeStyle = "white";
            A10_BlumenwiesePolymorphie.crc2.fillStyle = "lightblue";
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.lineWidth = 3;
            A10_BlumenwiesePolymorphie.crc2.stroke();
            A10_BlumenwiesePolymorphie.crc2.restore();
            //flügel
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x + 2, this.position.y - 4, 5, 0, 2 * Math.PI);
            A10_BlumenwiesePolymorphie.crc2.strokeStyle = "white";
            A10_BlumenwiesePolymorphie.crc2.fillStyle = "lightblue";
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.lineWidth = 2;
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.stroke();
            A10_BlumenwiesePolymorphie.crc2.restore();
            //fühler oder stachel, liegt im auge des Betrachters
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.moveTo(this.position.x - 8, this.position.y - 2);
            A10_BlumenwiesePolymorphie.crc2.lineTo(this.position.x - 15, this.position.y - 5);
            A10_BlumenwiesePolymorphie.crc2.strokeStyle = "black";
            A10_BlumenwiesePolymorphie.crc2.stroke();
            A10_BlumenwiesePolymorphie.crc2.lineWidth = 2;
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.restore();
        }
    } //classklammer
    A10_BlumenwiesePolymorphie.Bee = Bee;
})(A10_BlumenwiesePolymorphie || (A10_BlumenwiesePolymorphie = {})); //namespaceklammer
//# sourceMappingURL=bienenscript.js.map