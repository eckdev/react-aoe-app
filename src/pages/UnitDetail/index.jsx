import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUnitAction } from "../../redux/slices/unit";

const UnitDetail = () => {
  const { id } = useParams();
  const {data,isLoading} = useSelector(state => state.unit)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUnitAction(id));
  }, [id,dispatch]);

  return (    <div>{isLoading ? <span>Loading...</span> : JSON.stringify(data)}</div>);
};

export default UnitDetail;
