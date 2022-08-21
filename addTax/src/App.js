import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from './First/First'
import Second from './Second/Second';
import Third from './third/third';



function App() {

  return (
    <div className="App">
     <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Third/>} /> */}
                    <Route path="/" element={<First/>} />
                    <Route path="/second" element={<Second/>} />
                    </Routes>
                    </BrowserRouter>
      

    </div>
  );
}

export default App;
