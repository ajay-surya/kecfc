import React from 'react'
import '../css/home-cards.css'

function CardContainer() {
    //console.log("CardContainer rendered");
    return (
        <div className="">
            <img classNme="img-fluid" id="home-img" src="./assets/blackboard.jpg" alt="home-banner"/>
        </div>
    )
}

export default React.memo(CardContainer)
