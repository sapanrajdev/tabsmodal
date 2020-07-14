import React from 'react'

export const Tabs = ({ tabs, selectTab, selectedTab, deleteTab, reorderTabs }) => {

  const allowDrop = ev => {
    ev.preventDefault();
    ev.dataTransfer.effectAllowed = 'move';
  };

  const drag = ev => {
    ev.stopPropagation();
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('text', JSON.stringify(ev.target.id));
  };

  const drop = (ev, dropIndex) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    const dragIndex = parseInt(JSON.parse(data), 10);
    if (dragIndex === dropIndex) {
      return false;
    }
    reorderTabs(dragIndex, dropIndex);

  };

  return (
    <ul id="tabs" className="tab-inline max-width">
      {tabs.map((tab, i) => (
        <li
          id={i}
          key={tab['id']}
          draggable={tabs.length > 1}
          className="tab-inline-item tabular-view"
          onDrop={e => drop(e, i)}
          onDragOver={allowDrop}
          onDragStart={drag}
        >
          <div className={`wrapper ${selectedTab === i ? 'selected-tab' : ''}`}>
            <span onClick={selectTab} id={i}>{`Tab ${tab['id']}`}</span>
            {tabs.length > 1 && <button className="button" id={i} onClick={deleteTab}>x</button>}
          </div>
        </li>
      ))}
    </ul>
  );
}