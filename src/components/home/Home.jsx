import React,{useEffect,useContext,useState} from 'react';
import axios from 'axios'
// import Button from '@material-ui/core/Button';
import Search from '../search/Search'
import Usercontext from '../context.js';

const Home = () => {
    const {user,course,units,setUnits}=useContext(Usercontext)

  useEffect(()=>{
     if (course.code){
         let payload={course_code:course.code}
        axios.post('/course/units',payload).then(res=>setUnits(res.data)).catch(err=>console.error(err))
     }
     },[course,setUnits])

    return (
        <div className='home'>
            <Search source={units}/>
            <div>
                <h2 className="course-header">{course.name}</h2>
            </div>
    </div>
    );
};

export default Home;
