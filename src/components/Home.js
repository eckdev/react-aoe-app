import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import banner from '../assets/images/aoe.jpg'
import {ageFilter,getUnits} from '../store/actions/index'

function Home() {
    const dispatch = useDispatch();
    const {units} = useSelector(state => state.unitsReducer);
    useEffect(async () => {
        await dispatch(getUnits());
    }, []);
    return (
        <div>
            {console.log(units)}
            <h1>HOME</h1>
            <img src={banner} width="100%" height="100%" alt="" />
        </div>

    )
}

export default Home
