import React from "react";
import { useParams } from "react-router-dom";

const UnitDetail = () => {
  const { id } = useParams();
  return <div>UnitDetail {id}</div>;
};

export default UnitDetail;
