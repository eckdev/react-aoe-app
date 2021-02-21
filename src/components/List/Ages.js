import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { ageFilter,getFilters } from '../../store/actions/index';

function Ages() {
    const dispatch = useDispatch();
    const {ages} = useSelector(state => state.unitsReducer)

    useEffect(() => {
        dispatch(getFilters())
    }, []);

    
    const onAgeClick = e => {
        let filter = e.target.innerText;
        const getActiveFilter = ages.find(age => age.isActive === true);
        if (getActiveFilter.filter !== filter) {
            dispatch(ageFilter(filter))
        }
    }

    return (
        <div className="ages-container">
            <ul>
                {
                    ages.map((age, index) => {
                        return (
                            <li
                                onClick={onAgeClick}
                                key={index}
                                style={{ background: age.isActive ? "gray" : "" }}
                            >
                                {age.filter}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Ages
