import React from 'react';
import { Link } from 'react-router-dom';
// import Setup from '../Setup/Setup';

class Restaurant extends React.Component{
    
    
    handleChange = event => {

    }
    
    handleSubmit = event => {
        event.preventDefault();

    }

    render() {
        return (
            <div className='center' onClick={this.handleClick}>
                <div className="row">
                    <div className="col-lg-4">
                        <Link to='/brunchmoney'>
                            <img className="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/HnRppe/upload_BEYbtH-medium.png" alt="Brunch Money" />
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to='/saltylady'>
                            <img className="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/uP5qdw/upload_ry5SXI-medium.png" alt="The Salty Lady" />
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to='/dallasblonde'>
                            <img className="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/TXYlAI/upload_3aTha3-medium.png" alt="Dallas Blonde" />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Link to='/budlight'>
                            <img className="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/dimtrs/upload_794WgV-large.png" alt="Bud Light" />
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to='/millerlite'>
                            <img className="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/KJIjyd/upload_7aovil-large.png" alt="Miller Lite" />
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to='/greenbelt'>
                            <img className="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/WzIVC6/upload_DZfDj6-large.png" alt="Greenbelt Farmhouse Wheat" />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Link to='/temptress'>
                            <img className="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/1sOSKe/upload_cvrGmL-large.png" alt="The Temptress" />
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to='/velvethammer'>
                            <img className="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/brewery/jhFynd/upload_WTlVPt-squareLarge.png" alt="Peticolas Brewing Company" />
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to='/bluemoon'>
                            <img className="img-responsive thumbnail" src="https://brewerydb-images.s3.amazonaws.com/beer/dDXOEp/upload_aKoVy9-large.png" alt="Belgian White" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Restaurant;