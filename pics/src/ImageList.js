import React from "react";
import './ImageList.css'
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
    return (
        <div className="image-list">
            {
                images.map(i => {
                    return (
                        <ImageCard key={i.id} image={i} />
                    )
                })
            }
        </div>
    )
}

export default ImageList;