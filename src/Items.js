import React from 'react'
import './Items.css'

function Items({id,title,image}) {
    console.log(image)
    return (
        <div className="items">
            <img className="items__image" src={image} alt="" />
            <p className="items__title">{title}</p>
           
        </div>
    )
}

export default Items
