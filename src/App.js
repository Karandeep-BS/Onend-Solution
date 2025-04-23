import Header from './Header/header';
import MainInfo from './Info/mainInfo';
import Services from './Services/Servics';
import Work from './Work/work';
import Project from './Project/Project';
import Brands from './Brands/Brands';
import Footer from './Footer/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <MainInfo />
      <Services />
      <Work />
      <Project />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
