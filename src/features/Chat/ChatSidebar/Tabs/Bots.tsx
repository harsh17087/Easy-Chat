import ChatMessagesList from '../../../../components/ChatMessages/ChatMessageList';
import { chatMessagesBot } from '../../../../constants/mocks';

const Bots = () => {
  return (
    <div>
      <ChatMessagesList chatMessages={chatMessagesBot} />
    </div>
  );
};
export default Bots;
