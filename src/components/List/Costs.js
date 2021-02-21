import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { 
    activeCostFilter, 
    costFilter, 
    setCostFilter,
    getFilters } from '../../store/actions';

function Costs() {
    const dispatch = useDispatch();
    const {costs} = useSelector(state => state.unitsReducer)

    useEffect(() => {
        dispatch(getFilters())
    }, [dispatch]);

    const onCostChange = async (name,value) => {
        await Promise.all([dispatch(setCostFilter(name,value)),dispatch(costFilter())])
    }

    const selectCostCheckbox = async (isChecked,name,isActive) => {
        await dispatch(activeCostFilter(name))

        if (isActive && !isChecked ) {
            await Promise.all([dispatch(setCostFilter(name,0)),dispatch(costFilter())])
        }
    }

    return (
        <div className="cost-container">
            {
                costs.map((cost, index) => (
                    <div key={index} style={{display:'flex',alignItems:'center'}}>
                        <input
                            className="check"
                            type="checkbox"
                            onChange={(e) => selectCostCheckbox(e.target.checked,cost.name,cost.isActive)}
                        />
                        <h3 className="rangeName">{cost.name}</h3>
                        {
                            cost.isActive &&
                            <input
                                className="range"
                                type="range"
                                min="1"
                                max="200"
                                value={cost.value}
                                onChange={(e) =>onCostChange(cost.name,e.target.value)}
                            />                            
                        }
                        <span style={{marginLeft:'20px'}}>{cost.value}</span>

                    </div>
                ))
            }

        </div>
    )
}

export default Costs
