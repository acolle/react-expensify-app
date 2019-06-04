import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <div className="ExpenseListItem">
        <Link to={`/edit/${id}`}>
          <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
      </div>
    </div>
  );
}

// To get access to dispatch from the props
export default ExpenseListItem;
