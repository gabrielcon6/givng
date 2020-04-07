import React from 'react';
import GivngsList from './GivngsList';
import NewGivng from './NewGivng';

const Dashboard = () => {
  const GIVNGS = [
    {
      id: 'u1',
      name: 'Christmas',
      theme: 'https://images.unsplash.com/photo-1543934638-bd2e138430c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      date: '25 Dec',
      budget: '$10000'
    }
  ];

  return (
    <div>
      <GivngsList items={GIVNGS}/>
      <NewGivng/>
    </div>
    );
};

export default Dashboard;
