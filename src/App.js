import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CharacterEditor />
      <div 
        style={{
          position: "fixed",
          top: "60%",
          bottom: 0,
          left: 0,
          right: 0,
          background: "hsl(195deg, 20%, 86%)",
          zIndex: 0,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
