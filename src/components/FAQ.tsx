import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    // State to control the collapse of each FAQ item
    const [collapseOne, setCollapseOne] = useState(false);
    const [collapseTwo, setCollapseTwo] = useState(false);
    const [collapseThree, setCollapseThree] = useState(false);
    const [collapseFour, setCollapseFour] = useState(false); 
    const [collapseFive, setCollapseFive] = useState(false); 
    const [collapseSix, setCollapseSix] = useState(false); 
    const [collapseSeven, setCollapseSeven] = useState(false); 
    const [collapseEight, setCollapseEight] = useState(false); 

    return (
        <div className="faq_area section_padding_130 mt-10" id="faq">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-6">
                        {/* Section Heading*/}
                        <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s">
                            <h3><span>Frequently </span> Asked Questions</h3>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/* FAQ Area*/}
                    <div className="col-12 col-sm-10 col-lg-8">
                        <div className="accordion faq-accordian" id="faqAccordion">
                            {/* FAQ Question 1 */}
                            <div className="card border-0 wow fadeInUp mb-3" data-wow-delay="0.2s">
                                <div className="card-header" id="headingOne">
                                    <h6 className="mb-0" onClick={() => setCollapseOne(!collapseOne)} aria-expanded={collapseOne ? "true" : "false"} aria-controls="collapseOne">Do I need a partner?<span className={collapseOne ? "lni-chevron-up" : "lni-chevron-down"}></span></h6>
                                </div>
                                <div className={collapseOne ? "collapse show" : "collapse"} id="collapseOne" aria-labelledby="headingOne" data-parent="#faqAccordion">
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Question 2 */}
                            <div className="card border-0 wow fadeInUp mb-3" data-wow-delay="0.3s">
                                <div className="card-header" id="headingTwo">
                                    <h6 className="mb-0" onClick={() => setCollapseTwo(!collapseTwo)} aria-expanded={collapseTwo ? "true" : "false"} aria-controls="collapseTwo">What kind of shoes should I wear?<span className={collapseTwo ? "lni-chevron-up" : "lni-chevron-down"}></span></h6>
                                </div>
                                <div className={collapseTwo ? "collapse show" : "collapse"} id="collapseTwo" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Question 3 */}
                            <div className="card border-0 wow fadeInUp mb-3" data-wow-delay="0.4s">
                                <div className="card-header" id="headingThree">
                                    <h6 className="mb-0" onClick={() => setCollapseThree(!collapseThree)} aria-expanded={collapseThree ? "true" : "false"} aria-controls="collapseThree">Do I need to buy tap shoes in order to take the Tap classes?<span className={collapseThree ? "lni-chevron-up" : "lni-chevron-down"}></span></h6>
                                </div>
                                <div className={collapseThree ? "collapse show" : "collapse"} id="collapseThree" aria-labelledby="headingThree" data-parent="#faqAccordion">
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Question 4 */}
                            <div className="card border-0 wow fadeInUp mb-3" data-wow-delay="0.5s">
                                <div className="card-header" id="headingFour">
                                    <h6 className="mb-0" onClick={() => setCollapseFour(!collapseFour)} aria-expanded={collapseFour ? "true" : "false"} aria-controls="collapseFour">How do I know which level is right for me?<span className={collapseFour ? "lni-chevron-up" : "lni-chevron-down"}></span></h6>
                                </div>
                                <div className={collapseFour ? "collapse show" : "collapse"} id="collapseFour" aria-labelledby="headingFour" data-parent="#faqAccordion">
                                    <div className="card-body">
                                        <p>We accept various payment methods including credit cards, PayPal, and bank transfers.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Question 5 */}
                            <div className="card border-0 wow fadeInUp mb-3" data-wow-delay="0.4s">
                                <div className="card-header" id="headingFive">
                                    <h6 className="mb-0" onClick={() => setCollapseFive(!collapseFive)} aria-expanded={collapseFive ? "true" : "false"} aria-controls="collapseFive">What is the difference between Lindy Hop, Charleston, Balboa, and Blues?<span className={collapseFive ? "lni-chevron-up" : "lni-chevron-down"}></span></h6>
                                </div>
                                <div className={collapseFive ? "collapse show" : "collapse"} id="collapseFive" aria-labelledby="headingFive" data-parent="#faqAccordion">
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Question 6 */}
                            <div className="card border-0 wow fadeInUp mb-3" data-wow-delay="0.4s">
                                <div className="card-header" id="headingSix">
                                    <h6 className="mb-0" onClick={() => setCollapseSix(!collapseSix)} aria-expanded={collapseSix ? "true" : "false"} aria-controls="collapseSix">Do you offer private lessons?<span className={collapseSix ? "lni-chevron-up" : "lni-chevron-down"}></span></h6>
                                </div>
                                <div className={collapseSix ? "collapse show" : "collapse"} id="collapseSix" aria-labelledby="headingSix" data-parent="#faqAccordion">
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 wow fadeInUp mb-3" data-wow-delay="0.4s">
                                <div className="card-header" id="headingSeven">
                                    <h6 className="mb-0" onClick={() => setCollapseSeven(!collapseSeven)} aria-expanded={collapseSeven ? "true" : "false"} aria-controls="collapseSeven">I want to listen to swing music. Where can I find it?<span className={collapseSeven ? "lni-chevron-up" : "lni-chevron-down"}></span></h6>
                                </div>
                                <div className={collapseSeven ? "collapse show" : "collapse"} id="collapseSeven" aria-labelledby="headingSeven" data-parent="#faqAccordion">
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 wow fadeInUp mb-3" data-wow-delay="0.4s">
                                <div className="card-header" id="headingEight">
                                    <h6 className="mb-0" onClick={() => setCollapseEight(!collapseEight)} aria-expanded={collapseEight ? "true" : "false"} aria-controls="collapseEight">I want to learn more about swing dance. What resources are available to me?<span className={collapseEight ? "lni-chevron-up" : "lni-chevron-down"}></span></h6>
                                </div>
                                <div className={collapseEight ? "collapse show" : "collapse"} id="collapseEight" aria-labelledby="headingEight" data-parent="#faqAccordion">
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Support Button*/}
                        <div className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp" data-wow-delay="0.6s">
                            <i className="lni-emoji-sad"></i>
                            <p className="mb-0 px-2">Can't find your answers?</p>
                            <Link to="/contact"> Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;