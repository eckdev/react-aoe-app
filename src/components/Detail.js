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
                        <th>Age</th>
                        <th>Costs</th>
                        <th>Times</th>
                        <th>Hit Points</th>
                        <th>Attack</th>
                        <th>Accuracy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{unit.id}</td>
                        <td>{unit.name}</td>
                        <td>{unit.description}</td>
                        <td>{unit.age}</td>
                        <td>
                            {
                                unit.cost ?
                                    <>
                                        {unit.cost["Wood"] ? <span style={{ marginRight: '10px' }}>Wood: {unit.cost["Wood"]}</span> : null}
                                        {unit.cost["Food"] ? <span style={{ marginRight: '10px' }}>Food: {unit.cost["Food"]}</span> : null}
                                        {unit.cost["Gold"] ? <span>Gold: {unit.cost["Gold"]}</span> : null}
                                    </>
                                    : 'No Cost'
                            }
                        </td>
                        <td>
                            <span style={{ marginRight: '10px' }}>Build Time: {unit.build_time}</span>
                            <span style={{ marginRight: '10px' }}>Reload Time: {unit.reload_time}</span>
                        </td>
                        <td>{unit.hit_points}</td>
                        <td>{unit.attack}</td>
                        <td>{unit.accuracy}</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    )
}

export default Detail
