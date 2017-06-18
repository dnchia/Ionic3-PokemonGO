import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {CameraPreview, CameraPreviewOptions} from "@ionic-native/camera-preview";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, cameraPreview: CameraPreview) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

      let tapEnabled: boolean = false;
      let dragEnabled: boolean = false;
      let toBack: boolean = true;
      let alpha: number = 1;

      const cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: platform.width(),
        height: platform.height(),
        camera: 'rear',
        tapPhoto: tapEnabled,
        previewDrag: dragEnabled,
        toBack: toBack,
        alpha: alpha
      };

      cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}

