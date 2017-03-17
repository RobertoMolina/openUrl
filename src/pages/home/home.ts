import {Platform, Page} from 'ionic-framework/ionic';
 
 
@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
 
    static get parameters() {
        return [[Platform]];
    }
 
    constructor(platform) {
        this.platform = platform;
    }
 
    launch(url) {
        this.platform.ready().then(() => {
            cordova.InAppBrowser.open(url, "_system", "location=true");
        });
    }
}