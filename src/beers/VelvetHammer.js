import React from 'react';
import { Link } from 'react-router-dom';

class VelvetHammer extends React.Component {
    render () {
        return(
            <div className="container">
                <div className="post card">
                    <h1 className='text-center'>Velvet Hammer</h1>
                    <img class="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/brewery/jhFynd/upload_WTlVPt-squareLarge.png" alt="Peticolas Brewing Company" />
                    <div className="card-content">
                        <h4 className="text-center">Imperial Red</h4>
                        <p className='text-center'>ABV: 9%</p>
                        <p className="text-center">IBU: 85</p>
                        <p>A tribute to our favorite Brewmaster, Greg Matthews, the Velvet Hammer appears as a dark, ruby reddish-brown ale beneath a sheath of protective off-white foam. It is malt-forward with elements of caramel and the sweetness of light brown sugar, balanced nicely by a combination of floral hops and a noticeable alcohol bite. It's a sturdy brew with a smooth character which belies both an inner strength and a slightly full body, along with a moderate bitterness to round out the taste.</p>
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

export default VelvetHammer;