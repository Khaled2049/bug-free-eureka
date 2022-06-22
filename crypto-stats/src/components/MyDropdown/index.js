import React from 'react';
import { Dropdown } from 'react-bootstrap';
const MyDropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
    return (
      <Dropdown.Item
        key={option}
        onClick={() => onSelectedChange(option)}
        href="#/action-1"
      >
        {option}
      </Dropdown.Item>
    );
  });

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selected}
      </Dropdown.Toggle>
      <Dropdown.Menu>{renderedOptions}</Dropdown.Menu>
    </Dropdown>
  );
};

export default MyDropdown;
