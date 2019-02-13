import React from 'react';
import { Link } from 'react-router-dom';

class BudLight extends React.Component {
    render () {
        return(
            <div className="container">
                <div className="post card">
                    <h1 className='text-center'>Bud Light</h1>
                    <img class="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/dimtrs/upload_794WgV-large.png" alt="Bud Light" />
                    <div className="card-content">
                        <h4 className="text-center">American Light Lager</h4>
                        <p className='text-center'>ABV: 4.2%</p>
                        <p className="text-center">IBU: 10</p>
                        <p>Introduced nationally in 1982, Bud Light is brewed using a blend of domestic and imported hops as well as a combination of barley malts and rice. It contains more malt and hops by ratio of ingredients than Budweiser, which gives the brew a distinctively clean and crisp taste.</p>
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

export default BudLight;