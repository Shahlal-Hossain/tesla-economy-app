import React from 'react';
import './ModelY.css'
import MYCard1 from './ModelY/Model-Y-c3.jpg';
import MYCard2 from './ModelY/_1D-Utility-c4.jpg'
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import MYVideo from './ModelY/WVNSU3_Range-6.mp4';
import CheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { Link } from 'react-router-dom';
import Futar1 from './ModelY/Model-y-futar.jpg'
import Futar2 from './ModelY/Model-y-f2.jpg'


const ModelY = () => {


    return (
        <div main>
            {/* (pages--1) */}
            <div className="pages-y1">
                <Itemtext><h1> Model Y</h1></Itemtext>
                <ButtonGroup>
                    <Ranges>
                        <h2>76 cu ft </h2>
                        <h5> Cargo Space</h5>
                    </Ranges>
                    <Ranges>
                        <h2>330 mi </h2>
                        <h5>Range (EPA est.)</h5>
                    </Ranges>
                    <Ranges>
                        <h2> AWD</h2>
                        <h5>Dual Motor</h5>
                    </Ranges>
                    <RightButton>Order Now</RightButton>
                </ButtonGroup>
            </div>
            {/* (pages--2) */}
            <div className="pages-y2">
                <div className="pagesImages-2">  </div>
                <div className="pagesText-2">
                        <p>Safety</p>
                        <h2>Designed for Safety</h2>
                    
                    <p>Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards.</p>
                    
                    <p><h6>5-Star Rating</h6>Model Y achieved NHTSA 5-star safety ratings in every category and subcategory.</p>
                    <p><h6>Top Safety Pick+</h6>
                    Model Y received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.</p>
                    <Itemtext/>
                    <Itemtext/>
                    <Itemtext/>
                    <ButtonGroup>
                        <Button>Order Now</Button>
                    </ButtonGroup>
                </div>
            </div>
            {/* (pages--3) */}
            <div className="pages-y3">
                <div className="pagesText-3">
                    <div className="Utility-y">
                        <p>Utility</p>
                        <h2>A Place For Everything</h2>
                        <ButtonGroup>
                            <Button>Order Now</Button>
                        </ButtonGroup>
                    </div>
                    <div className="">
                        <p>Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick.</p>
                    </div>
                </div>
                <div className="pages-bootstrap-1">
                    <Carousel fade>
                        <Carousel.Item>
                            <img className="d-block w-75" src={MYCard1} alt="First slide" />
                            <Carousel.Caption>
                                <h4>Versatile seating and storage for cargo and passengers</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-75" src={MYCard2} alt="Second slide" />
                            <Carousel.Caption>
                                <h4>Room for up to seven with optional third row</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>   
            </div>
            {/* pages--4 */}
            <div className="pages-y4">
                <div className="pagesImg-4">
                    <Itemtext/>
                    <ButtonGroup>
                        <Ranges>
                            <h2>2</h2>
                            <h6>Independent motors digitally control <br /> torque to the front and rear wheels</h6>
                        </Ranges>
                        <Ranges>
                            <h2>3.5s</h2>
                            <h6>Quickest acceleration—from zero to 60 <br /> mph* in as little as 3.5 seconds</h6>
                        </Ranges>
                        <Ranges>
                            <h2><CloudOutlinedIcon/></h2>
                            <h6>Capable in rain, snow, mud and off-road <br /> with superior traction control</h6>
                        </Ranges>
                    </ButtonGroup>
                </div>
                <div className="pagesText-3">
                    <div className="Utility-y">
                        <p>All-Wheel Drive</p>
                        <h2>Dual Motor</h2>
                        <ButtonGroup>
                            <Button>Order Now</Button>
                        </ButtonGroup>
                    </div>
                    <div className="">
                        <p>Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.</p>
                    </div>
                </div>
            </div>
            {/* pages--5 */}
            <div className="pages-y5">
                <div className="video-y">
                    <video className="w-100" autoPlay loop muted>
                        <source className='width' src={MYVideo} type="video/mp4" />
                    </video>
                    <div className=""></div>
                </div>
                <div className="pagesText-2">
                    <p>Range</p>
                    <h2>Go Anywhere</h2>   
                    <p>Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 30,000 Superchargers worldwide, with six new locations opening every week.</p>
                    <Itemtext/>
                    <Itemtext/>
                    <Itemtext/>
                    <ButtonGroup>
                        <Button>Order Now</Button>
                    </ButtonGroup>
                </div>
            </div>
            {/* pages-6 */}
            <div className="">
                <div className="pages-y6">
                    <div className="itemText-y6">
                        <div>
                            <h3> 360°</h3>
                            <p>Rear, side and forward-facing cameras <br /> provide maximum visibility</p>
                        </div>
                        <div>
                            <h3> 250 m</h3>
                            <p>Powerful visual processing at up to 250 <br /> meters of range</p>
                        </div>
                        <div>
                            <h3><CheckedIcon></CheckedIcon></h3>
                            <p>Tesla Vision detects nearby cars, helps <br /> prevent potential collisions and assists <br /> with parking</p>
                        </div>
                    </div>
                </div>
                <div>
                  <div className="pagesText-3">
                     <div className="Utility-y">
                        <p>Autopilot</p>
                        <h2>Future of Driving</h2>
                        <ButtonGroup>
                            <Button>Order Now</Button>
                        </ButtonGroup>
                     </div>
                    <div className="">
                        <p>Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.</p>
                    </div>
                  </div>
                </div>
            </div>
            {/* pages--7 */}
            <div className="pages-y7">
                <div className="bgimares-y7">
                    <div className="">
                        <h3>15 inch</h3>
                        <p>A touchscreen display designed to improve over time</p>
                    </div>
                    <div className="">
                        <h3><CellWifiIcon></CellWifiIcon></h3>
                        <p>Over-the-air software updates introduce new features, functionality and performance</p>
                    </div>
                    <div className="">
                        <h3><ElectricCarIcon></ElectricCarIcon></h3>
                        <p>An expansive Glass Roof provides more headroom and UV protection</p>
                    </div>
                </div>
                <div className="pagesText-3">
                     <div className="Utility-y">
                        <p>Interior</p>
                        <h2>Built Around the Driver</h2>
                        <ButtonGroup>
                            <Button>Order Now</Button>
                        </ButtonGroup>
                     </div>
                    <div className="">
                        <p>With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky.</p>
                    </div>
                </div>
            </div>
            {/* pages--8--futer */}
            <div className="">
                <div className="fotar-y8">
                    <div className="fotery8-img">
                        <img src={Futar1} alt="" />
                    </div>
                    <div className="fotery8-text">
                        <div><h1>Model Y Specs</h1></div>
                        <button className='btn-style8'> Performance</button>
                        <button className='btn-style8'>Rear-Wheel Drive</button>
                        <div>
                        <h2> </h2>
                            <h5>Battery</h5>
                            <h6>Leng Range</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Acceleration</h5>
                            <h6>4.2s 0-60 mph</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Range</h5>
                            <h6>358 miles (EPA est)</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Drive</h5>
                            <h6>Dual Motor All-Wheel Drive</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Seating</h5>
                            <h6>5 Adults</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Wheels</h5>
                            <h6>18" or 19"</h6>
                        </div>
                        <div>
                            <RightButton>OWNER'S MANUAL</RightButton>
                        </div>
                    </div>
                    <div className="fotery8-text-2">
                        <button className='btn-style8'>Long Range AWD</button>
                        <button className='btn-style8'>Compare</button>
                        <div>
                        <h2> </h2>
                            <h5>Weight</h5>
                            <h6>4,034 lbs</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Cargo</h5>
                            <h5>23 cu ft</h5>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Displays</h5>
                            <h6>15" Center Touchscreen</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Supercharging Max/ Payment <br/> Type</h5>
                            <h6>250 kW max; Pay Per Use</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h4>Onboard Charger Max</h4>
                            <h6>11.5 kW max (48A)</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h4>Warranty</h4>
                            <h6>Basic Vehicle - 4 years or 50,000</h6>
                            <h6>mi, whichever comes first</h6>
                            <h6>Battery & Drive Unit - 8 years or</h6>
                            <h6>120,000 mi, whichever comes first</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="heroy8-order">
                        <div className="heroy8-btn">
                                <h2>Order Model Y</h2>
                            <div className="last-btn">
                                <RightButton>ORDER NOW</RightButton>
                                <RightButton>COMPARE</RightButton>
                            </div>
                        </div>
                        <div className="lasty8-img">
                            <img src={Futar2} alt="" />
                        </div>
                    </div>
                    <div className="navber-y8">
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

export default ModelY;

const Itemtext =styled.div`
padding-top: 10vh;
text-align: center;
h1{
    font-size: 35px;
} `;
const ButtonGroup =styled.div`
display: flex;
margin-bottom: 60px;
 ` ;
const Ranges =styled.div`
font-size: 35px;
color: white;
margin-right: 70px;
text-align: center;
cursor: pointer;
p{
    font-size: 15px;
} `;
const RightButton =styled.div`
height: 40px;
width: 250px;
border: 2px solid whitesmoke;
color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-size: 14px;
cursor: pointer;
margin: 10px;
padding: 3px;
border-radius: 30px;
background: grey;
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