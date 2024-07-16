import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnitsAction } from "../../redux/slices/units";

const Units = () => {
  const { data, isLoading } = useSelector((state) => state.units);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(getUnitsAction());
  }, [dispatch]);
  return (
    <div>{isLoading ? <span>Loading...</span> : <span>Units</span>}</div>
  );
};

export default Units;
