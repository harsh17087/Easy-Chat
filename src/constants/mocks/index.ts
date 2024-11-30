export const chatMessagesAll = [
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Hello, how can I help you?',
    timestamp: '10:30 AM',
    isBot: true,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'I need assistance with my order.',
    timestamp: '10:32 AM',
    isBot: false,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Sure, I can help with that.',
    timestamp: '10:33 AM',
    isBot: true,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Thank you!',
    timestamp: '10:34 AM',
    isBot: false,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'You are welcome.',
    timestamp: '10:35 AM',
    isBot: true,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Can you track my order?',
    timestamp: '10:36 AM',
    isBot: false,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Yes, please provide your order number.',
    timestamp: '10:37 AM',
    isBot: true,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'My order number is 12345.',
    timestamp: '10:38 AM',
    isBot: false,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Thank you. I am checking the status.',
    timestamp: '10:39 AM',
    isBot: true,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Your order is on the way.',
    timestamp: '10:40 AM',
    isBot: true,
  },
];
export const chatMessagesBot = [
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Hello, how can I help you?',
    timestamp: '10:30 AM',
    isBot: true,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Sure, I can help with that.',
    timestamp: '10:33 AM',
    isBot: true,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'You are welcome.',
    timestamp: '10:35 AM',
    isBot: true,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Yes, please provide your order number.',
    timestamp: '10:37 AM',
    isBot: true,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Thank you. I am checking the status.',
    timestamp: '10:39 AM',
    isBot: true,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Your order is on the way.',
    timestamp: '10:40 AM',
    isBot: true,
  },
];
export const chatMessagesHuman = [
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'I need assistance with my order.',
    timestamp: '10:32 AM',
    isBot: false,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Thank you!',
    timestamp: '10:34 AM',
    isBot: false,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'Can you track my order?',
    timestamp: '10:36 AM',
    isBot: false,
  },
  {
    image: 'https://via.placeholder.com/40',
    lastMessage: 'My order number is 12345.',
    timestamp: '10:38 AM',
    isBot: false,
  },
];
for (let i = 0; i < 50; i++) {
  chatMessagesAll.push({
    image: 'https://via.placeholder.com/40',
    lastMessage: `This is message number ${i + 1}`,
    timestamp: new Date().toLocaleTimeString(),
    isBot: i % 2 === 0,
  });
}
for (let i = 0; i < 25; i++) {
  chatMessagesBot.push({
    image: 'https://via.placeholder.com/40',
    lastMessage: `This is message number ${i + 1}`,
    timestamp: new Date().toLocaleTimeString(),
    isBot: true,
  });
}
for (let i = 0; i < 25; i++) {
  chatMessagesHuman.push({
    image: 'https://via.placeholder.com/40',
    lastMessage: `This is message number ${i + 1}`,
    timestamp: new Date().toLocaleTimeString(),
    isBot: false,
  });
}
export const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
export const chatHistory = [
  {
    id: 1,
    sender: 'me',
    message: 'Hello!',
    timestamp: '10:00 AM',
  },
  {
    id: 2,
    sender: 'other',
    message: 'Hi! How can I help you today?',
    timestamp: '10:01 AM',
  },
  {
    id: 3,
    sender: 'me',
    message: 'I need assistance with my order.',
    timestamp: '10:02 AM',
  },
  {
    id: 4,
    sender: 'other',
    message: 'Sure, I can help with that. Can you provide your order number?',
    timestamp: '10:03 AM',
  },
  // Add more messages as needed
];

for (let i = 5; i <= 54; i++) {
  chatHistory.push({
    id: i,
    sender: i % 2 === 0 ? 'other' : 'me',
    message: `This is message number ${i}`,
    timestamp: new Date().toLocaleTimeString(),
  });
}
