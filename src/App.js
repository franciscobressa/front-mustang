import './App.css';
import Banner from "./components/banner/banner.js";
import Content from './components/content/content.js';
import Footer from "./components/footer/footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Banner />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
