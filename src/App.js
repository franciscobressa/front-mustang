import './App.css';
import Banner from "./components/banner/banner.js";
import Content from './components/content/content.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Banner />
        <Content />
    </div>
  );
}

export default App;
