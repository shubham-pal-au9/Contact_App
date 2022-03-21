import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class UpdateMobile extends Component{
    constructor(){
        super()

        this.state={
            name: sessionStorage.getItem('name'),
            os:sessionStorage.getItem('os'),
            ram:sessionStorage.getItem('ram'),
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
    handleChangeram = (event) => {
        this.setState({ram:event.target.value})
    }
    handleChangememory = (event) => {
        this.setState({memory:event.target.value})
    }
    handleChangeprice = (event) => {
        this.setState({price:event.target.value})
    }

    handleSubmit =() => {
        console.log(this.state)
        fetch(`http://localhost:9700/updateMobile/${this.props.match.params.id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/categorymobile'))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                    <h1> Update Mobile's Product </h1>
                    </div>
                    <div className="panel-body">
                     <div className="form-group">
                            <label className="control-label">name:</label>
                           
                            
                            
                <select onChange={this.handleChangename} class="form-control" id="exampleFormControlSelect1">
                <option 
                value="Iphone12Pro">Iphone12Pro</option>
                <option value="Samsung">Samsung</option>
                <option value="OPPO">OPPO</option> 
                <option value="MI">MI</option>
                </select>

            
                </div>
                        <div className="form-group">
                        <label className="control-label">OS:</label>
                           <select onChange={this.handleChangeos} class="form-control" id="exampleFormControlSelect1">
                            <option value="Android">ios</option>
                            <option value="Tizen">Android</option>
                            <option value="ColorOS">ColorOS</option>
                            <option value="MIUI8">MIUI8</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label className="control-label">RAM:</label>
                            <select onChange={this.handleChangeram} class="form-control" id="exampleFormControlSelect1">
                            <option value="4K">4GB</option>
							<option value="8K">8GB</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Memory</label>
                            <select onChange={this.handleChangememory} class="form-control" id="exampleFormControlSelect1">
                            <option value="126GB">126GB</option>
                            <option value="256GB">256GB</option>
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
                        <Link to="/categorymobile" className="btn btn-success">Go back</Link> &nbsp;
                        
                    </div>
                </div>
               
            </div>
        )
    }
}


export default UpdateMobile
