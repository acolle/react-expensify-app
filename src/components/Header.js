import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify App</h1>
    <ul>
      <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
      <li><NavLink to="/create" activeClassName="is-active">Add expense</NavLink></li>
      <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
      <button onClick={startLogout}>Logout</button>
    </ul>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
