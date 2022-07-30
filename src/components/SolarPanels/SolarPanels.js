import React from 'react';
import './SplarPanels.css'
import styled from 'styled-components';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import AddIcon from '@mui/icons-material/Add';
import videoBg1 from './images/YTNWIZ_425_2.mp4';
import videoBg2 from './images/solar-assessment-desktop-5.mp4';
import Specs from './images/_25-Specs-8.jfif'
import { Box, Fab } from '@mui/material';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

const SolarPanels = () => {
    return (
        <div>
            <div className="Solar-Panels">
                {/* pages-1 */}
                <div className="pages-p1">
                <Itemtext>
                    <Fade bottom big cascade>
                        <h1>Solar for Existing Roofs</h1>
                        <p>Lowest Cost Solar Panels in America—Money-back guarantee</p>
                    </Fade>
                </Itemtext>
              <ButtonGroup>  
                <Ranges>
                <Fade bottom big cascade>
                    <h3><SolarPowerIcon></SolarPowerIcon></h3>
                    <p>Convert Sunlight <br />to Energy</p>
                </Fade>
                </Ranges>
                <Ranges>
                <Fade bottom big cascade>
                    <h1>$</h1>
                    <p>Guaranteed Lowest<br />Price for Solar</p>
                </Fade>
                </Ranges>
                <Ranges>
                <Fade bottom big cascade>
                    <h3>24/7</h3>
                    <p>Energy <br />Monitoring</p>
                </Fade>
                </Ranges>
                     <RightButton>Order Now</RightButton>
              </ButtonGroup>
                </div>
                {/* pages-2 */}
                <div className="pages-p2">
                    <div>
                        <div className="pages-p2Text">
                            <Rotate top right>
                            <h5>Savings </h5>
                            <h1>Electricity For Less</h1>
                            </Rotate>
                            <p>Use solar energy to power your home and <br/> reduce your dependence on the grid.<br/> Purchase solar at the lowest price of any <br/> national provider with Tesla's price match<br/> guarantee and take control of your monthly<br/> electricity bill. Learn more about your<br/> potential savings in our Design Studio.</p>
                        </div>
                        <div >
                            < button className="btnColumn">SEE YOUR SAVINGS</button>
                        </div>
                    </div>
                    <div className="pages-p2bgImages"> 
                        <video autoPlay loop muted src={videoBg1}></video>
                    </div>
                </div>
                {/*pages-2-1  */}
                <div className="pages-p2">
                    <div>
                        <div className="pages-p2Text">
                            <Fade bottom big cascade>
                            <h5>Design</h5>
                            <h1> Sleek and Durable</h1>
                            </Fade>
                            <p>Our solar panels are low-profile and durable<br/> — quietly converting sunlight to energy for<br/> decades to come. Integrated hardware and <br/>simple design achieve this by securing the<br/> panels close to your roof and to each other<br/> for a minimalist aesthetic. Chat with an<br/> energy advisor to ask any questions about <br/>Tesla solar panels.</p>
                        </div>
                        <div>
                            <ButtonGroup>
                                <Box sx={{marginLeft:'20px'}}>
                                <Fab color='success' aria-label="add">
                                   <AddIcon />
                                </Fab>
                                <span>LEARN MORE</span>
                                </Box>
                                <Button>ORDER NOW</Button>
                            </ButtonGroup>
                        </div>
                        </div>
                    

                    <div className="pages-p2-1bgImages">  </div>
                </div>
                {/* pages-3 */}
                <div className="pages-p3"> </div>
                <div className="cardTextFlx">
                    <div>
                    <Fade bottom big cascade>
                        <h5>Powerwall</h5>
                        <h1>Home Battery Backup</h1>
                        <ButtonGroup>
                        <Button>ORDER NOW</Button>
                        <Button>LEARN MORE</Button>
                        </ButtonGroup>
                    </Fade>
                    </div>
                    <div>
                        <p>Powerwall is bundled with every Tesla solar purchase, allowing you to store your solar <br /> energy for use anytime—at night or during an outage.</p>
                    </div>
                </div>
                {/* pages-4 */}
                <div className="pages-p4">
                    <video style={{width:'100vw', height: '65vh'}} controls loop muted src={videoBg2} type="video/mp4" />
                </div>
                <div className="cardTextFlx-2">
                    <div>
                    <Fade bottom big cascade>
                        <h5>Power On</h5>
                        <h1>Order and Installation</h1>
                        <ButtonGroup>
                        <Button>ORDER NOW</Button>
                        </ButtonGroup>
                    </Fade>
                    </div>
                    <div>
                        <p>From permitting to powering on, we’ll take care of everything. After you order, we’ll gather <br /> remote aerial imagery of your home, design your system, take care of any necessary <br /> permits and schedule your installation. Chat with an energy advisor to ask any questions <br /> about going solar with Tesla.</p>
                    </div>
                </div>
                {/* pages-5 */}
                <div className="pages-p2">
                    <div>
                        <div className="pages-p2Text">
                        <Fade bottom big cascade>
                            <h5>Efficiency</h5>
                            <h1>Maximum Solar Production</h1>
                            <p>Tesla solar panels are designed to be highly <br /> efficient, delivering maximum solar <br /> production year-round, even on roofs with <br /> complicated angles. Powered by Tesla Solar <br /> Inverter, your fully integrated system is safe <br /> and reliable.</p>
                        </Fade>
                        </div>
                        <div>
                            <Itemtext>
                            </Itemtext>
                            <ButtonGroup>
                                <Button>ORDER NOW</Button>
                            </ButtonGroup>
                        </div>
                    </div>

                    <div className="pages-p5bgImages">  </div>
                </div>
                {/* pages-6 */}
                <div className="pages-p6">   </div>
                <div className="cardTextFlx-2">
                    <div>
                    <Fade bottom big cascade>
                        <h5>Experience</h5>
                        <h1>24/7 Monitoring</h1>
                        <ButtonGroup>
                        <Button>ORDER NOW</Button>
                        </ButtonGroup>
                    </Fade>
                    </div>
                    <div>
                        <p>Manage your solar system from anywhere in the world with 24/7 mobile monitoring. <br /> Watch your energy in real time or set your preferences to optimize for energy <br /> independence.</p>
                    </div>
                </div>
                {/* pages-7 */}
                <div className="pages-p7">
                    <div className="foter-ximg">
                        <img src={Specs} alt="" />
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
                        <Itemtex>
                            <h1> Transform Your Roof</h1>
                            <p> Order now or talk to a Tesla Advisor if you have any <br /> questions</p>
                            <button className="btnFuter">Order Now</button>
                            <button className="btnFuter">Order Now</button>
                            <p><a href="/">Get Energy Updates</a></p>
                        </Itemtex>
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

export default SolarPanels;

const Itemtex =styled.div`
padding-top: 11vh;
text-align: center;
color: white;
h1{
    font-size: 40px;
} `;
const Itemtext =styled.div`
padding-top: 11vh;
text-align: center;
h1{
    font-size: 40px;
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
// const Range =styled.div`
// color: #000;
// margin-top: 25px;
// text-align: center;
// cursor: pointer;
// `
// const Rangas =styled.div`
// font-size: 35px;
// color: white;
// margin-left: 75%;
// width: 300px;
// padding: 15px;
// // align-items: right;
// p{
//     font-size: 15px;
//     // text-align: center;
// }
// `
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