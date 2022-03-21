import React,{Component} from 'react';
import DisplayCategory from './DisplayCategoryLaptop';
import './categorylaptop.css';

const FetchUrl ="http://localhost:9700/allLaptop"

class CategoryLaptop extends Component{
    constructor(){
        super()

        this.state={
            product:''
        }
    }
    render(){
        console.log("In Products>>>",this.props)
        return(
            <div>
                <DisplayCategory productdata={this.state.product}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(FetchUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({product:data})
        })
    }
}

export default CategoryLaptop;