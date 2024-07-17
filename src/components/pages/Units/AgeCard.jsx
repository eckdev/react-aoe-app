import { Box,  Flex, RadioGroup } from "@radix-ui/themes";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedAge } from "../../../redux/slices/filters";

const AgeCard = () => {
  const ageList = ["All", "Dark", "Feudal", "Castle", "Imperial"];
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const onAgeChange = (age) => {
    dispatch(changeSelectedAge(age));
  };
  return (
    <Box className="p-2 pb-2 md:p-6 md:mt-0 mt-16">
      <Box className="p-2 max-w-sm flex border-none rounded-full px-3 text-sm font-medium bg-white text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
        <Flex gap="2">
          <Flex direction="row" asChild gap="2">
            <RadioGroup.Root
              variant="surface"
              onValueChange={onAgeChange}
            >
              {ageList.map((item) => (
                <RadioGroup.Item key={item} value={item} checked={filters.age === item}>
                  {item}
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default AgeCard;
