import { FC } from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import ChatApp from 'modules/chat/components/ChatApp';

const store = configureStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <ChatApp />
    </Provider>
  );
};

export default App;
