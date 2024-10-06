
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pet Life Tracker</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#section1">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section2">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section3">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section4">Aid Information</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section5">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


            {/* <div id="section2" className="container-fluid bg-warning" style={{ padding: "100px 20px" }}>
                <h1>Section 2</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div> */}

            {/* <div id="section3" className="container-fluid bg-secondary text-white" style={{ padding: "100px 20px" }}>
                <h1>Section 3</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div> */}

        </div>


    );
}

export default Navbar;