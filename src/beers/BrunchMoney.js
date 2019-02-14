import React from 'react';
import { Link } from 'react-router-dom';

class BrunchMoney extends React.Component {
    render () {
        return(
            <div className="container">
                <div className="post card">
                    <h1 className='text-center red-text'>Brunch Money</h1>
                    <img className="center img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/HnRppe/upload_BEYbtH-large.png" alt="Brunch Money" />
                    <div className="card-content">
                        <h4 className="text-center">Golden Stout</h4>
                        <p className='text-center'>ABV: 10%</p>
                        <p className="text-center">IBU: 70</p>
                        <p>Rise and shine, over-sleepers. Breakfast has come and gone and it’s time to get your brunch on with this stout-inspired golden ale. This hearty brew, with sweet flavors of coffee, vanilla, and chocolate, will awaken your tastebuds and make your late start a great start. </p>
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

export default BrunchMoney;