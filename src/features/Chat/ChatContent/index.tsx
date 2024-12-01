import ChatContainer from './ChatContainer';
import './ChatContent.css';
import ChatTopSection from './ChatTopSection';

const ChatContent = () => {
  return (
    <div className='chat-content-container'>
      <ChatTopSection />
      <ChatContainer />
    </div>
  );
};

export default ChatContent;
