import React from 'react';
import { Link } from 'react-router-dom';

class BlueMoon extends React.Component {
    render () {
        return(
            <div className="container">
                <div className="post card">
                    <h1 className='text-center blue-text'>Belgian White</h1>
                    <img class="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/dDXOEp/upload_aKoVy9-large.png" alt="Belgian White" />
                    <div className="card-content">
                        <h4 className="text-center">Witbier</h4>
                        <p className='text-center'>ABV: 5.4%</p>
                        <p className="text-center">IBU: 9</p>
                        <p>Blue Moon® Belgian White was our first year-round release back in 1995. It started with our brewmaster, Keith Villa, wanting to craft a beer inspired by the flavorful Belgian Wits he enjoyed while studying brewing in Belgium. He brewed his interpretation using Valencia orange peel versus the traditional tart Curaçao orange peel, for a subtle sweetness. Then he added oats and wheat to create a smooth, creamy finish that’s inviting to the palate. As a final touch, he garnished the beer with an orange slice to heighten the citrus aroma and taste. Its natural unfiltered appearance adds to the depth of flavors in Belgian White.</p>
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

export default BlueMoon;