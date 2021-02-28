import React from 'react';
import JumbotronComponents from './JumbotronComponents';
import Products from './Products';
import UserForm from './UserForm';

function App() {
  return (
    <div>
      <JumbotronComponents>
        This is a long sentence, and I want to insert content into the jumbotron
        component from the outside.
      </JumbotronComponents>
      <div>
        <UserForm />
        <br />
      </div>
      <Products />
    </div>
  );
}

export default App;
