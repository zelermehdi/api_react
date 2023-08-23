import React, { useState } from 'react';
import { postData } from '../services/api';

const UnicornCreator = () => {
  const unicornData = {
    name: "doudou",
    age: 2,
    colour: "blue"
  }

  const createUnicorn = async () => {
    await postData(unicornData, '/unicorns')
  };

  return (
    <div>
      <h2>Unicorn Creator</h2>
      <button onClick={createUnicorn}>Create Unicorn</button>
    </div>
  );
};

export default UnicornCreator;
