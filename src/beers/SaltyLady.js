import React from 'react';
import { Link } from 'react-router-dom';

class SaltyLady extends React.Component {
    render () {
        return(
            <div className="container">
                <div className="post card">
                    <h1 className='text-center yellow-text'>The Salty Lady</h1>
                    <img className="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/uP5qdw/upload_ry5SXI-large.png" alt="The Salty Lady" />
                    <div className="card-content">
                        <h4 className='text-center'>Leipzig Gose</h4>
                        <p className='text-center'>ABV: 5%</p>
                        <p className="text-center">IBU: 4</p>
                        <p>The Salty Lady is our interpretation of a Gose – a rather obscure, tart, salty German style beer. Our version is soured in the kettle with a lactic culture. The tartness is tempered by salt additions from around the world and finished with coriander for a citrus and earthy touch. We ferment with our house saison yeast to put our own little spin on the style. Its flavor is reminiscent of a sports drink at the end of a 110 degree day.</p>
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

export default SaltyLady;