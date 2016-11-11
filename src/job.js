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
    "job": {
        "height": "auto",
        "borderBottom": "1px solid #a2a2c3",
        "display": "flex"
    },
    "stop": {
        "width": 500,
        "borderLeft": "1px solid #666",
        "fontSize": 12,
        "paddingLeft": 10,
        "textAlign": "left"
    },
    "details": {
        "width": 200,
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
        "paddingRight": 10
    }
});