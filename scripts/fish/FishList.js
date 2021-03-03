import {fish} from "./fish.js";
import {getFish, getMostHolyFish, getUnworthy, getSoldierFish} from "./fishData.js";


export const FishList = () =>{
    const holyFish = getMostHolyFish();

    const DOMLocation = document.querySelector("#fishList");

    let fishHTMLRep = "<section class=\"fishSection\"><h2 class=\"fishHead\">Worthy Fish</h2><div class=\"theFish\">";
    for(const onThingFromTheSea of holyFish){
        fishHTMLRep += fish(onThingFromTheSea);
    }
    fishHTMLRep += "</div></section><section class=\"fishSection\"><h2 class=\"fishHead\" >Soldier Fish</h2><div class=\"theFish\">";
    const soldier = getSoldierFish();
    for(const onThingFromTheSea of soldier){
        fishHTMLRep += fish(onThingFromTheSea);
    }
    
    fishHTMLRep += "</div></section><section class=\"fishSection>\"><h2 class=\"fishHead\">Unworthy Fish</h2><div class=\"theFish\">";

    const unworthy = getUnworthy();
    for(const onThingFromTheSea of unworthy){
        fishHTMLRep += fish(onThingFromTheSea);
    }
    fishHTMLRep += "</div></section>";

    DOMLocation.innerHTML = fishHTMLRep;
}