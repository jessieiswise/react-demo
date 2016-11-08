import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "fontFamily": "'Montserrat', sans-serif"
    },
    "App": {
        "textAlign": "center"
    },
    "App-logo": {
        "animation": "App-logo-spin infinite 20s linear",
        "height": 40,
        "right": 10,
        "position": "absolute"
    },
    "App-header": {
        "backgroundColor": "#d84314",
        "height": 40,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "color": "white"
    },
    "menu-render": {
        "position": "fixed",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "zIndex": 1
    },
    "modal-mask": {
        "zIndex": 2,
        "position": "fixed",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "backgroundColor": "#000",
        "opacity": 0.4
    },
    "menu-container": {
        "width": 350,
        "left": 0,
        "top": 0,
        "bottom": 0,
        "position": "fixed",
        "backgroundColor": "#fff",
        "zIndex": 3
    },
    "menu-header": {
        "width": "100%",
        "backgroundColor": "#d84314",
        "opacity": 0.85,
        "textAlign": "center",
        "top": 0,
        "paddingTop": 10,
        "height": 40,
        "color": "#fff",
        "fontSize": 24
    },
    "App-menu": {
        "cursor": "pointer",
        "background": "url(https://convoy.com/wp-content/themes/convoy/images/btn-menu.png) no-repeat center center",
        "width": 40,
        "height": 28,
        "left": 0,
        "position": "absolute",
        "paddingLeft": 10,
        "paddingTop": 10
    },
    "App-intro": {
        "fontSize": "large"
    },
    "example-enter": {
        "maxHeight": 0,
        "transition": "all 1.05s linear",
        "opacity": 0
    },
    "example-enterexample-enter-active": {
        "maxHeight": 1000,
        "opacity": 1
    },
    "example-leave": {
        "opacity": 0,
        "transition": "opacity .5s ease-in"
    }
});