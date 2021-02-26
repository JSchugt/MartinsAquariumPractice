import {fish} from "./fish.js";
import {getFish, getMostHolyFish, getUnworthy, getSoldierFish} from "./fishData.js";


export const FishList = () =>{
    const allFishes = getUnworthy();

    const DOMLocation = document.querySelector("#fishList");

    let fishHTMLRep = "";

    for(const onThingFromTheSea of allFishes){
        fishHTMLRep += fish(onThingFromTheSea);
    }

    DOMLocation.innerHTML = fishHTMLRep;
}