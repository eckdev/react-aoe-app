import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { ageFilter,getFilters } from '../../store/actions/index';

import {ButtonGroup, Button} from 'react-bootstrap'

function Ages() {
    const dispatch = useDispatch();
    const {ages} = useSelector(state => state.unitsReducer)

    useEffect(() => {
        dispatch(getFilters())
    }, [dispatch]);

    
    const onAgeClick = e => {
        let filter = e.target.innerText;
        const getActiveFilter = ages.find(age => age.isActive === true);
        if (getActiveFilter.filter !== filter) {
            dispatch(ageFilter(filter))
        }
    }

    return (
        <div className="ages-container">
        <ButtonGroup aria-label="Age Filter">
                {
                    ages.map((age, index) => {
                        return (
                            <Button
                                onClick={onAgeClick}
                                key={index}
                                style={{ background: age.isActive ? "#fff" : "", color: age.isActive ? '#007bff' : '' }}
                            >
                                {age.filter}
                            </Button>
                        )
                    })
                }
            </ButtonGroup>
        </div>
    )
}

export default Ages
