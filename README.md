# Pokémon GO interface in Ionic 3
This application shows an interface that is similar to the used in Pokémon GO when the camera is activated.
Works on mobile environments, because depends of Cordova.
Don't do anymore yet, only uses the camera and add the buttons.

![Dependencies status](https://david-dm.org/dnchia/Ionic3-PokemonGO.svg)

## How it works
Is heavily based on the use of the Cordova plugin: [cordova-plugin-camera-preview](https://ionicframework.com/docs/native/camera-preview/).
The buttons are done with ion-fabs, ion-icons, and are placed using the directives dedicated to do that, so the structure it's very simple.

## How to use it
To execute the camera-preview plugin, it's necessary to compile the application using the [Ionic CLI](https://ionicframework.com/docs/cli/).

## References
The application was build initially following the tutorial made by Joshua Morony 
([@joshuamorony](https://github.com/joshuamorony)) in [Ionic GO - Create a Pokémon GO Style Interface in Ionic 2](https://www.joshmorony.com/ionic-go-create-a-pokemon-go-style-interface-in-ionic-2/).

Thanks to this tutorial I learned about the existence of the camera-preview plugin, and a basic usage.

## In the future
I intend to improve this example and include much more functionality in the future, like the generation of images, for example.
