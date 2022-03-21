import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../Home/Home';
import CategoryTV from '../Category/tv/CategoryTV';
import Mobile from '../Category/mobile/CategoryMobile';
import Laptop from '../Category/laptop/CategoryLaptop';
import Watches from '../Category/watches/CategoryWatches';

import AddTV from '../Products/AddUpdateTV/AddTV';
import UpdateTV from '../Products/AddUpdateTV/UpdateTV';
import AddMobile from '../Products/AddUpdateMobile/AddMobile';
import UpdateMobile from '../Products/AddUpdateMobile/UpdateMobile';
import AddLaptop from '../Products/AddUpdateLaptop/AddLaptop';
import UpdateLaptop from '../Products/AddUpdateLaptop/UpdateLaptop';
import AddWatches from '../Products/AddUpdateWatches/AddWatches';
import UpdateWatches from '../Products/AddUpdateWatches/UpdateWatches';

function Routing() {
  return (
    <BrowserRouter>
      <div>
          <Route exact path='/' component={Home}/>
          <Route path='/categorytv' component={CategoryTV}/>
          <Route path='/categorymobile' component={Mobile}/>
          <Route path='/categorylaptop' component={Laptop}/>
          <Route path='/categorywatches' component={Watches}/>

          <Route path='/add-tv' component={AddTV}/>
          <Route path='/update-tv/:id' component={UpdateTV}/>

          <Route path='/add-mobile' component={AddMobile}/>
          <Route path='/update-mobile/:id' component={UpdateMobile}/>

          <Route path='/add-laptop' component={AddLaptop}/>
          <Route path='/update-laptop/:id' component={UpdateLaptop}/>

          <Route path='/add-watches' component={AddWatches}/>
          <Route path='/update-watches/:id' component={UpdateWatches}/>

          
      </div>
    </BrowserRouter>
  );
}

export default Routing;
