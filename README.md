Qtouch : AT42QT1070 Touch Sensor IC
======
## In English

### description: 
nodejs QTouch library for component AT42QT1070 using the I2C bus on a raspberry pi B. This component is a capacitive touch sensor that is used as a button. This component connects to the I2C bus raspberry pi series b.This library provides interfaces that can read the I2C bus component, to detect different pressing the sensor (see examples). 
To run the component must: 
- Enable the I2C bus 
- Install the i2c-tools program 
- Download this librairy with npm 

activate the I2C bus: 
* http://skpang.co.uk/blog/archives/575 
* http://innovelectronique.fr/2013/03/02/utilisation-du-bus-i2c-sur-raspberrypi/ 
 
install i2c-tools tool: 
~~~~ sh 
sudo apt-get install i2c-tool
~~~~

Download this librairy via npm and nodejs link to your project 
~~~~ sh
npm install qtouch
~~~~ 

and in your project: 
~~~~ js
var qtouch = require("qtouch");
~~~~ 


## En Francais

###description:
librairie nodejs pour le composant qtouch AT42QT1070 utilisant le bus I2C sur un raspberry pi B. Ce composant est un capteur tactile capacitif qui s'utilise comme un bouton. Ce composant se branche sur le bus I2C du raspberry pi serie B.Cette librairie met à disposition des interfaces qui permet de lire le bus I2C du composant, de detecter differents appui sur le capteur (voir les exemples).
Pour faire marcher le composant il faut :
- activer le bus I2C
- installer le programme i2c-tools
- telecharger cette librairy via npm et la lier à votre projet nodejs

activer le bus I2C :
* http://skpang.co.uk/blog/archives/575 
* http://innovelectronique.fr/2013/03/02/utilisation-du-bus-i2c-sur-raspberrypi/ 

installer le programme i2c-tools :
~~~~ sh 
sudo apt-get install i2c-tool
~~~~

telecharger cette librairy via npm et la lier à votre projet nodejs
~~~~ sh
npm install qtouch
~~~~ 

et dans votre projet :
~~~~js
var qtouch = require("qtouch");
~~~~ 


# Usage

example on/off on KEY0 :

~~~~js
var qtouch = require("qtouch");

var KEY0 = 0;
var on = true;

qtouch.onPressUp(KEY0 , function(){
     if(on){
		console.log(" Light On ")
		on = false;
 	}else{
 		console.log(" Light Off ");
 		on = true;
 	}
});
~~~~ 

you can have more example on example.js file

```js
var qtouch = require("qtouch");

var KEY0=0 , KEY1=1;

//lecture en continu des valeurs sur bus I2C
qtouch.read(function(dataI2C){
   console.log(dataI2C);

  // sur le maintien du bouton 1 (KEY1)
  if(qtouch.binaryMask(dataI2C,1)){  // binary mask 
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
``` 

