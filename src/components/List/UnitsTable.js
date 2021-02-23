import React from 'react'
import { NavLink } from "react-router-dom"
import { Table } from 'react-bootstrap';

function UnitsTable({ units }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Costs</th>
                </tr>
            </thead>
            <tbody>
                {units.length> 0 ? 
                 units.map((unit, index) => (
                    <tr key={index}>
                        <td>{unit.id}</td>
                        <td><NavLink to={"/detail/" + unit.id}>{unit.name}</NavLink></td>
                        <td>{unit.age}</td>
                        <td>
                            {
                                unit.cost ?
                                    <>
                                        { unit.cost["Wood"] ? <span style={{ marginRight: '20px' }}>Wood: {unit.cost["Wood"]}</span> : null }
                                        { unit.cost["Food"] ? <span style={{ marginRight: '20px' }}>Food: {unit.cost["Food"]}</span> : null}
                                        { unit.cost["Gold"] ? <span>Gold: {unit.cost["Gold"]}</span> : null }
                                    </>
                                    : 'No Cost'
                            }

                        </td>
                    </tr>
                ))
                :
                <tr><td></td><td>No Records</td><td></td><td></td></tr>
            }
            </tbody>
        </Table>
    )
}

export default UnitsTable