const Contactus = () => {
    return (
        <div id="section5" style={{ padding: "100px 20px" }}>
            <div className="container">
                <h1>
                    <span class="badge bg-info">Contact Us</span>
                </h1>
                <div className="row contactus">
                    <div className="img-contactus col-lg-6 col-md-6 col-sm-12">
                        <img src="assets/img/Contactus/contactus.jpg" className="d-block imgcontactus" alt="..." />
                    </div>
                    <div className="row col-lg-6 col-md-6 col-sm-12">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Your Email" />
                                </div>
                                <div class="form-group">
                                    <input type="tel" class="form-control" placeholder="Your Phone" />
                                </div>

                            </form>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea class="form-control" id="message" placeholder="Your Message *" ></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contactus;