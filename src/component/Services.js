
const Services = () => {
    return (
        <div id="section2" className="services" style={{ padding: "100px 20px" }}>
            <div className="container">
                <h1><span className="badge bg-info">Our Services</span></h1>
                <div className="row">
                    {/* for fadeInUp use wow.js library and animation.css library */}
                    <div className="col-lg-4 col-md-6 wow fadeInUp">
                        <div className="service-box blue">
                            <i className="fa fa-wechat icon"></i>
                            <h3>Chat with Vet</h3>
                            <p>
                                Vets take time to understand your pet's problem
                                and create a personalized consult report.
                                You can chat or make a video call with them
                            </p>
                            <a href="/commingsoon" className="read-more">
                                <span>Read More</span>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="service-box orange">
                            <i className="fa fa-medkit icon"></i>
                            <h3>Vaccination</h3>
                            <p>
                                To Protect your pet, it is imporatnt to
                                schedule any number of vaccinations.
                                Reminders are also available for your pets vaccination.
                            </p>
                            <a href="/commingsoon" className="read-more"><span>Read More</span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="service-box green">
                            {/* <i id="div1" className="fa icon"></i> */}
                            <i className="fa fa-folder-open icon"></i>
                            <h3>Pet's Documnets</h3>
                            <p>
                                Quickly share your pets documents.
                                Petlife Tracker makes it easier to manage and track
                                your pets documents from anywhere.
                            </p>
                            <a href="/commingsoon" className="read-more"><span>Read More</span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="service-box red">
                            <i className="fa fa-plus-square icon"></i>
                            <h3>Medication</h3>
                            <p>
                                A Simple schedule way for your pet's medication.
                                This service aslo allows you to set the alarm to remind you to
                                feed medication to your pets.
                            </p>
                            <a href="/commingsoon" className="read-more"><span>Read More</span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="service-box purple">
                            <i className="fa fa-calendar icon"></i>
                            <h3>Set Reminder</h3>
                            <p>
                                Set your own reminders for medication, vaccination,
                                feeding or... with your pet. This service help you lives easier.
                            </p>
                            <a href="/calendar" className="read-more"><span>Read More</span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="service-box pink">
                            <i className="fa fa-heartbeat icon"></i>
                            <h3>Health Vital record</h3>
                            <p>
                                Record your pet's vital information such as tempeture, heart rate,
                                and growth tracker,... by this service.
                            </p>
                            <a href="/commingsoon" className="read-more"><span>Read More</span></a>
                        </div>
                    </div>
                </div>

            </div>
        </div >


    );
}

export default Services;