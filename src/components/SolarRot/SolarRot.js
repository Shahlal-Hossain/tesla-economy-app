import React from 'react';
import './SolarRot.css'
import styled from 'styled-components';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import Video1 from './images/SR-Durability-mp4-.webm';
import CardVideo1 from './images/Carousel_Design-mp5.webm';
import CardVideo2 from './images/Carousel_Installation5.webm';
import CardVideo3 from './images/WLCRZE_Carousel_PowerOn_5.mp4';
import Carousel from 'react-bootstrap/Carousel';
import PanelMeasure from './images/PanelMeasure_9.avif';
import { Link } from 'react-router-dom';

const SolarRot = () => {
    return (
        <div>
            <div className="Solar-Rot">
                {/* pages-1 */}
                <div className="pages-r1">
                <Itemtext>
                    <h1>Solar Roof</h1>
                    <h5>Transform your roof and produce clean energy</h5>
                </Itemtext>
              <ButtonGroup>  
                <Ranges>
                    <h3><SolarPowerIcon></SolarPowerIcon></h3>
                    <p>Beautiful Solar <br />Without Compromise</p>
                </Ranges>
                <Ranges>
                    <h3>25-Year</h3>
                    <p>Tile <br />Warranty</p>
                </Ranges>
                <Ranges>
                    <h3>24/7</h3>
                    <p> Outage <br />Protection</p>
                </Ranges>
                     <RightButton>Order Now</RightButton>
              </ButtonGroup>
                </div>
                {/* pages-2 */}
                <div className="pages-r2">   </div>
                <div className='pagesText-r'>
                    <div className='Design'>
                        <div>
                        <h5>Design</h5>
                        <h2>A Beautiful Roof</h2>
                        <Button>Order Now</Button>
                        </div>
                        <div className='pagesText-rp'>
                        <p>Install Solar Roof and power your home with a fully integrated solar and storage system. With a seamless design, each tile looks great up-close or from the street, complementing your home’s natural aesthetic styling. Chat with an energy advisor to ask any questions about going solar with Tesla.</p>
                        </div>
                    </div>
                </div>
                {/* pages-3 */}
                <div className="pages-r3">
                    <div>
                        <div className="pages-r3Text">
                            <h5>Energy Storage</h5>
                            <h1>Backup Protection</h1>
                            <p>Powerwall is a compact home battery that is <br/> bundled with every Tesla solar purchase, <br/> providing you with 24/7 energy security. It <br/> stores the energy you produce with Solar <br/> Roof, so you can power your home anytime <br/>—at night or during an outage.</p>
                        </div>
                        <div >
                            < button className="btnColumn">Order Now</button>
                            < button className="btnColumn">Order Now</button>
                        </div>
                    </div>
                    <div className="pages-r3bgImages">   </div>
                </div>
                {/* pages-4 */}
                <div className="pages-r3">
                    <div className="video-1">
                        <video width="1200" height="1000" autoPlay loop muted>
                            <source src={Video1} type="video/mp4" />
                        </video>
                        </div>
                    <div>
                        <div className="pages-r3Text">
                            <h5>Durability</h5>
                            <h1>Built to Last</h1>
                            <p>Solar Roof tiles are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof tiles will continue to produce clean energy for your home for decades to come.</p>
                        </div>
                        <div >
                            < button className="btnColumn">Order Now</button>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'100px'}} className='pagesText-r'>
                    <div className='Design'>
                        <div>
                        <h5>Installation</h5>
                        <h2>Trusted Expertise</h2>
                        <Button>Order Now</Button>
                        </div>
                        <div className='pagesText-rp'>
                        <p>Our in-house team of energy professionals has installed more than 3.6 GW of clean solar energy across 400,000 roofs—the equivalent of 10 million traditional solar panels. From design to power on, we take care of everything. Chat with an energy advisor to ask any questions about Tesla Solar Roof.</p>
                        </div>
                    </div>
                </div>
                {/* pages-5 */}
                <div className="pages-r5">
                        <Carousel fade>
                            <Carousel.Item>
                                <video width="1100" height="700"  className="d-block" autoPlay loop muted>
                                    <source src={CardVideo1} type="video/mp4" />
                                </video>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <video width="1100" height="700" className="d-block " autoPlay loop muted>
                                    <source src={CardVideo2} type="video/mp4" />
                                </video>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <video width="1100" height="700" className="d-block" autoPlay loop muted>
                                    <source src={CardVideo3} type="video/mp4" />
                                </video>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                </div>
                    <div className='pagesCard-r5'>
                        <div className='R5Card'>
                        <ButtonGroup>
                            <Rangas>
                            <h4>Navigate on Autopilot</h4>
                                <p>Active guidance from on-ramp to off-ramp</p>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='R5Card'>
                        <ButtonGroup>
                            <Rangas>
                                <h4>Auto Lane Change</h4>
                                <p>Automatically change lanes while driving on the highway</p>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='R5Card'>
                        <ButtonGroup>
                            <Rangas>            
                                <h4>Summon</h4>
                                <p>Automatically retrieve your car</p>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='R5Card'>
                        <ButtonGroup>
                            <Rangas>
                                <h4>Autopark</h4>
                                <p>Parallel and perpendicular parking with a single touch</p>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                    </div>
                {/* pages-6 */}
                <div className="pages-r3">
                    <div>
                        <div className="pages-r3Text">
                            <h5>Energy Storage</h5>
                            <h1>Backup Protection</h1>
                            <p>Powerwall is a compact home battery that is <br/> bundled with every Tesla solar purchase, <br/> providing you with 24/7 energy security. It <br/> stores the energy you produce with Solar <br/> Roof, so you can power your home anytime <br/>—at night or during an outage.</p>
                        </div>
                        <div >
                         < button className="btnColumn">Order Now</button>
                        </div>
                    </div>
                    <div className="pages-r6bgImages">   </div>
                </div>
                {/* pages-7 */}
                <div className="pages-r7"> </div>
                <div className='pagesText-r'>
                    <div className='Design'>
                        <div>
                        <h5>Control</h5>
                        <h2>Monitor and Optimize</h2>
                        <Button>Order Now</Button>
                        </div>
                        <div className='pagesText-rp'>
                        <p>With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.</p>
                        </div>
                    </div>
                </div>
                {/* pages-8 */}
                <div className="pages-r3">
                    <div>
                        <div className="pages-r3Text">
                            <h5>Value</h5>
                            <h1>Pay Less for Electricity</h1>
                            <p>Solar Roof is the only roof that can help pay <br/> for itself with the energy you produce.<br/> Power your home at the lowest price per<br/> watt of any national provider and take<br/> control of your monthly electricity bill.</p>
                        </div>
                        <div >
                         < button className="btnColumn">Order Now</button>
                        </div>
                    </div>
                    <div className="pages-r8bgImages">   </div>
                </div>
                {/* pages-9 */}
                <div className="pages-r9">
                    <div className="foter-ximg">
                        <img src={PanelMeasure} alt="" />
                    </div>
                    <div className="text-15">
                    <br />
                        <br />
                        <div><h1>Solar Roof Specs</h1></div>
                        <br />
                        <br />
                        <div>
                        <h2> </h2>
                            <h5>Tile and Power Warranty</h5>
                            <h6>25 years</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Wind Rating</h5>
                            <h6>ASTM D3161 Class F</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Fire Rating</h5>
                            <h6>Class A (highest rating)</h6>
                        </div>
                    </div>
                    <div className="text-2-15">
                        <br />
                        <br />
                        <br />
                        <br />
                        <div>
                        <h2> </h2>
                            <h5>Hail Rating</h5>
                            <h6>ANSI FM 4473 Class 3</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Roof Pitch</h5>
                            <h6>2:12 to 24:12</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Inverter Power</h5>
                            <h6>3.8kW / 7.6kW</h6>
                            <h6>97.5% efficiency</h6>
                        </div>
                    </div>
                </div>
                {/* pages-futer */}
                <div className="Rot-furer">
                    <div className="Itemtext-futer">
                        <Itemtext>
                            <h1> Transform Your Roof</h1>
                            <p> Order now or talk to a Tesla Advisor if you have any <br /> questions</p>
                            <button className="btnFuter">Order Now</button>
                            <button className="btnFuter">Order Now</button>
                            <p><a href="/">Get Energy Updates</a></p>
                        </Itemtext>
                    </div>
                    <div className="navber-rot">
                        <Link to='/'>Tesla © 2022</Link>
                        <Link to='/'>Privacy & Legal</Link>
                        <Link to='/'>Vehicle Recalls</Link>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>News</Link>
                        <Link to='/'>Engage</Link>
                        <Link to='/'>Locations</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolarRot;

const Itemtext =styled.div`
padding-top: 10vh;
text-align: center;
color: white;
h1{
    font-size: 45px;
} `;
const ButtonGroup =styled.div`
display: flex;
margin-bottom: 70px;
`;
const Ranges =styled.div`
font-size: 35px;
color: white;
margin-right: 70px;
text-align: center;
cursor: pointer;
p{
    font-size: 15px;
} `;
const Rangas =styled.div`
font-size: 35px;
color: #000;
margin-right: 30px;
p{
    font-size: 15px;
    text-align: center;
} `;
const RightButton =styled.div`
height: 40px;
width: 250px;
border: 2px solid whitesmoke;
color: white;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-size: 14px;
cursor: pointer;
margin: 10px;
border-radius: 30px;
:hover{
    background-color: antiquewhite;
    color: #000;
} `;
 const Button =styled.button`
height: 40px;
width: 200px;
border: 2px solid #000;
color: #000;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-size: 14px;
cursor: pointer;
margin: 20px;
padding: 3px;
border-radius: 30px;
:hover{
    background-color: #000;
    color: white;
} `;