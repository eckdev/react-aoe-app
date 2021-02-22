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
    }, [dispatch,id])
    return (
        <h1>
            {unit.name}
        </h1>
    )
}

export default Detail
