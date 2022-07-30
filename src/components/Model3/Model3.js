import React from 'react';
import "./Model3.css"
import styled from 'styled-components';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import CheckedIcon from '@mui/icons-material/RadioButtonChecked';
import hero2 from './Model3/model-3-hero-2.jpg'
import RangeMap from './Model3/model-3-range-map.png';
import Specs from './Model3/Model-S-Specs-Hero-Desktop-LHD.jpg'
import MsOrderHero from './Model3/Model-3-Order-6.jpg'
import { Link } from 'react-router-dom';


const Model3 = ({model}) => {

    return (
        <div>
            <div className="main">
                <div className="fastItem">
                    <Itemtext>
                        <h1>Model 3</h1>
                    </Itemtext>
                    <ButtonGroup>
                        <Ranges>
                            <h2><SpeedIcon sx={{ fontSize: 45 }}></SpeedIcon> 3.1s</h2>
                            <h5>0-60 mph*</h5>
                        </Ranges>
                        <Ranges>
                            <h2>358 mi</h2>
                            <h5>Range (EPA est.)</h5>
                        </Ranges>
                        <Ranges>
                            <h2>AWD</h2>
                            <h5>Dual Motor</h5>
                        </Ranges>
                        <RightButton>Order Now</RightButton>
                    </ButtonGroup>
                </div>
                <div className="item3-2">

                    <div className='img3-1'>
                        <img src={hero2} alt="" />
                    </div>
                    <div className='item3-2-text'>
                        
                        <div className="">
                            <h6>Safety</h6>
                            <h1>Built for Safety</h1>
                        </div>
                        <p>Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards.</p>
                        <p>
                        <h6>5-Star Rating</h6>
                        Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.
                        </p>
                        <p>
                        <h6>Top Safety Pick+</h6> 
                        Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.</p>
                        <div className='item3-btn'>
                        <ButtonGroup>
                            <Range><span className='LearnMore'>+</span>Learn More</Range>
                        <Button>Order Now</Button>
                        </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className="item3-3">
                    <div className="img3-2">
                        <Itemtext>
                        </Itemtext>
                        <ButtonGroup>
                        <Ranges>
                            <h2><SpeedIcon sx={{ fontSize: 45 }}></SpeedIcon> 3.1s</h2>
                            <p>Quickest acceleration—from zero to 60 <br/> mph* in as little as 3.1 seconds</p>
                        </Ranges>
                        <Ranges>
                            <h2>162 mph</h2>
                            <p>Improved handling and aerodynamics <br/> allow for a top speed of 162 mph</p>
                        </Ranges>
                        <Ranges>
                            <h2>AWD</h2>
                            <p>Dual Motor All-Wheel Drive instantly <br/> controls traction and torque, in all <br/> weather conditions</p>
                        </Ranges>
                        </ButtonGroup>
                    </div>
                    <div className="item3-3-text">
                        <div className="Performance">
                            <h6>Performance</h6>
                            <h1>Quickest Acceleration</h1>
                            <ButtonGroup>
                                <Range><span className='LearnMore'>+</span>Learn More</Range>
                                <Button>Order Now</Button>
                            </ButtonGroup>
                        </div>
                        <div className="item3-3-text-1">
                            <p>Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.</p>
                        </div>
                    </div>
                </div>
                <div className="item3-3">
                    <div className="img3-3">
                        <Itemtext>
                        </Itemtext>
                        <ButtonGroup>
                        <Ranges>
                            <h2>2</h2>
                            <p>Independent motors digitally control <br /> torque to the front and rear wheels</p>
                        </Ranges>
                        <Ranges>
                            <h2>10 ms</h2>
                            <p>Dual motors respond to changing <br /> conditions in as little as 10 milliseconds</p>
                        </Ranges>
                        <Ranges>
                            <h2><CloudOutlinedIcon></CloudOutlinedIcon></h2>
                            <p>Unparalleled traction and control, in all <br /> weather conditions</p>
                        </Ranges>
                        </ButtonGroup>
                    </div>
                    <div className="item3-3-text">
                        <div className="Performance">
                            <h6>All-Wheel Drive</h6>
                            <h1>Dual Motor</h1>
                                <Button>Order Now</Button>
                        </div>
                        <div className="item3-3-text-1">
                            <p>Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</p>
                        </div>
                    </div>
                </div>
                <div className="item3-4">
                    <div className="img3-4">
                        <Itemtext/>
                        <Itemtext/>
                        <Itemtext/>
                        <Itemtext/>
                        <Itemtext/>
                        <Itemtext/>
                        <Itemtext/>
                        <Itemtext/>
                        <ButtonGroup className='item3-Ranges'>
                        <Ranges>
                            <h2>358 mi</h2>
                            <p>Go anywhere with up to 358 mi of <br /> estimated range on a single charge</p>
                        </Ranges>
                        <Ranges>
                            <h2>15 min</h2>
                            <p>Recharge up to 175 mi in 15 minutes at <br /> Supercharger locations</p>
                        </Ranges>
                        <Ranges>
                            <h2>30,000+</h2>
                            <p>Superchargers placed along well-traveled <br /> routes around the world</p>
                        </Ranges>
                        </ButtonGroup>
                    </div>
                    <div className="item3-4-1">
                        <div>
                            <h5>Range</h5>
                            <h1>Go Anywhere</h1>
                            <br />
                        </div>
                        <p>Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 30,000 Superchargers worldwide, with six new locations opening every week.</p>
                        <img className='img3-4-1' src={RangeMap} alt="" />
                        <ButtonGroup>
                        <Range className='renge'> <span className='Learn'>+</span>Learn More </Range>
                                <Button>Order Now</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="Autopilot">
                    <div className="iconDiv">
                        <div>
                            <h3> 360°</h3>
                            <p>Rear, side and forward-facing cameras <br /> provide maximum visibility</p>
                        </div>
                        <div>
                            <h3> 250m</h3>
                            <p>Powerful visual processing at up to 250 <br/> meters of range</p>
                        </div>
                        <div>
                            <h3><CheckedIcon></CheckedIcon></h3>
                            <p>Tesla Vision detects nearby cars, helps <br/> prevent potential collisions and assists <br/> with parking</p>
                        </div>
                    </div>
                </div>
                <div className="item3-3-text">
                        <div className="Performance">
                            <h6>Autopilot</h6>
                            <h1>Future of Driving</h1>
                            <ButtonGroup>
                                <Range><span className='LearnMore'>+</span>Learn More</Range>
                                <Button>Order Now</Button>
                            </ButtonGroup>
                        </div>
                        <div className="item3-3-text-1">
                            <p>Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.</p>
                        </div>
                </div>
                <div className="">
                    <div className="bgimg3-6">
                        <div className='bgimg3-6-text'>
                            <Rangas>
                                <h3>15 inch</h3>
                                <p>A touchscreen display designed to improve over time</p>
                            </Rangas>
                            <Rangas>
                                <h3>15 inch</h3>
                                <p>Over-the-air software updates introduce new features, functionality and performance</p>
                            </Rangas>
                            <Rangas>
                                <h3>15 inch</h3>
                                <p>An expansive Glass Roof provides more headroom and UV protection</p>
                            </Rangas>
                        </div>
                    </div>
                    <div className="item3-3-text">
                        <div className="Performance">
                            <h6>Interior</h6>
                            <h1>Built Around the Driver</h1>
                            <ButtonGroup>
                                <Range><span className='LearnMore'>+</span>Learn More</Range>
                                <Button>Order Now</Button>
                            </ButtonGroup>
                        </div>
                        <div className="item3-3-text-1">
                            <p>The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.</p>
                        </div>
                    </div>
                </div>
                <div className="fotar3">
                    <div className="foter3-img">
                        <img src={Specs} alt="" />
                    </div>
                    <div className="foter3-text">
                        <div><h1>Model S Specs</h1></div>
                        <button className='btn-style3'> Performance</button>
                        <button className='btn-style3'>Rear-Wheel Drive</button>
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
                    </div>
                    <div className="foter3-text-2">
                        <button className='btn-style3'>Long Range AWD</button>
                        <button className='btn-style3'>Compare</button>
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
                    <div className="hero3-order">
                        <div className="hero3-btn">
                                <h2>Experience Model 3</h2>
                            <div className="last-btn">
                                <RightButton>ORDER NOW</RightButton>
                                <RightButton>COMPARE</RightButton>
                            </div>
                        </div>
                        <div className="last3-img">
                            <img src={MsOrderHero} alt="" />
                        </div>
                    </div>
                    <div className="navber3">
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

export default Model3;



const Itemtext =styled.div`
padding-top: 10vh;
text-align: center;
color: white;
h1{
    font-size: 35px;
}

`
const ButtonGroup =styled.div`
display: flex;
margin-bottom: 70px;
`
const Ranges =styled.div`
font-size: 35px;
color: white;
margin-right: 70px;
text-align: center;
cursor: pointer;
p{
    font-size: 15px;
}
`
const Range =styled.div`
color: #000;
margin-top: 25px;
text-align: center;
cursor: pointer;
`
const Rangas =styled.div`
font-size: 35px;
color: white;
margin-left: 75%;
width: 300px;
padding: 15px;
// align-items: right;
p{
    font-size: 15px;
    // text-align: center;
}
`
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
}
 `
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
}
`