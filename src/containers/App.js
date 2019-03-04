import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    searchField : state.searchRobots.searchField,
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    error : state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearcChange : (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots : () => dispatch( requestRobots() )
  }
}

class App extends Component{

  componentDidMount(){
    this.props.onRequestRobots();
  }

  render(){
    const { searchField, onSearcChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ?
      <h1>Loading</h1> :
    (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearcChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(App);
