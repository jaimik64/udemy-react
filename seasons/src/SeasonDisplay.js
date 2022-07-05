import React from "react";
import './SeasonDisplay.css'
import './style/App.css'

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const seasonConfig = {
    Summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    Winter: {
        text: "Burr, It's Cold!",
        iconName: 'snowflake outline'
    }
}

const SeasonDisplay = ({ lat }) => {

    const season = getSeason(lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1 className="text-center">{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
};

export default SeasonDisplay;