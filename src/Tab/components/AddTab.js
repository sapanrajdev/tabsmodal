import React from 'react'

export const AddTab = ({ tabs, addTab }) => (
  <button disabled={tabs.length === 10} onClick={addTab}> {'+'} </button>
);
