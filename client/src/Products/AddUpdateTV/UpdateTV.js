import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class UpdateTV extends Component{
    constructor(){
        super()

        this.state={
            screeSize: sessionStorage.getItem('screeSize'),
            os:sessionStorage.getItem('os'),
            quality:sessionStorage.getItem('os'),
            frameRate:sessionStorage.getItem('frameRate'),
            price:sessionStorage.getItem('price'),
        }
    }

    handleChangescreeSize = (event) => {
        this.setState({screeSize:event.target.value})
    }
    handleChangeos = (event) => {
        this.setState({os:event.target.value})
    }
    handleChangequality = (event) => {
        this.setState({quality:event.target.value})
    }
    handleChangeframeRate = (event) => {
        this.setState({frameRate:event.target.value})
    }
    handleChangeprice = (event) => {
        this.setState({price:event.target.value})
    }

    handleSubmit =() => {
        console.log(this.state)
        fetch(`http://localhost:9700/updateProducts/${this.props.match.params.id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/categorytv'))
    }

    render(){
        return(

            <div className="container">
           
                <div className="panel panel-primary">
                    <div className="panel-heading">
                    <h1> Update TV's Product </h1>
                    </div>
                    <div className="panel-body">
                     <div className="form-group">
                            <label className="control-label">Screen Size:</label>
                           
                            
                            
                <select onChange={this.handleChangescreeSize} class="form-control" id="exampleFormControlSelect1">
                <option 
                value="40inch">40inch</option>
                <option value="43inch">43inch</option>
                <option value="50inch">50inch</option> 
                <option value="55inch">55inch</option>
                </select>

            
                </div>
                        <div className="form-group">
                        <label className="control-label">OS:</label>
                           <select onChange={this.handleChangeos} class="form-control" id="exampleFormControlSelect1">
                            <option value="Android">Android</option>
                            <option value="Tizen">Tizen</option>
                            <option value="WebOS">WebOS</option>
                            <option value="tvOS">tvOS</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label className="control-label">Quality:</label>
                            <select onChange={this.handleChangequality} class="form-control" id="exampleFormControlSelect1">
                            <option value="4K">4K</option>
							<option value="8K">8K</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Frame Rate</label>
                            <select onChange={this.handleChangeframeRate} class="form-control" id="exampleFormControlSelect1">
                            <option value="1024ghz">1024ghz</option>
                            <option value="720ghz">720ghz</option>
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
                        <Link to="/categorytv" className="btn btn-success">Go back</Link> &nbsp;
                        
                    </div>
                </div>
               
            </div>
        )
    }
}


export default UpdateTV
