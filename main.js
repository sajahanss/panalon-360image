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
  autoRotateSpeed: 1,
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


//Date Setup

var date = new Date();

var day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear(),
    hour = date.getHours(),
    min  = date.getMinutes();

month = (month < 10 ? "0" : "") + month;
day = (day < 10 ? "0" : "") + day;
hour = (hour < 10 ? "0" : "") + hour;
min = (min < 10 ? "0" : "") + min;

var today = year + "-" + month + "-" + day,
    displayTime = hour + ":" + min; 

document.getElementById('f-date').value = today;      
document.getElementById("t-date").value = today;
