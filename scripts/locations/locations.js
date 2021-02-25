export const makeLocationSections = (locObj) => {
    return (
        `<article class="fish-location">
        <h3 class="fish-location>${locObj.area}</h3>
        <ul>
        <li class="location-weather">${locObj.weather}</li>
        </ul>
        </article>`
    );
};