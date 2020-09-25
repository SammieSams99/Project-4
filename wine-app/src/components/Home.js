import React from 'react'

const Home = (props) => {
    const wines = props.wines.map((wine) => {
        return (<p>{wine.name}</p>)
    })
    return (
    <div>
        <h1>Daily Wine</h1>
        <p>We Make Wine Fun</p>
        {wines}
    </div>
    )
}

export default Home; 