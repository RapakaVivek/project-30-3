
import './App.css';

import Calculator from './Calculator';
import Component from './Component';
import DynamicBackground from './DynamicBackground';
import Fetch from './Fetch';
import Navbar from './Navbar';
import QuoteGenerator from './QuoteGenerator';
import Timer from './Timer';
import TodoList from './TodoList';
import { Routes, Route} from 'react-router-dom';
import Form from './Form';
import Weather from './Weather';
import Search from './Search';
import Chatapp from './Chatapp';
import DragDropList from './DragDropList';
import ImageCarousel from './ImageCarousel';
import Multistep from './Multistep';
import ItemList from './ItemList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <QuoteGenerator />
      <Weather />
      <Chatapp />
      <DragDropList />
      <ImageCarousel />
      <Multistep />
      <ItemList />
      <Form />
      <Routes>
        <Route path='/component' element = {<Component />}/>
        <Route path='/fetch' element = {<Fetch />}/>
        <Route path='/calculatoe' element = {<Calculator />}/>
        <Route path='/timer' element = {<Timer />}/>
        <Route path='/todolist' element = {<TodoList />}/>
        <Route path='/dynamic' element = {<DynamicBackground />} />
      </Routes>
    
    </div>
  );
}

export default App;
