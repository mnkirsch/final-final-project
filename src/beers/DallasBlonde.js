import React from 'react';
import { Link } from 'react-router-dom';

class DallasBlonde extends React.Component {
    render () {
        return(
            <div className="container">
                <div className="post card">
                    <h1 className='text-center'>Dallas Blonde</h1>
                    <img class="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/TXYlAI/upload_3aTha3-large.png" alt="Dallas Blonde" />
                    <div className="card-content">
                        <h4 className="text-center"></h4>
                        <p className='text-center'>ABV: 5.2%</p>
                        <p className="text-center">IBU: 23</p>
                        <p>What does it mean to be a Dallas Blonde? Sounds like a loaded question. So load it up we did, with citrusy and floral American hops, Pale, Vienna and Wheat malts. Yielding a delicately balanced, and shimmering golden ale. To us, it just goes down easy.</p>
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

export default DallasBlonde;