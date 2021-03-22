import axios from "axios";
// import {warn} from "./app.js";
// import {log} from "./utils/helper.js";

const {warn, log} = console;

warn("1. This is warning...");
log("2. This is simple log...");

log(await Promise.resolve("3. I am a promise value."));

const res = await axios.get("https://loveapi.ml/numbersapi/1/trivia");

log("3.", res.data);
