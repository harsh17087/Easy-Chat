import ChatContainer from './ChatContainer';
import ChatTopSection from './ChatTopSection';
import './ChatContent.css';

const ChatContent = () => {
  return (
    <div className='chat-content-container'>
      <ChatTopSection />
      <ChatContainer />
    </div>
  );
};

export default ChatContent;
