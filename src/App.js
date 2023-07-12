import './App.css';
import Content1 from './Components/Content1/Content1.js'
import Content2 from './Components/Content2/Content2.js'
import Content3 from './Components/Content3/Content3.js'
import Content4 from './Components/Content4/Content4.js'
import Content5 from './Components/Content5/Content5.js'
import Content6 from './Components/Content6/Content6.js'
import Content7 from './Components/Content7/Content7.js'
import Content8 from './Components/Content8/Content8.js'
import Content9 from './Components/Content9/Content9.js'
import Content10 from './Components/Content10/Content10.js'
import Footer from './Components/Footer/Footer.js'
import Navbar from './Components/Navbar/Navbar.js'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar className="nav"></Navbar>
        <Content1 className="con1" ></Content1>
        <Content2 className="con2"></Content2>
        <Content3 className="con3"></Content3>
        <Content4 className="con4"></Content4>
        <Content5 className="con5"></Content5>
        <Content6 className="con6"></Content6>
        <Content7 className="con7"></Content7>
        <Content8 className="con8"></Content8>
        <Content9 className="con9"></Content9>
        <Content10 className="con10"></Content10>
        <Footer className="foot"></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
