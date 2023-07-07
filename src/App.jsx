import React from 'react';
import Net from './Elements/Net';
import Inform from './Elements/Inform';

function App() {
  return(
    <>
      <Net need="n" />
      <main>
        <img 
          src="image-product-desktop.jpg" 
          alt="Product photo"
        />
        <Inform />
      </main>
    </>
  );
}

export default App;