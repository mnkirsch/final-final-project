import React, { Component } from 'react'


class AddBeer extends Component {
    
    state = {
        name: '',
        abv: '',
        ibu: '',
        description: ''
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value.name,
            abv: e.target.value.abv,
            ibu: e.target.value.ibu,
            description: e.target.value.description
        })
    }

    handleSubmit= (e) => {
        e.preventDefault();
        this.props.addBeer(this.state);
        this.setState({
            name: '',
            abv: '',
            ibu: '',
            description: ''
        })
        console.log(this.state.name);
    }

    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Beer Name:</label>
                            <input type="text" onChange={this.handleChange} name='name' value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <label>ABV:</label>
                            <input type="text" onChange={this.handleChange} name='abv' value={this.state.abv} />
                        </div>
                        <div className="form-group">
                            <label>IBU:</label>
                            <input type="text" onChange={this.handleChange} name='ibu' value={this.state.ibu} />
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <input type="text" onChange={this.handleChange} name='description' value={this.state.description} />
                        </div>
                        <button className='waves-effect waves-light btn' onClick={this.handleSubmit}>Submit</button>
                    </form>
            </div>
        )
    }
}

export default AddBeer;