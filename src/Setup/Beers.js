import React from 'react';

const Beers = ({beers, deleteBeer}) => {

    const beerList = beers.length ? (
        beers.map(beer => {
            return (
                <div className="collection-item" key={beer.id}>
                    <span onClick={() => {deleteBeer(beer.id)}} >{beer.name}</span>
                </div>
            )
        })
    ) : (
        <p className="center">Use the form to add beers</p>
    )
    return (
        <div className="beers collection">
            { beerList }
        </div>
    )
}

export default Beers;