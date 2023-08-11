import './App.scss';
import Content from './components/Content';
import Header from './components/Top';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <div className="top">
        <Header />
      </div>

      <div className="main">
        <Content />
      </div>

      <Footer />

    </div>
  );
}

export default App;
