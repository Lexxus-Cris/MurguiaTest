import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import GlobalCssPriority from './css/GlobalCssPriority';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ToDoListPage from './features/ToDoList/pages/ToDoListPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalCssPriority>
        <ToDoListPage />
      </GlobalCssPriority>
    </Provider>
  </StrictMode>,
)
