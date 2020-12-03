import React from 'react'
import Login from './components/login/login';
import styles from './app.module.css'
function App({authService}) {
  return (
    <Login className={styles.app} authService={authService}/>
  );
}

export default App;
