import * as L from "leaflet";

//Firebase settings

export const firebaseConfig = {
    apiKey: "AIzaSyDp28ivyW_XA7A9hHcA5lK-WLGdZQdzfR4",
    authDomain: "shenandoahtest.firebaseapp.com",
    projectId: "shenandoahtest",
    storageBucket: "shenandoahtest.appspot.com",
    messagingSenderId: "384244814676",
    appId: "1:384244814676:web:6483a2c4527cafe460aec1",
    measurementId: "G-Q5TQ1W1F10"
  };

//icons

export const iconTypes = ["climate", "accessibility", "vibrancy", "community", "engagement", "helloWorld"]

//mapbox
export const mapboxURL =
    "https://api.mapbox.com/styles/v1/landaudesign/cla7aexpo000x14qv2ikoqduz.html?title=view&access_token=pk.eyJ1IjoibGFuZGF1ZGVzaWduIiwiYSI6ImNrZ3F4dDIyeTBsMXIyenIzd2EwdnBsZTQifQ.MOBff0ku-Z960ubZPr3b6g&zoomwheel=true&fresh=true#9.36/38.7759/-78.3331";

//icons that are loaded on each user end on first load
export const icons = {
    climate: L.Icon.extend({
        options: {
            iconUrl:
                "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg",
            iconAnchor: new L.Point(38, 18),
            iconSize: new L.Point(76, 76),
        },
    }),

    accessibility: L.Icon.extend({
        options: {
            iconUrl: "./icons/equity.png",
            iconAnchor: new L.Point(38, 18),
            iconSize: new L.Point(75, 75),
        },
    }),
    vibrancy: L.Icon.extend({
        options: {
            iconUrl: "./icons/vibrancy.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
    community: L.Icon.extend({
        options: {
            iconUrl: "./icons/community.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
    engagement: L.Icon.extend({
        options: {
            iconUrl: "./icons/transparency.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
    helloWorld: L.Icon.extend({
        options: {
            iconUrl:
                "https://www.freecodecamp.org/news/content/images/2022/06/helloWorld.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
};

//icons 
//toolbar icons are found in the globals.css