import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import DisplayData from './pages/DisplayData.jsx';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://betest-d6i8.onrender.com')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
