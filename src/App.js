import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shoppinglist from './components/shopping-list/shopping-list';
import Dynamic from './components/dynamic/dynamic.route';
import FormBuilder from './components/formbuilder/formbuilder';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='list' element={<Shoppinglist/>}/>
        <Route path='/dynamic/:id' element={<Dynamic/>}/>
        <Route path='form' element={<FormBuilder/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
