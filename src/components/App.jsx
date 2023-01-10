import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Next from './Next';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Next />
  },
  {
    path: '/quiz',
    element: <Quiz />
  },
  {
    path: '/result',
    element: <Result />
  },
  {
    path: '/main',
    element: <Main />
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
