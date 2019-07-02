let toEndFrame = false;
setTimeout(() => {
  TweenLite.set(loader, {css: { display: "block", transformOrigin: "16px 16px"} });
  TweenLite.to(loader, 16, { css: { rotation: "4500" } });
});

const adVisible = () => {
  TweenLite.to(background, 2, { css: { "opacity": "1", "scale": "1"  }, ease: Expo.easeOut, delay: .5 }, );
  loadImages();
};
const loadImages = () => {
  let adImages = [ "images/title.png", "images/rocketpass.png", "images/daysleft.png", "images/cta.png"];
  let adDivs = [title, rocketpass, daysleft, cta];

  let i;
  let adImagesObject = [];
  let numberImagesLoaded = 0;

  let numberOfImages = adImages.length;
  for (i = 0; i < adImages.length; i++) {
    adImagesObject[i] = new Image();
    adImagesObject[i].src = adImages[i];
    adImagesObject[i].onLoad = onImageLoad();
  };
  function onImageLoad() {
	TweenLite.set(adDivs[i], {css:{'background-image': `url(${adImages[i]})` }}); //sets each to a new background. Wondering why there isn't a `#${adDivs[i]}` 
		numberImagesLoaded++;
		if (numberImagesLoaded == numberOfImages) { //check to see once all the images are loaded. 
      TweenLite.to(loader, .5, {css:{'opacity' : '0'}, ease:Expo.easeOut}); //gets rid of the loader
      setAnimationQues();
			setTimeout(removeLoader, 250);
		};
  }
};
const removeLoader = () => {
    startAnimation();
}
const  setAnimationQues = () => {
    TweenLite.set(title, {css:{'left' : '700px'}} );
    TweenLite.set(rocketpass, {css:{'left' : '-400px'}} );
    TweenLite.set(daysleft, {css:{'right': "-300px", 'rotation': '-180'}});
    TweenLite.set(cta, {css:{'opacity': "0", 'scale': '1'}});
}


const startAnimation = () => {
    TweenLite.to(title, 2, {css:{'left' : '40px'},  ease: Elastic.easeOut.config(.75, 0.4), y: -200, delay: .6});
    TweenLite.to(rocketpass, 2, {css:{'left' : '400px'},  ease: Elastic.easeOut.config(.75, 0.4), y: -200, delay: .9});
    TweenLite.to(daysleft, 2, {css:{'right': '20px', 'rotation': '20'}, ease: Power4.easeOut, y: -500, delay: 1.5});
    
    setTimeout(function(){
       toEndFrame = true;
    },1500);
}

function ctaOver(){
  if(toEndFrame){
    TweenLite.to(cta, 1, {css:{'opacity' : '1', 'scale': '1.2'}, ease: Circ.easeOut, y: -500});
    TweenLite.to(title,1, {css:{'left' : '700px'}} );
    TweenLite.to(rocketpass,1,  {css:{'left' : '-400px'}} );
    TweenLite.to(daysleft,1, {css:{'right': "-300px", 'rotation': '-180'}});
      
  }
}
function ctaOut(){
    TweenLite.to(cta, 1, {css:{'opacity' : '0', 'scale': '1'}, ease: Circ.easeOut, y: -500});
    TweenLite.to(title, 1.5, {css:{'left' : '40px'},  ease: Elastic.easeOut.config(.75, 0.4), y: -200, delay: 0});
    TweenLite.to(rocketpass, 1.5, {css:{'left' : '400px'},  ease: Elastic.easeOut.config(.75, 0.4), y: -200, delay: 0});
    TweenLite.to(daysleft, 1.5, {css:{'right': '20px', 'rotation': '20'}, ease: Power4.easeOut, y: -500, delay: 0});
}


setTimeout(adVisible, 250);