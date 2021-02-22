import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    activeCostFilter,
    costFilter,
    setCostFilter,
    getFilters
} from '../../store/actions';

import { Form, Col } from 'react-bootstrap';

function Costs() {
    const dispatch = useDispatch();
    const { costs } = useSelector(state => state.unitsReducer)

    useEffect(() => {
        dispatch(getFilters())
    }, [dispatch]);

    const onCostChange = async (name, value) => {
        await Promise.all([dispatch(setCostFilter(name, value)), dispatch(costFilter())])
    }

    const selectCostCheckbox = async (costIsChecked, name, costIsActive) => {
        await dispatch(activeCostFilter(name))

        if (costIsActive && !costIsChecked) {
            await Promise.all([dispatch(setCostFilter(name, 0)), dispatch(costFilter())])
        }
    }

    return (
        <div className="cost-container">
            <Form.Group>
                <Form.Row>
                    {
                        costs.map((cost, index) => (

                            <Col sm={4}>
                                <Form.Group id="formGridCheckbox">
                                    <Form.Check
                                        className="check"
                                        type="checkbox"
                                        label={cost.name}
                                        onChange={(e) => selectCostCheckbox(e.target.checked, cost.name, cost.isActive)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    {
                                        cost.isActive ?
                                            <>
                                                <Form.Control
                                                    className="range"
                                                    type="range"
                                                    min="0"
                                                    max="200"
                                                    value={cost.value}
                                                    onChange={(e) => onCostChange(cost.name, e.target.value)}
                                                />
                                                <span style={{ marginLeft: '20px' }}>{cost.value}</span>
                                            </>
                                            : null
                                    }

                                </Form.Group>

                            </Col>

                        ))
                    }
                </Form.Row>
            </Form.Group>
        </div>
    )
}

export default Costs
