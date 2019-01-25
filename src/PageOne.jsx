'use strict';

// Load NPM modules
import React from 'react';

// Load antDesign modules
import { Input, Table } from 'antd';

// Gets an object which has the count of letters
const getLetterCount = text => {
  function Char_Counts(str) {
    var uchars = {};
    var str2 = text.replace(/\W/g, '');
    str2.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
    return uchars;
  }
  console.log(Char_Counts(text));
  return text;
};

// Define columns
const getColumns = (text, increment) => {
  return [
    {
      title: 'Letter',
      dataIndex: 'name',
      render: text => <b>{text}</b>
    }
  ];
};

// Build entry
const getLetterRow = (letter, count, template) => {
  return {};
};

// Get row template
const getRowTemplate = (text, increment) => {
  return {};
};

// Define data source
const getDataSource = (text, increment) => {
  return [];
};

// Build text box
const buildTextBox = (state, updateState) => (
  <Input.TextArea
    rows={8}
    style={{ marginBottom: '24px' }}
    value={state.text}
    onChange={e => updateState({ text: e.target.value })}
  />
);

// Build table
const buildTable = (dataSource, columns) => (
  <Table dataSource={dataSource} columns={columns} />
);

// Define export
export default (state, updateState) => (
  <div className="page-one">
    <h2>Enter Text:</h2>
    {buildTextBox(state, updateState)}
    <h2>View Letters by Count:</h2>
    {buildTable(
      getDataSource(state.text, state.increment),
      getColumns(state.text, state.increment)
    )}
  </div>
);
