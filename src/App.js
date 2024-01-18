import logo from './logo.svg';
import './App.css';
import SideLeft from './components/SideLeft';
import Bottom from './components/Bottom';
import Target from './components/Target';
import SideRight from './components/SideRight';


function App() {
  return (
    <>
      <div className='d-flex flex-row justify-content-center flex-wrap mt-5 col-12'>
        <SideLeft/>
        <SideRight />
      </div>
      
      <Bottom />

    </>
  );
}

export default App;
