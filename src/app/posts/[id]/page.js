import React from 'react'

export default function postdetails(props) {
    console.log(props);

    return (
        <div>post details by id <h1 className='text-center'>{props.params.id}</h1></div>
    )
}
