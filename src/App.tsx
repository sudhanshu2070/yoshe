import React from 'react';
import { NotesProvider } from './contexts/NotesContext';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <NotesProvider>
      <AppNavigator />
    </NotesProvider>
  );
};

export default App;