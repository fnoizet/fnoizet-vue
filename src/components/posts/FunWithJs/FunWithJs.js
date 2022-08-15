var config = {
    bubbleSize: 3,
    bubbleSpeed: 0.5,
    bubbleNumber: 500,
    bubbleNumber_mobile: 500, /*150,*/
    strokeDistance: 1,
    globalSpeed: 0,
    bubbleColor: '#08F',
    initialBubbleColor: '#08F',
    doConnect: true
};

const mobileAndTabletCheck = function() {
    return false;
}
 
function hexToDec(hexString){
    return parseInt(hexString, 16);
  }
  
class Color {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        
        return this;
    }

    static fromHex(str) {
        str = str.replace('#', '');
        var r = 0;
        var g = 0;
        var b = 0;
        var a = 1;
        if (str.length === 3 || str.length === 4) {
            r = hexToDec(str.substring(0,1) + str.substring(0,1));
            g = hexToDec(str.substring(1,2) + str.substring(1,2));
            b = hexToDec(str.substring(2,3) + str.substring(2,3));
            if (str.length === 4) {
                a = hexToDec(str.substring(3,4) + str.substring(3,4)) / 255;
            }
        } else if(str.length === 6 || str.length === 8) {
            r = hexToDec(str.substring(0,2));
            g = hexToDec(str.substring(2,4));
            b = hexToDec(str.substring(4,6));
            if (str.length === 8) {
                a = hexToDec(str.substring(6,8)) / 255;
            }
        }
        
        return new Color(r,g,b,a);
    }

    toString(){
        return 'rgba('+this.r+','+this.g+','+this.b+','+(this.a)+')';
    }

    setR(r) {this.r = r;}
    setG(g) {this.g = g;}
    setB(b) {this.b = b;}
    setA(a) {this.a = a;}
    }

class Bubble {
    constructor(canvas) {
        this.canvas = canvas;
        this.outOfBounds = false;
        
        this._v = config.bubbleSpeed;
        this.x = Math.round(Math.random() * this.canvas.width);
        this.y = Math.round(Math.random() * this.canvas.height);
        this.vx = (Math.random() * this._v) - this._v/2;
        this.vy = (Math.random() * this._v) - this._v/2;
        
        this.color = Color.fromHex(config.bubbleColor);

        this.alpha = 0;
        
        this.size = config.bubbleSize;
    }
    
    move() {
        this.alpha = Math.min(1, this.alpha + 0.01);
        this.x += this.vx * (1+config.globalSpeed);
        this.y += this.vy * (1+config.globalSpeed);
        
        if (this.x < -100 || this.x > this.canvas.width + 100
            || this.y < -100 || this.y > this.canvas.height + 100
        ) {
            this.outOfBounds = true;
        }
    }
    
    draw(ctx) {
        try {
            this.move();
            ctx.beginPath();
            ctx.globalCompositeOperation = 'screen';
            ctx.fillStyle = 'rgba('+this.color.r+','+this.color.g+','+this.color.b+','+this.alpha+')';
            ctx.arc((this.x),(this.y),this.size,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        } catch(err) {
            console.log(err);
        }
    }
}

export default class Fun {
	constructor(){
        if (document.querySelector('#cels')) {
            this.canvas = document.querySelector('#cels');
            this.ctx = this.canvas.getContext('2d');
            
            this.height = this.canvas.offsetHeight;
            this.width = this.canvas.offsetWidth;
            
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            
            this.bubbles = [];
            this.nbBubbles = mobileAndTabletCheck() ? config.bubbleNumber_mobile : config.bubbleNumber;
            
            requestAnimationFrame(()=>this.main());
        }

        this.init();
		return this;
	}
    
    disableAnimation() {
        cancelAnimationFrame(this._animationFrame);
    }
	
	init() {
        if (this.canvas) {
            document.querySelector("body").addEventListener("mousemove", () => {this.handleMouseMove()});
            document.querySelector("body").addEventListener("touchmove", () => {this.handleTouchMove()});
        }

        this.handleResize();
        window.addEventListener("resize", () => {this.handleResize()});
        
        this.calculateHeight();
        window.addEventListener('resize', this.calculateHeight);
	}
    
    handleResize() {
        if (this.canvas) {
            this.height = this.canvas.offsetHeight;
            this.width = this.canvas.offsetWidth;
            
            this.canvas.width = this.width;
            this.canvas.height = this.height;

            this.strokeDistance = Math.min(this.width, this.height) / 10;
        }
    }
    
    handleTouchMove(e) {
        if (!this.previousTouch) {
            this.previousTouch = e.touches[0];
            return;
        }
        
        var event = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
            move_x: this.previousTouch.clientX > e.touches[0].clientX ? -2 : 2,
            move_y: this.previousTouch.clientY > e.touches[0].clientY ? -2 : 2
        };
        
        this.replaceBubbles(event);
        
        this.previousTouch = e.touches[0];
    }
    
    handleMouseMove(e) {
        var event = {
            x: e.originalEvent.x,
            y: e.originalEvent.y,
            move_x: e.originalEvent.movementX,
            move_y: e.originalEvent.movementY
        };
        this.replaceBubbles(event);
        //this.calculateGlobalSpeed(e);
    }
    
    replaceBubbles(e) {
        for(var bubble of this.bubbles) {
            if (Math.sqrt(Math.pow(Math.abs(bubble.x - e.x),2) + Math.pow(Math.abs(bubble.y - e.y),2)) < 100) {
                bubble.color.r = Math.max(0, bubble.color.r - 5);
                bubble.color.g = Math.min(200, bubble.color.g + 5);
                bubble.color.b = Math.max(0, bubble.color.b - 5);
                
                bubble.size += 0.2;
                
                //bubble.color = Color.fromHex("#0CF");
                
                bubble.vx += e.move_x/100;
                bubble.vy += e.move_y/100;
                
            }
        }
    }
    
    calculateGlobalSpeed() {
        config.globalSpeed = Math.min(10, config.globalSpeed*1.05);
    }
    
    connect(b1, b2) {
        if (!config.doConnect) {return ;}
        
        var ctx = this.ctx;
        var d = Math.round(Math.sqrt(Math.pow(b1.x-b2.x,2) + Math.pow(b1.y-b2.y,2)));
        var alpha = ((this.strokeDistance - d) / this.strokeDistance) * b1.alpha * b2.alpha;
        ctx.beginPath();
        //ctx.globalCompositeOperation = 'screen';
        ctx.strokeStyle = 'rgba('+b1.color.r+','+b1.color.g+','+b1.color.b+','+alpha+')';
        ctx.moveTo(b1.x,b1.y);
        ctx.lineTo(b2.x, b2.y);
        ctx.stroke();
        ctx.closePath();
    }
    
    main() {
        try {
            let bubble;
            this.clear();
            
            this.bubbles = this.bubbles.filter(x=>x.outOfBounds === false);
            
            while(this.bubbles.length < this.nbBubbles) {
                this.bubbles.push(new Bubble(this.canvas));
            }
            
            var testConnexion = [];
            for(let bubble of this.bubbles) {
                bubble.draw(this.ctx);
                testConnexion.push(bubble);
            }
            
            var connexions = [];
            var connected = [];
            while(testConnexion.length > 0) {
                bubble = testConnexion.pop();
                connected = testConnexion.filter(b => Math.sqrt(Math.pow(b.x-bubble.x,2) + Math.pow(b.y-bubble.y,2)) < this.strokeDistance);
                for(var conn of connected) {
                    connexions.push([bubble, conn]);
                }
            }
            
            for(var connexion of connexions) {
                this.connect(connexion[0],connexion[1]);
            }
            
            config.globalSpeed = Math.max(config.bubbleSpeed, config.globalSpeed*0.99);
            
            this._animationFrame = requestAnimationFrame(()=>this.main());
        } catch(Err) {
            cancelAnimationFrame(this._animationFrame);
            console.log(Err);
        }
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    
    calculateHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh+'px');
    }
}
