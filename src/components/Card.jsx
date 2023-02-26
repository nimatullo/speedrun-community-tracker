import React from "react";
const Card = (props) => {
    return(
        <div class="card-container">
            <div className="Card">
                <div class="title-bar">
                    {props.title}
                </div>
                <div class="thumbnail">
                    <a href={props.link}>
                        <img src={props.thumbnail} class="card-img"/>
                    </a>
                </div>
                <div class="description">
                    <p align="left">
                        <b>Game:</b> {props.game} <br />
                        <b>Submitted by:</b> {props.author} <br />
                        <b>Time:</b> {props.time} <br />
                        <b>Category:</b> {props.category} <br />
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Card;