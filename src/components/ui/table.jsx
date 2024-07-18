/* eslint-disable react/prop-types */
import React from "react";
import { Table,Text } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const UnitTable = ({ data, columns }) => {
  const navigate = useNavigate();
  return (
    <>
    {
        data.length === 0 && <Text> No Records</Text>
    }
    {
        data && data.length > 0 &&     <Table.Root>
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell key={column.key}>
                {column.header}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
  
        <Table.Body>
          {data.length === 0 ? <Table.Row><Table.Cell>No Records</Table.Cell> </Table.Row>: null}
          {data &&
            data.map((item) => (
              <Table.Row
                key={item.id}
                className="cursor-pointer hover:bg-slate-100"
                onClick={() => navigate(`/unit/${item.id}`)}
              >
                {columns.map((column) => (
                  <Table.Cell key={column.key}>
                    {column.render ? column.render(item) : item[column.key]}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    }
    </>

  );
};

export default UnitTable;
