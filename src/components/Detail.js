import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {getUnit} from '../store/actions';

function Detail() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const {unit} = useSelector(state => state.unitsReducer)

    useEffect(() => {
        dispatch(getUnit(id))
    }, [])
    return (
        <div>
            {console.log(unit)}
        </div>
    )
}

export default Detail
