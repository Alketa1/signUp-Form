import React from 'react';
import { Provider } from 'react-redux';
import SignUp from './components/SignUpForm';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <SignUp />
      </div>
    </Provider>
  );
};

export default App;
