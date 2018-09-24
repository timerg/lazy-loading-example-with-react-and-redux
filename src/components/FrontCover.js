import React from 'react'


// Object -> div page
// Hover: become a link

const FrontCover = (userObject) => (
    <div>
        <h4> userObject.name </h4>
        <p>userObject.maxim</p>
        <img src={userObject.img}/>
    </div>
)


export default FrontCover