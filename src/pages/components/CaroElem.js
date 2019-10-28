import React from 'react';

/**
 * Props:
 *  title: string
 *  author: string
 *  isbn: string
 */
function CaroElem({title, author, imageURL}) {
        return(
            <div className="book">
                <div className='book-image'><img src={imageURL} alt="" /></div>
                <div className='book-title'>{title}</div>
                <div className='book-author'>{author}</div>
            </div>
        )
    }

export default CaroElem;