import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class UpdateTV extends Component{
    constructor(){
        super()

        this.state={
            name: sessionStorage.getItem('name'),
            os:sessionStorage.getItem('os'),
            memory:sessionStorage.getItem('memory'),
            price:sessionStorage.getItem('price'),
        }
    }

    handleChangename = (event) => {
        this.setState({name:event.target.value})
    }
    handleChangeos = (event) => {
        this.setState({os:event.target.value})
    }
    handleChangememory = (event) => {
        this.setState({memory:event.target.value})
    }
    handleChangeprice = (event) => {
        this.setState({price:event.target.value})
    }

    handleSubmit =() => {
        console.log(this.state)
        fetch(`http://localhost:9700/updateWatch/${this.props.match.params.id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/categorywatches'))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                    <h1> Update Watches's Product </h1>
                    </div>
                    <div className="panel-body">
                     <div className="form-group">
                            <label className="control-label">Name:</label>
                                     
                <select onChange={this.handleChangename} class="form-control" id="exampleFormControlSelect1">
                <option 
                value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Mobvoi_Tic_Watch_Pro">Mobvoi_Tic_Watch_Pro</option> 
                <option value="Fossil_Gen_5_Smartwatch">Fossil_Gen_5_Smartwatch</option>
                </select>

                </div>
                        <div className="form-group">
                        <label className="control-label">OS:</label>
                           <select onChange={this.handleChangeos} class="form-control" id="exampleFormControlSelect1">
                            <option value="Pulsar">Pulsar</option>
                            <option value="Palm">Palm</option>
                            <option value="Seiko">Seiko</option>
                            <option value="Fossil">Fossil</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label className="control-label">Memory:</label>
                            <select onChange={this.handleChangememory} class="form-control" id="exampleFormControlSelect1">
                            <option value="4K">4GB</option>
							<option value="8K">32GB</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Price</label>
                            <select onChange={this.handleChangeprice} class="form-control" id="exampleFormControlSelect1">
                                <option value="50,000">50,000</option>
                                <option value="55,500">55,500</option>
                                <option value="85,000">85,000</option>
                                <option value="65,000">65,000</option>
                            </select>
                        </div>
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Update Product</button>
                        <Link to="/categorywatches" className="btn btn-success">Go back</Link> &nbsp;
                        
                    </div>
                </div>
               
            </div>
        )
    }
}


export default UpdateTV
