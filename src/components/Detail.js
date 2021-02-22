import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUnit } from '../store/actions';

import { Table } from 'react-bootstrap'

function Detail() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const { unit } = useSelector(state => state.unitsReducer)

    useEffect(() => {
        dispatch(getUnit(id))
    }, [dispatch, id])


    return (
        <div className="container mt-3">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Expansion</th>
                    <th>Age</th>
                    <th>Costs</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{unit.id}</td>
                    <td>{unit.name}</td>
                    <td>{unit.description}</td>
                    <td>{unit.expansion}</td>
                    <td>{unit.age}</td>
                    <td>
                        {
                            unit.cost ?
                                <>
                                    {unit.cost["Wood"] ? <span style={{ marginRight: '20px' }}>Wood: {unit.cost["Wood"]}</span> : null}
                                    {unit.cost["Food"] ? <span style={{ marginRight: '20px' }}>Food: {unit.cost["Food"]}</span> : null}
                                    {unit.cost["Gold"] ? <span>Gold: {unit.cost["Gold"]}</span> : null}
                                </>
                                : 'No Cost'
                        }
                    </td>
                </tr>
            </tbody>
        </Table>
        </div>

    )
}

export default Detail
