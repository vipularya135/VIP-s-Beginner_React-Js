import React from 'react'

const Hello = () =>{
    // return(
    //     <div>
    //     <h1>hello vip2</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
         null,
         React.createElement('h1', null, 'hello vip3'))
}

export default Hello