import ChatMessagesList from '../../../../components/ChatMessages/ChatMessageList';
import { chatMessagesHuman } from '../../../../constants/mocks';

const Human = () => {
  return (
    <div>
      <ChatMessagesList chatMessages={chatMessagesHuman} />
    </div>
  );
};
export default Human;
