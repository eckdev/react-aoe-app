import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnitsAction } from "../../redux/slices/units";
import { Box, Flex, Skeleton } from "@radix-ui/themes";
import AgeCard from "../../components/pages/Units/AgeCard";
import ResourceCard from "../../components/pages/Units/ResourceCard";
import ResourceSliders from "../../components/pages/Units/ResourceSliders";

const Units = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.units);
  const filters = useSelector((state) => state.filters);
  useEffect(() => {
    dispatch(getUnitsAction(filters));
  }, [dispatch, filters]);
  return (
    <Box className="container p-2 md:p-16">
      {isLoading && <Skeleton maxWidth={"600px"} height={"36px"}></Skeleton>}
      {!isLoading && (
        <>
          <Flex gap={8} className="flex-col md:flex-row">
            <AgeCard />
            <ResourceCard />
          </Flex>
          <Box>
            {filters.food.checked |
            filters.wood.checked |
            filters.gold.checked ? (
              <ResourceSliders />
            ) : null}
          </Box>
          <Box>{JSON.stringify(data)}</Box>
        </>
      )}
    </Box>
  );
};

export default Units;
