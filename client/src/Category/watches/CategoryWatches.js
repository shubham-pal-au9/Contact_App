import React,{Component} from 'react';
import DisplayCategory from './DisplayCategoryWatches';
import './categorywatches.css';

const FetchUrl ="http://localhost:9700/allWatches"

class CategoryWatches extends Component{
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

export default CategoryWatches;