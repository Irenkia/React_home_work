import './App.css';
import Main from './components/main/Main';

function App() {
  const taskArr = ["First","Second","Third"];
  return (
    <div className="container p-3 bg-white">
      <h3 className='mb-3 p-3'>To Do List</h3>
      <Main taskArr={taskArr}/>
    </div>
  );
}

export default App;
