const Footer = () => {
    return (
        <div>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            {/* <svg class="bi" width="30" height="24"><use xlink: href="#bootstrap"></use></svg> */}
                        </a>
                        <span class="mb-3 mb-md-0 text-muted">Pet Life Tracker</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3 hover-media"><a class="text-muted" href="">
                            {/* <svg class="bi" width="24" height="24"><use xlink: href="#twitter"></use></svg> */}
                            <i className="fa fa-instagram"></i>
                        </a>
                        </li>
                        <li class="ms-3 hover-media"><a class="text-muted" href="">
                            {/* <svg class="bi" width="24" height="24"><use xlink: href="#instagram"></use></svg> */}
                            <i className="fa fa-twitter"></i>
                        </a>
                        </li>
                        <li class="ms-3 hover-media"><a class="text-muted" href="">
                            {/* <svg class="bi" width="24" height="24"><use xlink: href="#facebook"></use></svg> */}
                            <i className="fa fa-whatsapp"></i>
                        </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}

export default Footer;