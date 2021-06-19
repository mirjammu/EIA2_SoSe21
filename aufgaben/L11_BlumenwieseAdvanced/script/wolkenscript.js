"use strict";
var A11_BlumenwieseAdvanced;
(function (A11_BlumenwieseAdvanced) {
    class Cloud extends A11_BlumenwieseAdvanced.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new A11_BlumenwieseAdvanced.Vector(20, 100);
            this.velocity = new A11_BlumenwieseAdvanced.Vector(100, 0);
            this.size = _size;
        }
        draw() {
            let grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#A9E2F3");
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.translate(this.position.x, this.position.y);
            A11_BlumenwieseAdvanced.crc2.scale(this.size, this.size);
            A11_BlumenwieseAdvanced.crc2.beginPath();
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x, this.position.y, 60, Math.PI * 0.5, Math.PI * 1.5);
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x + 70, this.position.y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x + 152, this.position.y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x + 200, this.position.y, 60, Math.PI * 1.5, Math.PI * 0.5);
            A11_BlumenwieseAdvanced.crc2.moveTo(this.position.x + 200, this.position.y + 60);
            A11_BlumenwieseAdvanced.crc2.lineTo(this.position.x, this.position.y + 60);
            //crc2.strokeStyle = "white";
            A11_BlumenwieseAdvanced.crc2.stroke();
            A11_BlumenwieseAdvanced.crc2.fillStyle = grd;
            A11_BlumenwieseAdvanced.crc2.fill();
            A11_BlumenwieseAdvanced.crc2.restore();
        }
    } //classklammer
    A11_BlumenwieseAdvanced.Cloud = Cloud;
})(A11_BlumenwieseAdvanced || (A11_BlumenwieseAdvanced = {})); //namespaceende
//# sourceMappingURL=wolkenscript.js.map