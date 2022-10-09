import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from './blogs/BlogList';

const Dashboard = () => {
  return (
    <div>
      <BlogList />
      <div className="fixed-action-btn">
    // React redux Link route for blogs
        <Link to="/blogs/new" className="btn-floating btn-large red">
    // Material icon 
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
