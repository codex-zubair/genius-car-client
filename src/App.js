import {RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Routes/Routes';

function App() {



  return (
    <div className="App">
      <h1>I"M APP</h1>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
