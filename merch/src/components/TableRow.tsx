import React from 'react';

type TableRowProps = {
  number: string;
  name: string;
  desc: string;
  tools: string[];
  completed: string;
};

const TableRow = ({ number, name, desc, tools, completed }: TableRowProps) => {
  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{name}</td>
      <td>{desc}</td>
      <td>
        <ul>
          {tools.map((tool: string) => {
            return <li>{tool}</li>;
          })}
        </ul>
      </td>
      <td>{completed}</td>
    </tr>
  );
};

export default TableRow;
TableRow;
