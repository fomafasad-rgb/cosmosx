// stars.js
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let w, h, stars = [];

function setup() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = [];
    for(let i=0; i<400; i++) stars.push({
        x: (Math.random()-0.5)*2000, 
        y: (Math.random()-0.5)*2000, 
        z: 2000
    });
}

function loop() {
    ctx.fillStyle = '#010208'; 
    ctx.fillRect(0,0,w,h);
    
    stars.forEach(s => {
        s.z -= 5; 
        if(s.z <= 0) s.z = 2000;
        
        let x = (s.x/s.z)*(w/2) + w/2; 
        let y = (s.y/s.z)*(h/2) + h/2;
        let size = (1 - s.z/2000) * 3; 
        
        ctx.fillStyle = `rgba(255,255,255,${1 - s.z/2000})`;
        ctx.beginPath(); 
        ctx.arc(x, y, size, 0, Math.PI*2); 
        ctx.fill();
    });
    requestAnimationFrame(loop);
}

window.addEventListener('resize', setup); 
setup(); 
loop();
