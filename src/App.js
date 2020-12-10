import Main from './components/mainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import Configstore from './redux/store'

function App() {
  const Stor = Configstore();
  
  return (
    <Provider store = {Stor}>
    <BrowserRouter>
      <div>
        <Main /> 
      </div> 
    </BrowserRouter>
    </Provider>
  );  
}

export default App;
