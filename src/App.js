import React from 'react';
import propTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
  <div>
    <h3>I love {name}</h3>
    <h2>born in {born}</h2>
    <img src={picture} alt={name} width="300px"/>
  </div>
  );
}

const foodILike = [
  {id:1,
    name : 'Pharrell Williams',
   image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Pharrell_Williams_at_The_Lion_King_European_Premiere_2019.png/440px-Pharrell_Williams_at_The_Lion_King_European_Premiere_2019.png',
    born : 'April 5, 1973 (age 50) Virginia Beach, Virginia, U.S.'
  },
  {id:2,
    name : 'A$ap Rocky',
   image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/South_by_Southwest_2019_4_-_46628270064_%28cropped%29.jpg/440px-South_by_Southwest_2019_4_-_46628270064_%28cropped%29.jpg',
    born : 'October 3, 1988 (age 34) New York City, U.S.'
  },
  {id:3,
    name : 'Tyler, the Creator',
   image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tyler_the_Creator_%2852163761341%29_%28cropped%29.jpg/440px-Tyler_the_Creator_%2852163761341%29_%28cropped%29.jpg',
    born : 'March 6, 1991 (age 32) Hawthorne, California, U.S.'
  },
  {id:4,
    name : 'Lucky Daye',
   image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Lucky-Daye_Ap-Images-604x800.jpg/440px-Lucky-Daye_Ap-Images-604x800.jpg',
    born : 'September 25, 1985 (age 37) New Orleans, Louisiana, U.S.'
  }
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}
// const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

function App() {
  console.log(foodILike.map(renderFood));
  return (
    <div>
      
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} born={dish.born} />)}
      

    </div>
  );
}

export default App;
