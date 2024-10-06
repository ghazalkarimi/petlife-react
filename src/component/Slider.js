const Slider = () => {
    return (
        <div id="section1" class="container-fluid">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="assets/img/Slider/animal1.jpg" className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Pet Life Tracker</h2>
                            <p>
                            We help you to track your pet's health and store your pet's information
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="assets/img/Slider/animal2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Pet Life Tracker</h2>
                            <p>
                            We help you to track your pet's health and store your pet's information
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="assets/img/Slider/animal3.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Pet Life Tracker</h2>
                            <p>
                            We help you to track your pet's health and store your pet's information
                            </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>


    );
}

export default Slider;