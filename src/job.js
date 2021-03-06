import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "Job-picture-container": {
        "position": "relative",
        "left": 10,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "height": 100,
        "width": 100,
        "borderRadius": 150,
        "backgroundColor": "#e0e0eb"
    },
    "Job-picture": {
        "width": 100
    },
    "details-container": {
        "width": "20%"
    },
    "job": {
        "height": "auto",
        "borderBottom": "1px solid #a2a2c3",
        "display": "flex"
    },
    "stop": {
        "display": "flex",
        "width": "40%",
        "borderLeft": "1px solid #666",
        "fontSize": 12,
        "paddingLeft": 10,
        "textAlign": "left"
    },
    "details": {
        "fontSize": 18,
        "fontWeight": "bold",
        "marginTop": "auto",
        "marginBottom": "auto",
        "marginLeft": 10,
        "textAlign": "left"
    },
    "stop span": {
        "lineHeight": 25,
        "fontSize": 14,
        "paddingRight": 5
    },
    "stop-details": {
        "width": "55%"
    },
    "stop-details div": {
        "fontSize": 16
    },
    "stop-pics": {
        "width": "45%",
        "height": "100%"
    },
    "stop-pics div": {
        "height": "50%"
    },
    "pic-header k img": {
        "height": 50,
        "width": 50
    },
    "pic-header>img": {
        "height": 50,
        "width": 50,
        "cursor": "pointer"
    },
    "pic-header span": {
        "display": "block"
    },
    "upload-container": {
        "opacity": 0
    }
});