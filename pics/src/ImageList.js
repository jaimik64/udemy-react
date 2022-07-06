import React from "react";

const ImageList = ({ images }) => {
    // console.log(images)
    return (
        <div>
            {
                images.map(i => {
                    return (
                        <img src={i.urls.regular} key={i.id} alt={i.description} />
                    )
                })
            }
        </div>
    )
}

export default ImageList;