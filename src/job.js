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
        "borderRadius": 150,
        "backgroundColor": "#e0e0eb"
    },
    "Job-picture": {
        "width": 130
    },
    "job": {
        "height": 150,
        "border": "1px solid #a2a2c3",
        "display": "flex"
    },
    "stop": {
        "width": 350,
        "fontSize": 14,
        "marginTop": "auto",
        "marginBottom": "auto",
        "marginLeft": 20,
        "textAlign": "left"
    },
    "details": {
        "width": 300,
        "fontSize": 16,
        "fontWeight": "bold",
        "marginTop": "auto",
        "marginBottom": "auto",
        "marginLeft": 10,
        "textAlign": "left"
    }
});