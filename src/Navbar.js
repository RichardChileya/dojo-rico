const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1> The Geolex Creations</h1>
            <div className="links">
                <a href="/"> Home </a>
                <a href="https://www.facebook.com/GeolexCreations/"> On Facebook </a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}> Our Services </a>
            </div>
        </nav>
    );
}
 
export default Navbar;