import React from 'react';

export default function Footer() {
    return (
        <footer id="main-footer" className="py-4 bg-primary text-white text-center">
            <section id="top-bar" className="p-3">
                <div className="container">
                    <div className="row">
                        <div className='col-lg-3'>
                            Copyright &copy;
                            <span class="year"> 2019 BT Real Estate</span>
                        </div>
                        <div className="col-lg-3">
                            <i className="fas fa-phone"></i>
                            <span>(617)-555-5555</span>
                        </div>
                        <div className="col-lg-3">
                            <i className="fas fa-envelope-open"></i>
                            <span>contact@btrealestate.com</span>
                        </div>
                        <div className="col-lg-3">
                            <div className="social">
                                <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.facebook.com/" rel="noopener noreferrer" target='_blank'>
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.linkedin.com/" rel="noopener noreferrer" target='_blank'>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com/" rel="noopener noreferrer" target='_blank'>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.pinterest.com/" rel="noopener noreferrer" target='_blank'>
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}