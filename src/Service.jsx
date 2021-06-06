import React from "react";
import { NavLink } from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const Service = () => {
    return (
        <>
            <div className="service-background">
                <h1 className="service-h1">Development Series</h1>
                <p className="service-para1">
                    “I'm not a great programmer; <br />I'm just a good programmer<span> with great habits.”</span>
                </p>
            </div>
            <h5 className="web">Let's start <br />the journey of developing</h5>
            <div className="main">
                <h5 className="service-h5">Different types of app developing</h5>
            </div>


            <div className="service-card-1">
                <div className="main_card">
                    <div className="card1">
                        <img src="https://mk0buildfireqbf86ll2.kinstacdn.com/wp-content/uploads/2020/05/5-ways-to-build-a-mobile-app.jpeg" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">mobile app development</h5>
                            <p className="card_text"> The 5 Ways to Build a Mobile App</p>
                            <a href="https://buildfire.com/ways-to-build-a-mobile-app/" className="btn">See more</a>
                        </div>
                    </div>
                    <div className="card1">
                        <img src="https://mk0buildfireqbf86ll2.kinstacdn.com/wp-content/uploads/2014/12/11-ways-to-promote1.jpg" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">Mobile app marketing</h5>
                            <p className="card_text"> 33 Creative Ways to Promote Your App for Free (App Marketing Strategy)</p>
                            <a href="https://buildfire.com/free-app-promotion/" className="btn">See more</a>
                        </div>
                    </div>
                    <div className="card1">
                        <img src="https://mk0buildfireqbf86ll2.kinstacdn.com/wp-content/uploads/2016/11/mobile-app-design.jpg" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">mobile app design</h5>
                            <p className="card_text">The Definitive Guide to Mobile App Design</p>
                            <a href="https://buildfire.com/mobile-app-design/" className="btn">See more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main">
                <h5 className="service-h5">Types of web development</h5>
                <h5 className="service-first" id="#service">[1] Front developer</h5>
            </div>
            <div className="service-card-1">
                <div className="main_card" id="mian4">
                    <div className="card1">
                        <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-1.jpg" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">HTML</h5>
                            <p className="card_text">HTML is the standard markup language for Web pages.</p>
                            <a href="https://www.w3schools.com/html/default.asp" className="btn">See more</a>
                        </div>
                    </div>
                    <div className="card1">
                        <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2021/01/000-Basic-CSS.png" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">CSS</h5>
                            <p className="card_text">CSS is the language we use to style an HTML document.</p>
                            <a href="https://www.w3schools.com/css/default.asp" className="btn">See more</a>
                        </div>
                    </div>
                    <div className="card1">
                        <img src="https://raygun.com/blog/images/popular-javascript-frameworks/feature.jpg" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">Java Script</h5>
                            <p className="card_text">JavaScript is the world's most popular programming language.</p>
                            <a href="https://www.w3schools.com/js/default.asp" className="btn">See more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main">
                <h5 className="service-first">[2] Backend developer</h5>
            </div>

            <div className="service-card-1">
                <div className="main_card">
                    <div className="card1">
                        <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/06/how-to-use-python-to-monitor-and-measure-website-performance-5ed76ef838ff3-760x400.png" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">python</h5>
                            <p className="card_text">Python can be used on a server to create web applications.
</p>
                            <a href="https://www.w3schools.com/python/default.asp" className="btn">See more</a>
                        </div>
                    </div>
                    <div className="card1">
                        <img src="https://www.popwebdesign.net/images/tutorial/php/tutorijali-php-banner.png" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">php</h5>
                            <p className="card_text">PHP is a server scripting language,a powerful tool for making dynamik Web pages.</p>
                            <a href="https://www.w3schools.com/php/default.asp" className="btn">See more</a>
                        </div>
                    </div>
                    <div className="card1">
                        <img src="https://www.zend.com/sites/zend/files/image/2020-04/image-blog-mysql-php.jpg" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">MY SQL</h5>
                            <p className="card_text">SQL is a standard language for storing, manipulating and retrieving data in databases.</p>
                            <a href="https://www.w3schools.com/sql/default.asp" className="btn">See more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main">
                <h5 className="service-first">Full Stack Developer & Machine Learning </h5>
            </div>

            <div className="service-card-1">
                <div className="main_card">
                    <div className="card1">
                        <img src="" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">Full stack developer</h5>
                            <p className="card_text">A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML,CSS.he also knows how to:Program a browser
                            (JavaScript, jQuery, Angular) Program a server (PHP,Python,Node)
</p>
                            <a href="https://www.upgrad.com/blog/skills-to-become-a-full-stack-developer/#:~:text=Source,making%20of%20a%20software%20product" className="btn">See more</a>
                        </div>
                    </div>
                    <div className="card1">
                        <img src="https://d2o2utebsixu4k.cloudfront.net/media/images/b330fb86-c208-4d47-b0f1-ae8e6b5a0007.jpg" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">Machin Learning</h5>
                            <p className="card_text">Top 30 Machine Learning Skills required to get <br />a Machine Learning Job</p>
                            <a href="https://www.knowledgehut.com/blog/data-science/machine-learning-skills" className="btn">See more</a>
                        </div>
                    </div>
                    <div className="card1">
                        <img src="" className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card_title">Machin Learning</h5>
                            <p className="card_text">Competitive programming is a mind sport usually held over the Internet or a local network,
                            involving participants trying to program according to provided specifications. Contestants are referred to as sport programmers.</p>
                            <a href="https://www.topcoder.com/community/competitive-programming/" className="btn">See more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <footer>
                    <h3 className="index">Index</h3>
                    <ul className="footer-nav">
                        <li className="footer-nav-item "  >
                            <NavLink  exact className="footer-nav-link " to="/">Home</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact  className="footer-nav-link" to="/Service">Service</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact  className="footer-nav-link" to="/About">About</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact  className="footer-nav-link" to="/Contact">Contact</NavLink>
                        </li>
                    </ul>

                    <h3 className="developer">developer</h3>
                    <ul className="footer-nav-developer">
                        <li className="footer-nav-item "  >
                            <NavLink exact className="footer-nav-link " to="/">App developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/service" target="">Front developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/service">Backend developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/service">Full stack developer</NavLink>
                        </li>
                        <li className="footer-nav-item">
                            <NavLink exact className="footer-nav-link" to="/service">Machine learning</NavLink>
                        </li>
                    </ul>

                    <section>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41264308474!2d72.75225579781409!3d21.159345833019305!
                    2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!
                    4v1622717003156!5m2!1sen!2sin"
                    width="50%" height = "100%"  allowfullscreen="" loading="lazy"></iframe>
                    </section>


                    <h4>Contact</h4>
                    <ul className="icon">
                        <li className="social-icon "  >
                            <a className="social-link " href="https://www.instagram.com/hardik_vekariya_1111/"><InstagramIcon /></a>
                        </li>
                        <li className="social-icon">
                            <a className="social-link" href="https://www.facebook.com/hardik.vekariya.712/"><FacebookIcon /></a>
                        </li>
                        <li className="social-icon">
                            <a className="social-link" href="https://www.linkedin.com/in/hardik-vekariya-aa28731b7/"><LinkedInIcon /></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <h6>
                            Created BY:<br />
                            © 2021 developing.React <br />
                                Made with ♥ by Hardik Vekariya</h6>
                    </div>
                    <a href="/About" className="btn6">Next Page</a>
                </footer>
            </div>

        </>
    );
};

export default Service;
