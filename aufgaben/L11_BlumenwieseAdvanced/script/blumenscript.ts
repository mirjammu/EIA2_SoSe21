namespace A11_BlumenwieseAdvanced {

    export class Flower {

        constructor (_position?: Vector) {
            //console.log("Flower");
        }

        public draw(_x: number, _y: number): void {

                for (let index: number = 0; index < 7; index++) {
                let greenFlower: number = Math.floor(Math.random() * 200);
                let blueFlower: number = Math.floor(Math.random() * 200);
                let redFlower: number = Math.floor(Math.random() * 200);
        
        
                //Stiel
                crc2.beginPath();
                crc2.strokeStyle = "#088A08";
                crc2.fillStyle = "#0B610B";
                crc2.fillRect(_x - 2, _y + 10, 4, 40); 
        
                //Blüte
                crc2.beginPath();
                crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
        
                crc2.moveTo(_x, _y);
                crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                crc2.fill();
        
                //Punkt 
                crc2.beginPath();
                crc2.fillStyle = "#FFBF00";
                crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
            }

        }

       public draw2(_x: number, _y: number): void { 
            for (let index: number = 0; index < 5; index++) {
            let greenFlower: number = Math.floor(Math.random() * 200);
            let blueFlower: number = Math.floor(Math.random() * 200);
            let redFlower: number = Math.floor(Math.random() * 200);
     
            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "#088A08";
            crc2.fillStyle = "#0B610B";
            crc2.fillRect(_x - 2, _y + 10, 4, 40); 
        
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
        
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
            crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
            crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
            crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
            crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
            crc2.fill();
        
            //Punkt 
            crc2.beginPath();
            crc2.fillStyle = "#FFBF00";
            crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
        }

    }//end flower 
}