import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUnits } from '../../store/actions';

import UnitsTable from './UnitsTable';
import Ages from './Ages'
import Costs from './Costs'

function List() {
    const dispatch = useDispatch();
    const { filteredUnits,costs } = useSelector(state => state.unitsReducer);

    useEffect(async () => {
        await dispatch(getUnits());
    }, []);

    return (
        <div>
            {
                <>
                    <Ages />
                    <Costs costs={costs} />
                    <UnitsTable units={filteredUnits} />
                </>
            }
        </div>
    )
}

export default List
