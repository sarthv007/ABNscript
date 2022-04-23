import React from 'react';
import './Parent.scss';

function List({item}) {
  return (
    <div className={'Parent'} key={item.id}>
        <div className={'box'} >
            <div>{item.name}</div>
            <div>{item.lname}</div>
            <div>{item.email}</div>
        </div>
    </div>
  )
}

export default List