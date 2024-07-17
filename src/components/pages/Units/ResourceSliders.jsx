import { Box, Card, Slider, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeInputAction,
} from "../../../redux/slices/filters";

const ResourceSliders = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
  
    const resources = [
      { name: "food", label: "Food" },
      { name: "wood", label: "Wood" },
      { name: "gold", label: "Gold" },
    ];
  
    const [localValues, setLocalValues] = useState({
      food: filters.food.value,
      wood: filters.wood.value,
      gold: filters.gold.value,
    });
  
    useEffect(() => {
      setLocalValues({
        food: filters.food.value,
        wood: filters.wood.value,
        gold: filters.gold.value,
      });
    }, [filters.food.value, filters.wood.value, filters.gold.value]);
    
    const onResourceSliderChange = (resource, key) => {
      dispatch(changeInputAction({ key, resource }));
    };
  
    const handleSliderChange = (value, resource) => {
      setLocalValues((prevValues) => ({
        ...prevValues,
        [resource]: value[0],
      }));
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  return (
    <Box mt={'4'} className="flex gap-4 px-6">
    {resources.map(
      (resource) =>
        filters[resource.name].checked && (
          <Card key={resource.name} className="bg-white border-none  text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
            <Text weight={'bold'} size={'3'} >{capitalizeFirstLetter(resource.name)} Range</Text>
            <Text size={'1'} className="ml-1">(0-200)</Text>
            <Text size={'2'} className="block">Value: {localValues[resource.name]}</Text>
            <Box mt={'8'}>
              <Slider
                data-testid={`${resource.name}-slider`}
                name={`${resource.name}Slider`}
                min={0}
                max={200}
                value={[localValues[resource.name]]}
                color="gray" 
                highContrast
                variant="soft"
                onValueCommit={(value) =>
                  onResourceSliderChange(value[0], resource.name)
                }
                onValueChange={(value) =>
                  handleSliderChange(value, resource.name)
                }
              />
            </Box>
          </Card>
        )
    )}
  </Box>
  )
}

export default ResourceSliders