/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnitsAction } from "../../redux/slices/units";
import { Box, Card, Flex, Skeleton } from "@radix-ui/themes";
import AgeCard from "../../components/pages/Units/AgeCard";
import ResourceCard from "../../components/pages/Units/ResourceCard";
import ResourceSliders from "../../components/pages/Units/ResourceSliders";
import UnitTable from "../../components/ui/table";

const Units = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.units);
  const filters = useSelector((state) => state.filters);
  useEffect(() => {
    dispatch(getUnitsAction(filters));
  }, [dispatch, filters]);

  const columns = [
    { key: "id", header: "Id" },
    { key: "name", header: "Name" },
    { key: "age", header: "Age" },
    {
      key: "cost",
      header: "Cost",
      render: (item) => (item.cost ? <UnitCost cost={item.cost} /> : "-"),
    },
  ];

  const UnitCost = ({ cost }) => {
    const costArray = Object.entries(cost);
    return (
      <>
        {costArray.map(([resource, amount], index) => (
          <span key={resource}>
            {resource}: {amount}
            {index < costArray.length - 1 && ", "}
          </span>
        ))}
      </>
    );
  };

  return (
    <Box className="container p-2 md:p-16">
      {isLoading && <Skeleton data-testid="loader" maxWidth={"600px"} height={"36px"}></Skeleton>}
      {!isLoading && (
        <>
          <Flex gap={8} className="flex-col md:flex-row">
            <AgeCard />
            <ResourceCard />
          </Flex>
          <Box mb={"24px"}>
            {filters.food.checked |
            filters.wood.checked |
            filters.gold.checked ? (
              <ResourceSliders />
            ) : null}
          </Box>
          <Card className="p-4">
            <UnitTable data={data} columns={columns} />
          </Card>
        </>
      )}
    </Box>
  );
};

export default Units;
