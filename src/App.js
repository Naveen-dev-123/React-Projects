
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './component/ChatFeed';
import LoginForm from './component/LoginForm';
import './App.css';

const projectID = '79535651-32e9-44e6-a796-d26b34f677a7';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
