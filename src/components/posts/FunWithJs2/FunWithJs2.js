/*var config = {
    nb: 150,
    nbMobile: 50,
    focusStep: 1,
    maxFocus: 10,
    bubbleSize: 40
};

Math.minmax = function(min, max, val) {
    if (val <= min) return min;
    if (val >= max) return max;
    return val;
}

class Bubble {
    constructor(viewport) {
        this.context = viewport;
        this.blocked = false;
        this.init();
        return this;
    }

    init() {
        this.node = document.createElement('div');
        this.node.classList.add('bubble');

        this.animationDuration = (3 + Math.round(Math.random() * 20));
        
        this.t = Math.round(360 * Math.random());
        this.t2 = Math.round(360 * Math.random());
        this.speed = (0.5 + Math.random()) / 10;
        this.speed2 = 0.1;

        this.anamorph = {
            w : 100 - ((Math.random()-0.5) * 40),
            h : 100 - ((Math.random()-0.5) * 40)
        }

        this.z = Math.max(1,Math.random() * config.maxFocus);

        this.context.display.appendChild(this.node);
	}

    move() {
        this.t = (this.t + this.speed)%360;
        this.t2 = (this.t2 + this.speed2)%360;
        
        var center = this.context.getCenter();
        var zoom = this.context.getZoomScale();
        var blur = Math.abs(this.z - this.context.getFocus());

        this.x = center.x + Math.cos(this.t * Math.PI/180) * zoom.w * (this.anamorph.w/100) + this.context.xFactor * 1/Math.tan(this.z * Math.PI/180);
        this.y = center.y + Math.sin(this.t * Math.PI/180) * zoom.h * (this.anamorph.h/100) + this.context.yFactor * 1/Math.tan(this.z * Math.PI/180);

        this.node.style = 'animation-duration : '+this.animationDuration+'s; transform: scale('+(5 / this.z)+') rotate('+(this.t2)+'deg)';
        this.node.style.top = this.y+'px';
        this.node.style.left = this.x+'px';
        
        this.node.style.webkitFilter = 'blur('+blur+'px)';
        this.node.style.filter = 'blur('+blur+'px)';
    }
}

class Viewport {
    constructor(node) {
        this.display = node;
        this.updateSize();
        this.focus = 1;

        this.xFactor = 0.5;
        this.yFactor = 5;

        this.init();
        return this;
    }

    init() {
        window.addEventListener("resize", this.updateSize.bind(this));
        //window.addEventListener('gestureend', this.handleGesture.bind(this));
        window.addEventListener('touchmove', this.handleTouch.bind(this));
        window.addEventListener('mousemove', this.handleTouch.bind(this));
    }

    updateSize(e) {
        this.w = this.display.offsetWidth;
        this.h = this.display.offsetHeight;

        this.center = {x: this.w / 2, y: this.h / 2};
    }

    updateFactor(e) {
        if (e.touches) {
            var clientX = e.touches[0].clientX;
        //    var clientY = e.touches[0].clientY;
        } else {
            var clientX = e.clientX;
        //    var clientY = e.clientY;
        }
        this.xFactor = (clientX - this.w/2) * 10 / this.w;
        //this.yFactor = (clientY - this.h/2) * 10 / this.h;
    }

    updateFocus(e) {
        var focusDelta = 0;
        if (!this.lastTouch) {
            this.lastTouch = e;
        }

        var dir = 0; 
        if (e.touches) {
            dir = this.lastTouch.touches[0].clientY > e.touches[0].clientY ? -1 : 1;
        } else {
            dir = e.movementY;
        }

        if (dir > 0) {
            focusDelta = 1;
        } else if (dir < 0){
            focusDelta = -1;
        }

        this.focus = Math.minmax(1, config.maxFocus, this.focus + focusDelta/10);

        this.lastTouch = e;
    }

    handleTouch(e) {
        this.updateFactor(e);
        this.updateFocus(e);
    }

    getCenter() {
        return this.center;
    }

    getZoomScale() {
        return {w: this.w / 3, h: this.h / 3};
    }

    getFocus() {
        return this.focus;
    }
}

class Fun2 {
	constructor(){
        if ($('#viewport')[0]) {
            this.viewport = new Viewport($('#viewport')[0]);
            this.bubbles = [];
            
            requestAnimationFrame(()=>this.main());
        }

        this.init();
	}
    
    disableAnimation() {
        cancelAnimationFrame(this._animationFrame);
    }
	
	init() {
        this.calculateHeight();
        window.addEventListener('resize', this.calculateHeight);
    }
    
    main() {
        try {
            var bubble;
            var nb = mobileAndTabletCheck() ? config.nbMobile : config.nb;

            while(this.bubbles.length < nb) {
                bubble = new Bubble(this.viewport);
                this.bubbles.push(bubble);
            }

            this.bubbles.forEach(function(el) {
                el.move();
            });
            
            this._animationFrame = requestAnimationFrame(()=>this.main());
        } catch(Err) {
            cancelAnimationFrame(this._animationFrame);
            console.log(Err);
        }
    }
    
    calculateHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh+'px');
    }
}


$(document).ready(function(){
    window.fun2 = new Fun2();
    document.documentElement.style.setProperty('--bubble-size', config.bubbleSize+'px');
    document.documentElement.style.setProperty('--bg-color', "#0066CC");
});*/
