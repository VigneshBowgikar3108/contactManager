import './App.css';
import Component1 from './components/Component1';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import { data } from './data';
function App() {
  const mappedData = data.map((item) => {
    return (
        <Cards key={item.id} item={item} />
    )
})
  return (
    <div className="App">
      <Header/>
      <Component1/>
      {mappedData}
      <Footer/>
    </div>
  );
}

export default App;
