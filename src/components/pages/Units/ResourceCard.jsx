import { Box,  CheckboxGroup, Flex } from "@radix-ui/themes";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCheckAction,
} from "../../../redux/slices/filters";

const ResourceCard = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const initialCheckedResources = Object.keys(filters)
    .filter((key) => filters[key].checked)
    .map((key) => key);

  const onResourceChange = (resources) => {
    dispatch(changeCheckAction(resources));
  };

  return (
    <Box className="p-2 md:p-6">
      <Box className="p-2 max-w-sm flex border-none rounded-full px-3 text-sm font-medium bg-white text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
        <Flex gap="2">
          <Flex direction="row" asChild gap="2">
            <CheckboxGroup.Root
              name="resource"
              value={initialCheckedResources}
              onValueChange={onResourceChange}
            >
              <CheckboxGroup.Item value="food">Food</CheckboxGroup.Item>
              <CheckboxGroup.Item value="wood">Wood</CheckboxGroup.Item>
              <CheckboxGroup.Item value="gold">Gold</CheckboxGroup.Item>
            </CheckboxGroup.Root>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ResourceCard;
