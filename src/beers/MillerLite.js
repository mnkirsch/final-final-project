import React from 'react';
import { Link } from 'react-router-dom';

class MillerLite extends React.Component {
    render () {
        return(
            <div className="container">
                <div className="post card">
                    <h1 className='text-center blue-text'>Miller Lite</h1>
                            <img class="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/KJIjyd/upload_7aovil-large.png" alt="Miller Lite" />                    <div className="card-content">
                        <h4 className="text-center">American Light Lager</h4>
                        <p className='text-center'>ABV: 4.2%</p>
                        <p className="text-center">IBU: 11</p>
                        <p>Miller Lite is the great tasting, less filling beer that created the American light beer category in 1975. Triple-hops brewed for great pilsner taste, Miller Lite is the only beer to win four gold awards in the World Beer Cup for best American-Style light lager (2006, 2002, 1998 and 1996). It also won the gold medal for best American-style Lager or Light Lager at the 2010 Great American Beer Festival.</p>
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

export default MillerLite;