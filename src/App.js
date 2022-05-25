
import Navbar from './Navbar';
import Home from './Home'; 


function App() {
    const title = 'Geolex Creations Copperation';
    const Random = Math.random() * 20;
    const link = 'https://www.facebook.com/GeolexCreations/';
    // vid 5
    return ( < div className = "App" > 
        <Navbar />
        <div className = "content" >
            <Home />
            <link/>


        <h1> { title } </h1>     
        <p > Random Numbers { Random }
        refresh </p>   
        <a href = { link } > Visit  </a> 
         
        <div>The </div>
         
        </div>  
        </div>
    );

}
export default App;