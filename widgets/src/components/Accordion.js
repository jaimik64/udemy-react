import React, { useState } from "react";

const Accordion = ({ items }) => {

    const [active, setActive] = useState(null);

    const onTitleClick = (index) => {
        setActive(index);
    }

    const renderedItems = items.map((item, index) => {
        const activeIndex = index === active ? "active" : "";

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${activeIndex}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${activeIndex}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )

}

export default Accordion;