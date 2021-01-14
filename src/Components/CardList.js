import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div className='f1 tc'>
      {robots.map((r, i) => {
        return (
          <Card
            key={robots[i].id}
            email={robots[i].email}
            id={robots[i].id}
            name={robots[i].name}
            username={robots[i].username}
          />
        );
      })}
    </div>
  );
};

export default CardList;
