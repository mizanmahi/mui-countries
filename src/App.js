import './App.css';
import Header from './components/Header/Header';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routes';

function App() {
   let elements = useRoutes(routes);

   return (
      <div className='App'>
         <Header />
         {elements}
      </div>
   );
}

export default App;
