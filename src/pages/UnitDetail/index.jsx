/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUnitAction } from "../../redux/slices/unit";
import { Box, Card, DataList, Skeleton, Text } from "@radix-ui/themes";

const UnitDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useSelector((state) => state.unit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnitAction(id));
  }, [id, dispatch]);

  const UnitCost = ({ cost }) => {
    if (!cost) {
      return "-";
    }
    const costArray = Object.entries(cost);
    return (
      <>
        {costArray.map(([resource, amount], index) => (
          <Text key={resource}>
            {resource}: {amount}
            {index < costArray.length - 1 && ", "}
          </Text>
        ))}
      </>
    );
  };

  return (
    <Box className="container pt-20 p-2 md:p-16">
      {isLoading ? (
        <Skeleton
          data-testid="detail-loader"
          maxWidth={"600px"}
          height={"36px"}
        ></Skeleton>
      ) : (
        <Card>
          <DataList.Root
            orientation={{ initial: "vertical", sm: "horizontal" }}
          >
            {data && Object.entries(data).map(([key, value]) => (
              <DataList.Item key={key}>
                <DataList.Label minWidth="88px">{key}</DataList.Label>
                <DataList.Value>
                  {typeof value === "object" && !Array.isArray(value) ? (
                    <UnitCost cost={value} />
                  ) : Array.isArray(value) ? (
                    value.join(", ")
                  ) : (
                    value
                  )}
                </DataList.Value>
              </DataList.Item>
            ))}
          </DataList.Root>
        </Card>
      )}
    </Box>
  );
};

export default UnitDetail;
