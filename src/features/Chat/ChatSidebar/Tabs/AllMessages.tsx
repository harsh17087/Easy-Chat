import ChatMessagesList from '../../../../components/ChatMessages/ChatMessageList';
import { chatMessagesAll } from '../../../../constants/mocks';

const AllMessages = () => {
  return (
    <div>
      <ChatMessagesList chatMessages={chatMessagesAll} />
    </div>
  );
};
export default AllMessages;
