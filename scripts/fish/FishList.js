import {fish} from "./fish.js";
import {getFish, getMostHolyFish, getUnworthy, getSoldierFish} from "./fishData.js";


export const FishList = () =>{
    const holyFish = getMostHolyFish();

    const DOMLocation = document.querySelector("#fishList");

    let fishHTMLRep = ``;
    for(const onThingFromTheSea of holyFish){
        fishHTMLRep += fish(onThingFromTheSea);
    }
    
    const soldier = getSoldierFish();
    for(const onThingFromTheSea of soldier){
        fishHTMLRep += fish(onThingFromTheSea);
    }
    

    const unworthy = getUnworthy();
    for(const onThingFromTheSea of unworthy){
        fishHTMLRep += fish(onThingFromTheSea);
    }

    DOMLocation.innerHTML = fishHTMLRep;
}