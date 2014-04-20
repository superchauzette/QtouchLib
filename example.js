var qtouch = require("qtouch");

var KEY0=0 , KEY1=1;

// sur l'appui du bouton 0 KEY0
qtouch.onPressUp(KEY0, function(){
  console.log("on Press Up");
});

// sur le relachement du bouton 0 KEY0
qtouch.onPressDown(KEY0, function(){
  console.log("on Press Down");
});


//lecture en continu des valeurs sur bus I2C
qtouch.read(function(dataI2C){
  console.log(dataI2C);

  // sur le maintien du bouton 1 KEY1
  if(qtouch.binaryMask(dataI2C,KEY1)){  // Pour voir si le bouton 1 est enclenhé
    console.log("Button 1 on");
  }else{
    console.log("Button 1 off");
  }
});


qtouch.onChange(function(newVal, oldVal){
  console.log("The Old Value is : "+ oldVal);
  console.log("The new Value is : "+ newVal);

  if(qtouch.binaryMask(oldVal,KEY0)){
    console.log("le bontton 0 vient d'etre relacher");
  }

  if(qtouch.binaryMask(newVal,KEY1)){
    console.log("le button 1 vient d'etre pressé");
  }
});
