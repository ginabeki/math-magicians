import React from 'react';

const Home = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1rem',
      lineHeight: '1.5',
      padding: '2rem',
      color: '#DEFFF2',
      backgroundColor: 'black',
      opacity: '0.9',
      margin: '2rem 2rem',
    }}
  >
    <h1>Math Magicians</h1>
    <h3>Welcome to our page</h3>
    <p>
      You may be surprised to learn that there is a lot of mathematics behind magic,
      and by giving your students maths magic tricks to investigate,
      you and your class can learn new applications of mathematics and become maths magicians.
      You will find that these activities can be
      engaging for even the most reluctant maths student.
    </p>
    <p>
      Math magic tricks can liven up any math class and create a
      sense of wonder and curiosity about math.
      Not only that, math magic creates a new context for algebraic
      reasoning as students go beyond feeding their doubts with a lot of questions.

    </p>
  </div>
);

export default Home;
