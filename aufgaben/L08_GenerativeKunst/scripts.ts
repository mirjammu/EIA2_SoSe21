namespace GeneratedArt {
    
    window.addEventListener("load", start);
    
    let crc1: CanvasRenderingContext2D;
    let crc2: CanvasRenderingContext2D;
    let crc3: CanvasRenderingContext2D;
    

    function start(_event: Event): void {
        
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc1 = canvas.getContext("2d")!;
        crc2 = canvas.getContext("2d")!;
        crc3 = canvas.getContext("2d")!;

        canvas.width = window.innerWidth;
        canvas.height =  window.innerHeight;
        
        circle();
        triangle();
        box();
     }
    //function of the circles 
    function circle(): void {
        for (let i: number = 0; i < 10; i++) { 
    
            let red: number = Math.floor(Math.random() * 300);
            let green: number = Math.floor(Math.random() * 300);
            let blue: number = Math.floor(Math.random() * 300);
            
            crc1.beginPath();
            
            crc1.arc(Math.floor (Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1), Math.floor(Math.random() * (90) + 1), 0 , 2 * Math.PI);
            crc1.stroke();
            crc1.closePath();
            
            crc1.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc1.fill();
            
            }
    }
    
    //function of the triangles
    function triangle(): void {
       
        for (let i: number = 0; i < 3; i++) {

            let red: number = Math.floor(Math.random() * 1000);
            let green: number = Math.floor(Math.random() * 1000);
            let blue: number = Math.floor(Math.random() * 1000);

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
    function box(): void {
        for (let i: number = 0; i < 1; i++) {

            let red: number = Math.floor(Math.random() * 500);
            let green: number = Math.floor(Math.random() * 500);
            let blue: number = Math.floor(Math.random() * 500);

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
  
   
}