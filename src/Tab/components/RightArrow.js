import React from 'react'

export const RightArrow = ({ tabs, selectedTab, scroll }) => (
  <button
    disabled={!(tabs.length > 3 && selectedTab !== tabs.length - 1)}
    onClick={() => scroll('left')}>
    {'>'}
  </button>
);
