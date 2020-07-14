import React from 'react'
import { LeftArrow, Tabs, RightArrow, AddTab, Content } from './components';
import './css/style.css';
import './css/align.css';

let scroll = 0;
class TabularView extends React.Component {
  state = {
    tabs: [{ id: 1, description: 'Tab 1 contents' }],
    selectedTab: 0,
  };

  addTab = () => {
    const { tabs } = this.state;
    if (tabs.length < 10) {
      const nextTab = { id: tabs[tabs.length - 1]['id'] + 1, description: '' };
      tabs.push(nextTab);
      this.setState({ tabs, selectedTab: tabs.length - 1 }, () => this.scroll('left'));

    }
  };

  deleteTab = e => {
    e.stopPropagation();
    const { id } = e.target;
    const { tabs } = this.state;
    let { selectedTab } = this.state;
    const tab = parseInt(id, 10);
    const lastIndex = tabs.length - 1;
    if (selectedTab === lastIndex) {
      selectedTab = lastIndex - 1;
    }
    tabs.splice(tab, 1);
    this.setState({ tabs, selectedTab });
  };

  reorderTabs = (from, to) => {
    const { tabs } = this.state;
    tabs.splice(to, 0, tabs.splice(from, 1)[0]);
    this.setState({ tabs, selectedTab: to }, () => console.log(tabs));
  };

  selectTab = e => {
    const { id } = e.target;
    const selectedTab = parseInt(id, 10);
    this.setState({
      selectedTab,
    });
    scroll = document.getElementById(selectedTab).getBoundingClientRect().x;
  };

  scroll = type => {
    if (type === 'left') scroll += 150;
    else scroll -= 150;
    const elmt = document.getElementById('tabs');
    elmt.scrollLeft = scroll;
  };

  handleChangeDesc = e => {
    const { tabs } = this.state;
    const { id, value } = e.target;
    tabs[id].description = value;
    this.setState({ tabs });
  };

  render() {
    return (
      <div className="container">
        <div className="header pb-5">
          Demo Container
        </div>
        <div className="row bg-gray">
          <div className="col-1 btn">
            <LeftArrow {...this.state} scroll={this.scroll} />
          </div>
          <div className="col-9">
            <Tabs {...this.state} selectTab={this.selectTab} deleteTab={this.deleteTab} reorderTabs={this.reorderTabs} />
          </div>
          <div className="col-1 btn">
            <RightArrow {...this.state} scroll={this.scroll} />
          </div>
          <div className="col-1 btn">
            <AddTab {...this.state} addTab={this.addTab} />
          </div>
        </div>
        <Content {...this.state} handleChangeDesc={this.handleChangeDesc} />
      </div>
    );
  }
}
export default TabularView;
