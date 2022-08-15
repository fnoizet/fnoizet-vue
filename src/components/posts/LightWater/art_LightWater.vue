<style scoped>
    .water {
        float: left;
        height: 380px;
        width: 100%;
        margin: 0px 20px 20px 0;
        background: linear-gradient(#06C, #013);
        border: 1px solid #FFF;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
    }
    
    .light {
        position: absolute;
        float:left;
        margin-top: -50%;
        height: 150%;
        width: 50%;
        background: radial-gradient(ellipse 40% 100% at 50% 0%, #FFFA, #FFF6, #FFF3, #FFF2, #FFF0 );
        mix-blend-mode: overlay;
        
        animation: lightMove 5s infinite alternate,
            lightRotation ease-in-out 1s infinite,
            lightAppear ease-in 5s;
    }
    
    .light.l1 { animation-duration: 5s; }
    .light.l2 { animation-duration: 6s; }
    .light.l3 { animation-duration: 8s; }
    .light.l4 { animation-duration: 9s; }
    
    .light.l5 { animation-duration: 10s; }
    .light.l6 { animation-duration: 11s; }
    .light.l7 { animation-duration: 13s; }
    .light.l8 { animation-duration: 14s; }
    
    @keyframes lightMove {
        0% { left: 0; }
        100% { left: 50%; }
    }
    
    @keyframes lightRotation {
        0%, 50%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(10deg); }
        75% { transform: rotate(-10deg); }
    }
    
    @keyframes lightAppear {
        0% { opacity: 0;}
        50% { opacity: 0.3;}
        100% { opacity: 1;}
    }
    
</style>
<template>
    
<div class="article">
    <div class="title"><h1>Effet lumière sous-marine | PURE CSS</h1></div>
    <div class="water">
        <div class="light l1"></div>
        <div class="light l2"></div>
        <div class="light l3"></div>
        <div class="light l4"></div>
        <div class="light l5"></div>
        <div class="light l6"></div>
        <div class="light l7"></div>
        <div class="light l8"></div>
    </div>
    <div class="content">
        <p>Parce que j'ai toujours aimé ce genre d'effet, qui peut être subtil et bien amené, et que cela peut-être fait simplement.</p>
        <p>En fait, j'ai pensé à ça en découvrant récemment la propriété CSS <strong>mix-blend-mode</strong> qui, pour ceux qui connaissent, fonctionne comme les modes de fusion des calques du célèbre éditeur d'image de Adobe (Photoshop donc).</p>
        <p>Cette propriété permet d'indiquer comment les couleurs de votre calque vont être appliquées (en fait, mélangées) avec la couleur de background.</p>
        <p>Il existe de très bonnes explications agrémentées d'exemples pertinants, voici les 3 premiers que j'ai pu relever :
        <ul style="padding-left:20px;">
            <li><a href="https://developer.mozilla.org/fr/docs/Web/CSS/mix-blend-mode" target="_blank">Le site developer.mozilla.org</a></li>
            <li><a href="https://css-tricks.com/almanac/properties/m/mix-blend-mode/" target="_blank">Cet article de CSS-Tricks</a></li>
            <li><a href="http://stylescss.free.fr/v2-properties/blend-mode.php#simulateur" target="_blank">Simulateur et détails des calculs sur stylescss.free.fr</a></li>
        </ul>
        </p>
        
        <p>Et sinon, côté code...</p>
        
        <p>HTML</p>
<pre style="padding:5px; background-color: #EEE; line-height: 16px; border:1px solid #AAA">
&lt;div class="water"&gt;
&nbsp;&nbsp;&lt;div class="light l1"&gt;&lt;div&gt;
&nbsp;&nbsp;&lt;div class="light l2"&gt;&lt;/div&gt;
&nbsp;&nbsp;&lt;div class="light l3"&gt;&lt;/div&gt;
&nbsp;&nbsp;&lt;div class="light l4"&gt;&lt;/div&gt;
&nbsp;&nbsp;&lt;div class="light l5"&gt;&lt;/div&gt;
&nbsp;&nbsp;&lt;div class="light l6"&gt;&lt;/div&gt;
&nbsp;&nbsp;&lt;div class="light l7"&gt;&lt;/div&gt;
&nbsp;&nbsp;&lt;div class="light l8"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
            ... un conteneur avec les éléments qui vont servir de lumière
        <p>CSS</p>
        <pre style="padding:5px; background-color: #EEE; line-height: 16px; border:1px solid #AAA">
.water {
    float: left;
    height: 380px;
    width: 760px;
    margin: 0px 20px 20px 0;
    background: linear-gradient(#06C, #013);
    border: 1px solid #FFF;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
}

.light {
    position: absolute;
    float:left;
    margin-top: -50%;
    height: 150%;
    width: 50%;
    background: radial-gradient(
        ellipse 40% 100% at 50% 0%, 
        #FFFA,
        #FFF6,
        #FFF3,
        #FFF2,
        #FFF0
    );
    mix-blend-mode: overlay;

    animation: lightMove 10s infinite alternate,
        lightRotation ease-in-out 1s infinite,
        lightAppear ease-in 10s;
}

.light.l1 { animation-duration: 10s; }
.light.l2 { animation-duration: 13s; }
.light.l3 { animation-duration: 17s; }
.light.l4 { animation-duration: 19s; }

.light.l5 { animation-duration: 21s; }
.light.l6 { animation-duration: 23s; }
.light.l7 { animation-duration: 27s; }
.light.l8 { animation-duration: 29s; }

@keyframes lightMove {
    0% { left: 0; }
    100% { left: 50%; }
}

@keyframes lightRotation {
    0%, 50%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(10deg); }
    75% { transform: rotate(-10deg); }
}

@keyframes lightAppear {
    0% { opacity: 0;}
    50% { opacity: 0.3;}
    100% { opacity: 1;}
}
        </pre>
        
        <p>
            Les éléments à l'intérieur du conteneur principal sont simplement des dégradés de fond, avec la propriété CSS <strong>background</strong> avec un <strong>radial-gradient</strong>.<br/>
            Mais en réalité, ce sont surtout les animations CSS qui font tout le travail visuel, couplé avec le <strong>mix-blend-mode</strong>
        </p>
    </div>
</div>
</template>
