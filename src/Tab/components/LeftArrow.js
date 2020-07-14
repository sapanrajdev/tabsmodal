import React from 'react'

export const LeftArrow = ({ tabs, selectedTab, scroll }) => (
  <button
    disabled={!(tabs.length > 3 && selectedTab !== 0)}
    onClick={() => scroll('right')}>
    {'<'}
  </button>
);
