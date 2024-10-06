import Navbar from './Navbar';
import Services from './Services';
import Slider from './Slider';
import Questions from './Questions';
import About from './About';
import Contactus from './Contactus';
import Footer from './Footer';

const Mainpage = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Services />
            <About />
            <Questions />
            <Contactus/>
            <Footer/>
        </div>
    );
}

export default Mainpage;