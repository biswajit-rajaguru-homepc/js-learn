
let globalID, state = true, effect ;

function animate(){
    effect.update();
    effect.draw();
    globalID = requestAnimationFrame(animate);

}



window.addEventListener('load', function(){
    const c1 = document.getElementById('c1');
    const ctx = c1.getContext('2d');
    c1.width = window.innerWidth;
    c1.height = window.innerHeight;
    const img1 = document.getElementById('img1');


    class Particle {
        constructor(effect, x, y, size, vx, vy) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.vx = vx;
            this.vy = vy;
            this.effect = effect;
            this.context = this.effect.context;
            
        }

        draw() {
            this.context.fillRect(this.x, this.y, this.size, this.size);
        }

        update() {
            if ((this.x <= 0) || (this.x >= this.effect.width)) this.vx *= -1.0
            if ((this.y <= 0) || (this.y >= this.effect.height)) this.vy *= -1.0
            this.x += this.vx;
            this.y += this.vy;
        }
    }

    class Effect {
        constructor(context, width, height) {
            this.width = width;
            this.height = height;
            this.particlesArray = [];
            this.context = context;

        }

        mrndn = (n) => Math.floor(Math.random() * n) ;
        mrnd = (n) => Math.random() * n ;
        

        init() {
            for (let i = 0; i < 30050; i++) {
                this.particlesArray.push(new Particle(this,this.mrndn(this.width), 
                this.mrndn(this.height),3,this.mrndn(5), this.mrndn(5)));
            }       
     }
         
        
     
        

        draw(){
            this.context.clearRect(0, 0, this.width, this.height);
            this.particlesArray.forEach(particle => particle.draw());
        }

        update(){
            this.particlesArray.forEach(particle => particle.update())
        }
    }

    effect = new Effect(ctx, c1.width, c1.height);
    // console.log(effect)
    effect.init();
    // console.log(effect)
    

    //animate(effect);

});




function moveImage() {
    const c1 = document.getElementById('c1');
    const ctx = c1.getContext('2d');
    const img1 = document.getElementById('img1');
    
    ctx.clearRect(0, 0, c1.width, c1.height);
    const myrand = (n) => Math.floor(Math.random()*n); 
    ctx.drawImage(img1,myrand(c1.width),myrand(c1.height),200,150);

}

function toggleAnimation() {
    
    if(state) {
        animate();
    } else {
        cancelAnimationFrame(globalID);
    }

    state = !state ;

}