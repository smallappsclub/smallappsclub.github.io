import React from 'react';

const content = ['a', 'b', 'c'];
// const data-url="./data/data.json";
// fetch(data-url).then;

function List() {
  return (
    <ol className="list">
      {content.map((element) => (
        <li className="letter">{element}</li>
      ))}
    </ol>
  );
}

export default List;
