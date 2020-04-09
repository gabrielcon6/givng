import React, { useState, useEffect } from 'react';
import GivngsList from './GivngsList';
import NewGivng from './NewGivng';

const Dashboard = () => {
  const [givngs, setGivngs] = useState(
    [
      {
        id: 'u1',
        name: 'Christmas',
        theme: 'https://images.unsplash.com/photo-1543934638-bd2e138430c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        date: '25 Dec',
        budget: '$10000'
      }
    ]
  );

  useEffect(() => {
    setGivngs(givngs)
    console.log('AHUAHAUHAUAHUAHA afterEffect:', givngs)
  }, [givngs])

  const addNewGivngs = newGivng => {
    setGivngs(prevGivngs => prevGivngs.concat(newGivng))
  }

  const editGivng = givng => {
    setGivngs( givngs.map((item) => {
      if (item.id === givng.id) return {...item, 
        id: givng.id,
        name: givng.name,
        theme: givng.theme,
        date: givng.date,
        budget: givng.budget
      }
      return item }
      ))
      console.log('AHUAHAUHAUAHUAHA after', givngs)

  }

  return (
    <div>
      <h1>Your Givngs</h1>
      <GivngsList items={givngs} edit={editGivng}/>
      <NewGivng items={addNewGivngs}/>
    </div>
    );
};

export default Dashboard;
