import React from 'react';
import { Link } from 'react-router-dom';

class Greenbelt extends React.Component {
    render () {
        return(
            <div className="container">
                <div className="post card">
                    <h1 className='text-center green-text'>Greenbelt Farmhouse Wheat</h1>
                    <img class="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/WzIVC6/upload_DZfDj6-large.png" alt="Greenbelt Farmhouse Wheat" />
                    <div className="card-content">
                        <h4 className="text-center">Saison</h4>
                        <p className='text-center'>ABV: 5.2%</p>
                        <p className="text-center">IBU: 20</p>
                        <p>We tip our caps to Texas’ perpetual Summer with this American-Belgian-Weizen hybrid. Named for the Greenbelt Trail in Northeast Denton, crisp citrus flavors shine bright in this light-golden brew; a refreshing match for whatever trail you’re on. <br/> <br/> Made with malted wheat, two row barley, & honey malt. Hopped with Cascade and Santium hops. Spiced with grapefruit peel and coriander. </p>
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

export default Greenbelt;