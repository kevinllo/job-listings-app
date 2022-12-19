"use strict";
import data from "../../data.json" assert {type: "json"};
import Cards from "./Cards.js";
import Filter from "./Filter.js";

window.addEventListener("load", () => {
    Cards([...data]);
    Filter();
    console.log(data);

})
