import {fish} from "./fish.js";
import {getFish} from "./fishData.js";

export const FishList = () =>{
    const allFishes = getFish();

    const DOMLocation = document.querySelector("#fishList");

    let fishHTMLRep = "";

    for(const onThingFromTheSea of allFishes){
        fishHTMLRep += fish(onThingFromTheSea);
    }

    DOMLocation.innerHTML = fishHTMLRep;
}