import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import BusinessKnowledge from './features/BusinessKnowledge';

// Lazy load the components
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
            {/* Default route */}
            <Route
              index
              element={
                <Suspense fallback={<div>Loading Dashboard...</div>}>
                  <Dashboard />
                </Suspense>
              }
            />
            {/* Dashboard route */}
            <Route
              path='dashboard'
              element={
                <Suspense fallback={<div>Loading Dashboard...</div>}>
                  <Dashboard />
                </Suspense>
              }
            />
            {/* Chat route */}
            <Route
              path='chat'
              element={
                <Suspense fallback={<div>Loading Chat...</div>}>
                  <Chat />
                </Suspense>
              }
            />
            {/* Channels route */}
            <Route
              path='channels'
              element={
                <Suspense fallback={<div>Loading Channels...</div>}>
                  <Channels />
                </Suspense>
              }
            />
            {/* Business Knowledge route */}
            <Route path='businessknowledge' element={<BusinessKnowledge />} />
            {/* Test Your Bot route */}
            <Route
              path='testyourbot'
              element={
                <Suspense fallback={<div>Loading Test Your Bot...</div>}>
                  <TestYourBot />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
