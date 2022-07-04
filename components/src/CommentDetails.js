import React from "react";

const CommentDetails = ({ author, date, description, avatar }) => {

    return (
        <div className="comment">
            <a className="avatar">
                <img src={avatar} />
            </a>
            <div className="content">
                <a className="author">{author}</a>
                <div className="metadata">
                    <span className="date">{date}</span>
                </div>
                <div className="text">
                    {description}
                </div>
                <div className="actions">
                    <a className="reply">Reply</a>
                </div>
            </div>
        </div>
    )
}

export default CommentDetails;