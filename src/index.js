import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import AuthContext from "./component/ui/Admin/AuthContext" 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
      <App/>
    </AuthContext>
  </React.StrictMode>
);

