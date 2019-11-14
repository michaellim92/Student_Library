import React from 'react';
import CaroElem from './CaroElem.js';


function Carousel({items}) {
    return (
        <div className="Carousel">
            {/*carousel elements */}
            {items.map(item => {
                return (
                    <CaroElem 
                    id={item.id}
                    title={item.title}
                    author={item.author}
                    imageURL={item.imageURL}
                    key={item.id}/>
                );
            })}

        
        </div>
    )
}

export default Carousel;