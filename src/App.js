import './App.css';

function App() {
    const title = 'Geolex Creations';
    const Random = Math.random() * 20;
    const link = "https//:aaazambia.org";
    return ( < div className = "App" >

        <
        div className = "content" >

        <
        h1 > { title } < /h1>    <
        p > Random Numbers { Random }
        refresh < /p>   <
        a href = { link } > AAAZ Site < /a> < /
        div > <
        /div>
    );
}

export default App;