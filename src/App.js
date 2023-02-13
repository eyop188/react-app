import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='w-full flex items-center  justify-between px-10 py-3'>
      <a className=' text-2xl font-bold'>
        IOP
      </a>
      <div className='flex text-gray-700 items-center space-x-6'>
        <a className=' hover:text-red-600 cursor-pointer'>Home</a>
        <a className=' hover:text-red-600 cursor-pointer'>About</a>
        <a className=' hover:text-red-600 cursor-pointer'>Contact</a>


      </div>

     </div>

     
    </div>
  );
}

export default App;
