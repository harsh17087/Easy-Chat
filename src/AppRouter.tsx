import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import BusinessKnowledge from './features/BusinessKnowledge';

const Dashboard = lazy(() => import('./features/Dashboard'));
const Chat = lazy(() => import('./features/Chat'));
const Channels = lazy(() => import('./features/Channels'));
const TestYourBot = lazy(() => import('./features/TestYourBot'));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='chat' element={<Chat />} />
            <Route path='channels' element={<Channels />} />
            <Route path='businessknowledge' element={<BusinessKnowledge />} />
            <Route path='testyourbot' element={<TestYourBot />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
