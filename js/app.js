"use strict";
import data from "../../data.json" assert {type: "json"};
import Cards from "./Cards.js";

window.addEventListener("load", () => {
    Cards([...data]);
    console.log(data);
})

