import React from 'react';
import { Link } from 'react-router-dom';

class Temptress extends React.Component {
    render () {
        return(
            <div className="container">
                <div className="post card">
                    <h1 className='text-center'>The Temptress</h1>
                    <img class="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/1sOSKe/upload_cvrGmL-large.png" alt="The Temptress" />
                    <div className="card-content">
                        <h4 className="text-center">Sweet Stout</h4>
                        <p className='text-center'>ABV: 9.1%</p>
                        <p className="text-center">IBU: 56</p>
                        <p>Va-va-voom! Our Temptress is seduction in a glass. Curvy in all the right places, this Imperial Milk Stout pours with a thick, milk chocolate head, sweet caramel notes and a warm complexity that grows deeper with every sip. Take your time with her and she’ll reward you.</p>
                    </div>
                </div>
                <div>
                <Link to="/restaurant">
                    <button className='waves-effect waves-light btn' type="button">
                        Back to Beers
                    </button>
                </Link>
                </div>
            </div>
        )
    }
}

export default Temptress;