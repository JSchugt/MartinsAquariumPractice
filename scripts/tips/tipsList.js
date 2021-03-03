import {getTipsSection} from "./tips.js";
import {getTips} from "./tipsData.js";


export const TipsList = () => {

    const allTips = getTips();

    const DOMLocation = document.querySelector("#TipAside");

    let TipsHTMLRep = "";

    for(const tip of allTips){
        TipsHTMLRep += getTipsSection(tip);
    }

    DOMLocation.innerHTML= TipsHTMLRep;

}