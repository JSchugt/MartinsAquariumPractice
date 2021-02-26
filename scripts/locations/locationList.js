import {getLocations} from "./locationData.js";
import {makeLocationSections} from "./locations.js";


export const LocationList = () => {
    const allLocations = getLocations();
    const DOMLocation = document.querySelector("#locationList");

    let locationHTMLRep = "";

    for(const someWhereInTheWorld of allLocations){
        locationHTMLRep += makeLocationSections(someWhereInTheWorld);
    }

    DOMLocation.innerHTML = locationHTMLRep;
}

