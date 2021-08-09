import React from 'react';
import List from './components/List';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <List />
        </section>
      </main>
    </>
  );
}

export default App;
