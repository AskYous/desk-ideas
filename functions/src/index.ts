import * as functions from "firebase-functions";
import { BoxConfig } from "../../box.config";
import querystring = require("querystring"); // Querystring stringifier
const boxSDK = BoxConfig.boxSDK; // Box SDK

export const helloWorld = functions.https.onRequest((req, res) => {
    res.send("Hello from desk-ideas");
});
