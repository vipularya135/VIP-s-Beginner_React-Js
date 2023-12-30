import React from 'react'

// function Greet() {
//     return <h1>hello vip</h1>
// }

const Greet = props => {
    console.log(props)
return (
    <div>
<h1>hello {props.name}, how are you {props.hname}</h1>
{props.children}
</div>
)
}

export  default Greet