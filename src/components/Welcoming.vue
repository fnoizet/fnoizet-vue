<template>
  <div class="welcoming">
    <div class="box" id="box1"></div>
  </div>
</template>
<script>
/**
 * Full documentation for Motion One available
 * at https://motion.dev
 */
import anime from "animejs";

const _H = window.innerHeight;
const _W = window.innerWidth;

const balls = [];
const aBoxPositions = [
  /* 1 */ { x: _W / 2, y: _H / 2 - 49, name: "NORTH" },
  /* 2 */ { x: _W / 2 + 49, y: _H / 2, name: "EAST" },
  /* 3 */ { x: _W / 2, y: _H / 2 + 49, name: "SOUTH" },
  /* 4 */ { x: _W / 2 - 49, y: _H / 2, name: "WEST" },
];

export default {
    name: "WelcomingPresentation",
    methods: {
        startBall: function () {
            anime.set("#box1", { translateX: _W / 2, translateY: _H });
            anime({
                targets: "div.box",
                translateY: _H / 2,
                backgroundColor: "#FFF",
                loop: 1,
                duration: 1000,
                complete: () => {
                    this.explodeBalls();
                },
            });
        },

        explodeBalls: function () {
            let initialBox = document.querySelectorAll("div.box")[0];
            let copy = null;

            /**
             * 1 = N, 2 = E, 3 = S, 4 = W
             */

            /* copy */
            for (var i = 2; i <= 4; i++) {
                copy = initialBox.cloneNode();
                copy.id = "box" + i;
                initialBox.parentNode.appendChild(copy);
            }

            for (i = 1; i <= 4; i++) {
                let box = document.querySelectorAll("#box" + i)[0];
                box.name = aBoxPositions[i - 1].name;
                anime({
                targets: "#box" + i,
                translateX: aBoxPositions[i - 1].x,
                translateY: aBoxPositions[i - 1].y,
                "border-radius": "0px",
                duration: 250,
                easing: "easeInOutQuad",
                complete: () => {
                    this.flattenBox(box);
                },
                });
            }
        },
        flattenBox: function(box) {
            //let index = parseInt(box.id.substring(3), 10) - 1;
            let cx = parseInt(anime.get(box, "translateX", "px"), 10);
            let cy = parseInt(anime.get(box, "translateY", "px"), 10);
            let cw = parseInt(anime.get(box, "offsetWidth", "px"), 10);
            let ch = parseInt(anime.get(box, "offsetWidth", "px"), 10);
            let nx,
                ny,
                nw,
                nh = 0;
            switch (box.name) {
                case "NORTH":
                case "SOUTH":
                nh = 2;
                nw = 100;
                nx = cx + cw / 2 - nw / 2;
                ny = cy + ch / 2 - nh / 2;
                break;
                case "EAST":
                case "WEST":
                nh = 100;
                nw = 2;
                nx = cx + cw / 2 - nw / 2;
                ny = cy + ch / 2 - nh / 2;
                break;
                default:
                break;
            }

            anime({
                targets: box,
                translateX: nx,
                translateY: ny,
                width: nw + "px",
                height: nh + "px",
                duration: 250,
                easing: "easeInOutQuad",
                complete: () => {
                balls.push(box);

                if (balls.length === 4) {
                    this.transformFlattenBallsToBox();
                }
                },
            })
        },
        transformFlattenBallsToBox: function() {
            let initialBox = document.querySelectorAll("div.box")[0];
            const newBox = document.createElement("div");
            newBox.id = "square";
            initialBox.parentNode.appendChild(newBox);
            newBox.style.top = parseInt(anime.get(balls[0], "translateY"), 10) + "px";
            newBox.style.left = parseInt(anime.get(balls[0], "translateX"), 10) + "px";

            /*
            balls.forEach((ball) => {
                ball.parentNode.removeChild(ball);
            });*/
            anime.set(".box", {
                opacity: 0,
            });

            anime.set({
                targets: newBox,
                rotate: -90,
            });

            anime({
                targets: newBox,
                keyframes: [
                    {
                        borderRadius: "50% 10px",
                        duration: 500,
                    },
                    {
                        "box-shadow": "0 0 5px",
                        rotate: 90,
                        duration: 500,
                    },
                ],
                easing: "easeInBack",
                duration: 1000,
                complete: () => {
                    anime({
                        targets: newBox,
                        keyframes: [
                            { "box-shadow": "0 0 5px " },
                            { "box-shadow": "0 0 10px " },
                            { "box-shadow": "0 0 5px " },
                        ],
                        duration: 5000,
                        easing: "linear",
                        loop: true,
                    });

                    let enterNode = document.createElement("div");
                    enterNode.id = "enterNode";
                    enterNode.innerHTML = "Enter";
                    enterNode.addEventListener("click", () => {
                        anime({
                        targets: newBox,
                        translateX: -_H,
                        duration: 200,
                        easing: "easeInBack",
                        complete: () => {
                            this.$emit('presented');
                        },
                        });
                    });
                    newBox.appendChild(enterNode);
                },
            });
        }
    },
    mounted() {
        this.startBall();
    },
};
</script>
<style>
.welcoming {
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.welcoming .box {
  position: absolute;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
}

.welcoming #square {
  position: absolute;
  top: 0;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 2px solid #fff;
  overflow: hidden;
}

.welcoming #square #enterNode {
  width: 150%;
  height: 150%;
  display: flex;
  background: var(--main-gradient);
  content: "enter";
  transform: rotate(-45deg);
  animation: appear 1s 1 forwards;
  justify-content: center;
  line-height: 150px;
  font-size: 33px;
  font-family: arial;
  margin: -28% 0 0 -26%;
  cursor: pointer;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
