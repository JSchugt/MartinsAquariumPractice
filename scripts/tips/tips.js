export const getTipsSection = (tips) => {
    return(
    `<div>
        <h3>${tips.action}</h3>
        <ul>
            <li>${tips.frequency}</li>
        </ul>
    </div>`
    );
}