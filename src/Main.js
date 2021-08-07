import React from 'react'
import './Main.css'
import Items from './Items'

function main({data}) {    
    console.log(data.length)
    
    
    return (
        <div className="main">
            <div className="main__top"> 
                <div className="main__header">
                    <p>What are you having for Lunch?</p>
                </div>
                <div className="main__content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed diam nonumy eirmod tempor <span>incididunt</span> labore et.
                </div>
            </div>
            <div className="main__bottom">
               {data.slice(0,5).map(({id,title,imageurl})=>(
                   <Items
                   key={id}
                   id={id}
                   title={title}
                   image={imageurl}
                   />
               ))}

            </div>
        </div>
    )
}

export default main 
 