import React from 'react'
import { NavLink } from "react-router-dom"

function UnitsTable({units}) {
    return (
        <ul>
            { units.map((unit,index) => (
                <li key={index}>{unit.cost ? 
                    <>
                    <NavLink to={"/detail/"+unit.id}>Wood: {unit.cost["Wood"] ? unit.cost["Wood"] : ''}</NavLink>
                    <span style={{marginRight:'20px'}}>Food:{unit.cost["Food"] ? unit.cost["Food"] : ''}</span>
                    <span style={{marginRight:'20px'}}>Gold: {unit.cost["Gold"] ? unit.cost["Gold"] : ''}</span>
                    </>
                    : 'Boş' }</li>
            ))}
        </ul>
    )
}

export default UnitsTable