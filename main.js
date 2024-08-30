var images=['images/greception.jpg','images/resto.jpg','images/suitroom.jpg','images/deluxroom.jpg','images/boardroom.jpg','images/banquet.jpg','images/hyperprivateroom.jpg','images/gym.jpg']
var panoramaImage;
var selector=document.getElementById('photo');
selector.selectedIndex=0;
var index=0;
var imageContainer,viewer;
changephoto();


function changephoto(){
 
   clearBox();
    
console.log(selector.selectedIndex);
panoramaImage && panoramaImage.dispose() && viewer.remove( panoramaImage );
panoramaImage = new PANOLENS.ImagePanorama(images[selector.selectedIndex]);
 imageContainer = document.querySelector(".image-container");
 viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.5,
  controlBar: false,
});

viewer.add(panoramaImage);
index=index+1;
}

  
function clearBox() { 
  var div = document.getElementById('img-container'); 
   
  while(div.firstChild) { 
      div.removeChild(div.firstChild); 
  } 
} 

