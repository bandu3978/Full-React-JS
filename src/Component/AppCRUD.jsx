import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Createpost from "./Createpost";
import Updatepost from "./Updatepost";
import Viewposts from "./Viewposts";

const AppCRUD=()=>{


  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Createpost/>}/>
          <Route path="/viewposts" element={<Viewposts/>}/>
          <Route path="/updatepost/:id" element={<Updatepost/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default AppCRUD