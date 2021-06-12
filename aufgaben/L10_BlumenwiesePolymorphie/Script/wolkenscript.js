"use strict";
var A10_BlumenwiesePolymorphie;
(function (A10_BlumenwiesePolymorphie) {
    class Cloud extends A10_BlumenwiesePolymorphie.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new A10_BlumenwiesePolymorphie.Vector(20, 100);
            this.velocity = new A10_BlumenwiesePolymorphie.Vector(100, 0);
            this.size = _size;
        }
        draw() {
            let grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#A9E2F3");
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.translate(this.position.x, this.position.y);
            A10_BlumenwiesePolymorphie.crc2.scale(this.size, this.size);
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x, this.position.y, 60, Math.PI * 0.5, Math.PI * 1.5);
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x + 70, this.position.y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x + 152, this.position.y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x + 200, this.position.y, 60, Math.PI * 1.5, Math.PI * 0.5);
            A10_BlumenwiesePolymorphie.crc2.moveTo(this.position.x + 200, this.position.y + 60);
            A10_BlumenwiesePolymorphie.crc2.lineTo(this.position.x, this.position.y + 60);
            //crc2.strokeStyle = "white";
            A10_BlumenwiesePolymorphie.crc2.stroke();
            A10_BlumenwiesePolymorphie.crc2.fillStyle = grd;
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.restore();
        }
    } //classklammer
    A10_BlumenwiesePolymorphie.Cloud = Cloud;
})(A10_BlumenwiesePolymorphie || (A10_BlumenwiesePolymorphie = {})); //namespaceende
//# sourceMappingURL=wolkenscript.js.map