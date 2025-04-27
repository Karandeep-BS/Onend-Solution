import Header from './Header/header';
import MainInfo from './Info/mainInfo';
import Services from './Services/Servics';
import Work from './Work/work';
import Project from './Project/Project';
import Brands from './Brands/Brands';
import './App.css';
import MainFooter from './Footer/MainFooter';

function App() {

  return (
    <div className="App">
      <Header />
      <MainInfo />
      <Services />
      <Work />
      <Project />
      <Brands />
      <MainFooter/>
    </div>
  );
}

export default App;
