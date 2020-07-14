import React from 'react'

export const Content = ({ selectedTab, tabs, handleChangeDesc }) => (
  <textarea
    placeholder="Start typing..."
    id={selectedTab}
    value={tabs[selectedTab]['description']}
    onChange={handleChangeDesc}
  />
);
