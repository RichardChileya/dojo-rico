import './App.css';
import Navbar from './Navbar';


function App() {
    const title = 'Geolex Creations Copperation';
    const Random = Math.random() * 20;
    const link = 'https://www.aaazambia.org';
    return ( < div className = "App" >
        <Navbar />
        <div className = "content" >

        <h1> { title } </h1>     
        <p > Random Numbers { Random }
        refresh </p>   
        <a href = { link } > AAAZ Site </a>  
        </div>  
        </div>
    );
}
export default App;