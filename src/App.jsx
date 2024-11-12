import './App.css';
import Carte from './components/Carte';
import Conact from './components/Conact';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
    <Home></Home>
    <section  >
      <header class="header">
        <nav class="navbar">
            <div class="nav-left">
              <img src="" alt="" />
                <h1>Perfume</h1>
            </div>
            <div class="nav-right">
                <div class="navlist">
                <a class="link" href="#home">Home</a>
                <a class="link"href="#work">Female</a>
                <a class="link" href="#myinfo">Male</a>
                <a class="link contact"  href="#Contactme">Contact Us</a>
            </div>
            </div>
        </nav>
    </header>
   </section>
<div id='#home'>

 <Carte></Carte>
 </div>
 <Conact></Conact>
    </div>
  );
}

export default App;
