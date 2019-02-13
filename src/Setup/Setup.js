import React, { Component } from 'react';
import Beers from './Beers';
import AddBeer from './AddBeer'
import { Link } from 'react-router-dom';



class Setup extends Component {
    state = {
        beers: [
            {id: 1, name: 'Brunch Money', abv: '10%', ibu: '70', description: 'Rise and shine, over-sleepers. Breakfast has come and gone and it’s time to get your brunch on with this stout-inspired golden ale. This hearty brew, with sweet flavors of coffee, vanilla, and chocolate, will awaken your tastebuds and make your late start a great start.'},
            {id: 2, name: 'The Salty Lady', abv: '5.2%', ibu: '10', description: 'Introduced nationally in 1982, Bud Light is brewed using a blend of domestic and imported hops as well as a combination of barley malts and rice. It contains more malt and hops by ratio of ingredients than Budweiser, which gives the brew a distinctively clean and crisp taste.'},
            {id: 3, name: 'Dallas Blonde', abv: '5.2%', ibu: '10', description: 'Introduced nationally in 1982, Bud Light is brewed using a blend of domestic and imported hops as well as a combination of barley malts and rice. It contains more malt and hops by ratio of ingredients than Budweiser, which gives the brew a distinctively clean and crisp taste.'},
            {id: 4, name: 'Bud Light', abv: '5.2%', ibu: '10', description: 'Introduced nationally in 1982, Bud Light is brewed using a blend of domestic and imported hops as well as a combination of barley malts and rice. It contains more malt and hops by ratio of ingredients than Budweiser, which gives the brew a distinctively clean and crisp taste.'},
            {id: 5, name: 'Miller Lite', abv: '5.2%', ibu: '10', description: 'Introduced nationally in 1982, Bud Light is brewed using a blend of domestic and imported hops as well as a combination of barley malts and rice. It contains more malt and hops by ratio of ingredients than Budweiser, which gives the brew a distinctively clean and crisp taste.'},
            {id: 6, name: 'Greenbelt Farmhouse Wheat', abv: '5.2%', ibu: '10', description: 'Introduced nationally in 1982, Bud Light is brewed using a blend of domestic and imported hops as well as a combination of barley malts and rice. It contains more malt and hops by ratio of ingredients than Budweiser, which gives the brew a distinctively clean and crisp taste.'},
            {id: 7, name: 'The Temptress', abv: '5.2%', ibu: '10', description: 'Introduced nationally in 1982, Bud Light is brewed using a blend of domestic and imported hops as well as a combination of barley malts and rice. It contains more malt and hops by ratio of ingredients than Budweiser, which gives the brew a distinctively clean and crisp taste.'},
            {id: 8, name: 'Velvet Hammer', abv: '5.2%', ibu: '10', description: 'Introduced nationally in 1982, Bud Light is brewed using a blend of domestic and imported hops as well as a combination of barley malts and rice. It contains more malt and hops by ratio of ingredients than Budweiser, which gives the brew a distinctively clean and crisp taste.'},
            {id: 9, name: 'Blue Moon Belgian White', abv: '5.2%', ibu: '10', description: 'Introduced nationally in 1982, Bud Light is brewed using a blend of domestic and imported hops as well as a combination of barley malts and rice. It contains more malt and hops by ratio of ingredients than Budweiser, which gives the brew a distinctively clean and crisp taste.'}
        ],
        background: '#fff'
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value.name,
            abv: e.target.value.abv,
            ibu: e.target.value.ibu,
            description: e.target.value.description,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBeer(this.state);
        this.setState({
            name: '',
            abv: '',
            ibu: '',
            description: ''
        })
    }
    
    deleteBeer = (id) => {
        const beers = this.state.beers.filter(beer => {
            return beer.id !== id
        });
        this.setState({
            beers
        })
    }

    addBeer = (beer) => {
        beer.id = Math.random()
        let beers = [...this.state.beers, beer]
        this.setState({
            beers
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className='text-center'>
                    <h1 className='blue-text'>Please enter the beer's information:</h1>
                    
                    <br/><br/><br/>
                    <AddBeer addBeer={this.addBeer}/>
                </div>
                <div className='post card'>
                <Beers beers={this.state.beers} deleteBeer={this.deleteBeer}/>
                </div>
                <div className='center'>
                <Link to="/restaurant">
                    <button className='waves-effect waves-light btn' type="button">
                        Restaurant
                    </button>
                </Link>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Setup;