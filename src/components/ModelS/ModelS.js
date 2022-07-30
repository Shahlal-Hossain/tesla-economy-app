import React from 'react';
import "./ModelS.css"
import map from './Model-S/map_newyork_bg-2x.jpg'
import Exterior1 from './Model-S/Model-S-Exterior-1.jpg'
import Exterior2 from './Model-S/Model-S-Exterior-2.jpg'
import Exterior3 from './Model-S/Model-S-Exterior-3.jpg'
import performance from './Model-S/model-s-performance-1.jpg'
import MSinterior1 from './Model-S/MS-Interior-1.jpg'
import MSinterior2 from './Model-S/MS-Interior-Grid.jpg'
import MsOrderHero from './Model-S/MS-Order-Hero-.jpg'
import Specs from './Model-S/Model-S-Specs-Hero-Desktop-LHD.jpg'
import Safety from './Model-S/MS-Safety.jpg'
import video1 from './Model-S/GV3RMO_Model.mp4'
import video2 from './Model-S/YMWZUY_MS-Interior-Carousel-1.mp4'
import video3 from './Model-S/IUSCEH_MS-Interior-3.mp4'
import video4 from './Model-S/SJB3NJ_Model_S_Plaid_-_Carousel.mp4'
import video5 from './Model-S/166R33_MS-Interior-Carousel-4.mp4'
import PlaidRange from './Model-S/Plaid-Range.mp4'
import MSvideoInterior3 from './Model-S/PIUCZZ_MS.mp4'
import Navigate from './Model-S/0GSNWC_Model_S_Navigate-1.mp4'
import change from './Model-S/A7I6LP_lane_change-2.mp4'
import summon from './Model-S/ZZNM9S_summon-3.mp4'
import parking from './Model-S/WM5XUG_parking-4.mp4'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import CheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Link } from 'react-router-dom';


const ModelS = () => {
    
    return (
        <div>
            <div className='main-modelS'>
                <Itemtext>
                    <h1> Model S</h1>
                    <h2> Plaid</h2>
                </Itemtext>
              <ButtonGroup>  
                <Ranges>
                    <h3>396mi</h3>
                    <p>Range (EPA est.)</p>
                </Ranges>
                <Ranges>
                    <h3>1.99s</h3>
                    <p> 0-60 mph*</p>
                </Ranges>
                <Ranges>
                    <h3> 200mph</h3>
                    <p> Top Speed†</p>
                </Ranges>
                <Ranges>
                    <h3> 1,020hp</h3>
                    <p> Peak Power </p>
                </Ranges>
                     <RightButton>Order Now</RightButton>
              </ButtonGroup>  
            </div>
            {/* ////////////// ( 1 ) ///////////////// */}
            <div className='main-1'>
                <div>
                    <Item>
                        <h3>Interior of the Future</h3>
                    </Item>
                </div>
            </div>
            {/* /////////////// ( 2 ) ///////////// */}
            <div className='main-2'> 
                <Carousel fade>
                    <Carousel.Item>
                        <video className="d-block w-75" autoPlay loop muted>
                            <source src={video1} type="video/mp4" />
                        </video>
                        <Carousel.Caption>
                            <h3>Yoke Steering</h3>
                            <p>A 17” touchscreen offers 2200 x 1300 resolution, true colors and exceptional <br /> responsiveness for gaming, movies and more.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video className="d-block w-75" autoPlay loop muted>
                            <source src={video2} type="video/mp4" />
                        </video>
                        <Carousel.Caption>
                            <h3>Console-Grade Gaming</h3>
                            <p>A bold new approach gives you a true connection to Model S, offering better steering feel<br /> and unobstructed views  of your dash and the road ahead. Tap the brake and Model S<br /> automatically  selects the  correct direction to start your trip.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video className="d-block w-75" autoPlay loop muted>
                            <source src={video3} type="video/mp4" />
                        </video>
                        <Carousel.Caption>
                            <h3>Console-Grade Gaming</h3>
                            <p> Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest <br /> consoles. Play from any seat with wireless controller and headset compatibility.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video className="d-block w-75" autoPlay loop muted>
                            <source src={video4} type="video/mp4" />
                        </video>
                        <Carousel.Caption>
                            <h3>Perfect Environment</h3>
                            <p> Air vents are hidden throughout the cabin, while tri-zone temperature controls,<br /> ventilated seats and HEPA filtration deliver the perfect environment.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video className="d-block w-75" autoPlay loop muted>
                            <source src={video5} type="video/mp4" />
                        </video>
                        <Carousel.Caption>
                            <h3>Redesigned Second Row</h3>
                            <p> Seating for three adults, with extra legroom, headroom and a stowable <br /> armrest with integrated storage and wireless charging</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> 
            {/* //////////( 3 )////////// */}
            <div className='main-3'>
            <div className='card-1'>
                <div className='img-1 ' >
                        <img  src={MSinterior1} alt="" />
                        <div className='item-3'>
                            <h2>Stay Connected</h2>
                            <p> Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.
                            </p>
                        </div>
                </div>

                <div className='videos-2'>
                    <div className='item-v'>
                         <h1> Immersive Sound </h1>
                          <p> A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
                    </div>

                    <video className="d-block w-75" autoPlay loop muted>
                        <source src={MSvideoInterior3} type="video/mp4" />
                    </video>
                </div>
                
                <div className='img-3 ' >
                        <img  src={MSinterior2} alt="" />
                        <div className='item-3'>
                            <h2>Room for Everything</h2>
                            <p> With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.
                            </p>
                        </div>
                </div>
            </div>
            </div>
            {/* ////////( 4 )//////// */}
            <div className="menu">
                <div className='main-4'>
                    <Itemtext>

                    </Itemtext>
                    <ButtonGroup>
                        <Range>
                            <h3>1,020hp</h3>
                            <p> Peak Power</p>
                        </Range>
                        <Range>
                            <h3>1,020hp</h3>
                            <p> Peak Power</p>
                        </Range>
                        <Range>
                            <h3>1,020hp</h3>
                            <p> Peak Power</p>
                        </Range>
                    </ButtonGroup>
                </div>
                <div className='Plaid-main'>
                    <div className='Plaid'>
                        <div>
                        <h5> Plaid</h5>
                        <h2> Beyond Ludicrous</h2>
                        <Button>Order Now</Button>
                        </div>
                        <div className='plaid-text'>
                        <p>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.</p>
                        </div>
                    </div>
                </div>
                <div className='main-a-4'>
                    <div className='Electric'>
                        <h2>Electric Powertrain</h2>
                        <p>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. <br /> New module and pack thermal architecture allows faster charging and gives you more power <br /> and endurance in all conditions.</p>
                    </div>
                    <div className='cart-img'>
                        <img src={performance} alt="" />
                    </div>

                    <div className='Plaid-cart'>
                        <div className='dual-motor'>
                        <h3>Model S </h3>
                        <p>Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.
                        </p>
                        <ButtonGroup>
                            <Rangas>
                                <h3>3.1 s</h3>
                                <p>0-60 mph</p>
                            </Rangas>
                            <Rangas>
                                <h3>405 mi</h3>
                                <p>Range (EPA est.)</p>
                            </Rangas>
                            <Rangas>
                                <h3>670 hp</h3>
                                <p>Peak Power</p>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='dual-motor'>
                        <h3>Model S Plaid</h3>
                        <p>Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.
                        </p>
                        <ButtonGroup>
                            <Rangas>
                                <h3>1.99 s*</h3>
                                <p>0-60 mph</p>
                            </Rangas>
                            <Rangas>
                                <h3>396 mi</h3>
                                <p>Range (EPA est.)</p>
                            </Rangas>
                            <Rangas>
                                <h3>1,020 hp</h3>
                                <p>Peak Power</p>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                    </div>
                </div>

                    <div className='main-5'> 

                    </div>
                 <div className='Plaid-main-1'>
                    <div className='Plaid-1'>
                        <div>
                        <h5> Exterior</h5>
                        <h3>Designed for Efficiency</h3>
                        <Button>Order Now</Button>
                        </div>
                        <div className='plaid-text'>
                        <p>With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.</p>
                        </div>
                    </div>
                </div>
                
                <div className='main-3'>
                    <div className='card-1'>
                        <div className='img-1 ' >
                        <div className='item-3'>
                                <h2>Relentless Performance</h2>
                                <p> Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</p>
                            </div> 
                            <img  src={Exterior2} alt="" />
                        </div>

                        <div className='img-3'>
                            <div className='item-v'>
                                   <h1>Optimized Aerodynamics</h1>
                                    <p> Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.</p>
                                    </div>
                                  <img src={Exterior1} alt="" />
                       </div>
                
                        <div className='videos-2'>
                            <img  src={Exterior3} alt="" />
                              <div className='item-3'>
                            <h2>Refined Styling</h2>
                            <p>An iconic silhouette meets refreshed, elegant proportions.</p>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='video-main'>
                    <div className="videos-range">
                        <div className=''>
                        <video className="videosWidth" autoPlay loop muted>
                        <source src={PlaidRange} type="video/mp4" /> 
                       </video>
                       <div className='GroupItem'>
                        <ButtonGroup>
                            <Rangas>
                                <h3>405mi</h3>
                                <p> Go anywhere with up to 405 miles of estimated range on a single charge </p>
                            </Rangas>
                            <Rangas>
                                <h3>15min</h3>
                                <p> Recharge up to 200 miles in 15 minutes at Supercharger locations  </p>
                            </Rangas>
                            <Rangas>
                                <h3>30,000+</h3>
                                <p> Superchargers placed along popular routes </p>
                            </Rangas>
                            <div>
                               <Button>Order Now</Button>
                            </div>
                        </ButtonGroup>
                        
                        </div>
                       </div>
                        <div className='Anywhere'>
                           <h5>Range</h5>
                           <h2>Go Anywhere</h2>
                            <p>Travel farther on a single charge than any other electric vehicle—and keep going with access to 30,000+ Superchargers globally. By combining up to 405 miles of estimated range with Tesla fast charging technology, you’ll spend less time charging and even more time on the road.</p>
                        </div>
                    </div>
                </div>

                <div className='Freedom'>
                    <div className='Electric'>
                        <h2>Freedom to Travel</h2>
                        <p>Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.</p>
                    </div>
                    <div className='cart-img'>
                        <img src={map} alt="" />
                    </div>

                    <div className='Plaid-cart'>
                        <div className='dual-motor'>
                        <ButtonGroup>
                            <Rangas>
                                <p>San Francisco to Los Angeles</p>
                                <h3>383 miles</h3>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='dual-motor'>
                        <ButtonGroup>
                            <Rangas>
                                <p>Berkeley to Lake Tahoe</p>
                                <h3>178 miles</h3>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='dual-motor'>
                        <ButtonGroup>
                            <Rangas>
                                <p>Manhattan to Boston</p>
                                <h3>211 miles</h3>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='dual-motor'>
                        <ButtonGroup>
                            <Rangas>
                                <p>Fort Lauderdale to  Orlando</p>
                                <h3>195 miles</h3>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                    </div>
                    <div className='btn-center'>
                        <Button>Order Now</Button>
                    </div>
                </div>
            <div className="safety">
                <div>
                    <h5>Safety</h5>
                    <h2>High Impact Protection</h2>
                    <p>Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.</p>
                    <div className='safety-btn'>
                    <Button>Order Now</Button>
                    </div>
                </div>
                <div>
                    <img className='img-safety' src={Safety} alt="" />
                </div>
            </div>
            <div className="">
                <div className="Autopilot">
                    <div className="iconDiv">
                        <div>
                            <h3> 360°</h3>
                            <p>Rear, side and forward-facing cameras <br/> provide maximum visibility</p>
                        </div>
                        <div>
                            <h3> 250m</h3>
                            <p>Powerful visual processing at up to 250 <br/> meters of range</p>
                        </div>
                        <div>
                            <h3><CheckedIco></CheckedIco></h3>
                            <p>Tesla Vision detects nearby cars, helps <br/> prevent potential collisions and assists <br/> with parking</p>
                        </div>
                    </div>
                </div>
                <div className='Plaid-main'>
                    <div className='Plaid'>
                        <div>
                        <h5>Autopilot</h5>
                        <h3>Future of Driving</h3>
                        <Button>Order Now</Button>
                        </div>
                        <div className='plaid-text'>
                        <p>Autopilot enables your car to steer, accelerate and brake automatically within its lane <br /> under your active supervision, assisting with the most burdensome parts of driving. With <br /> over-the-air software updates, the latest enhancements are available instantly.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Features">
                        <h3>Features</h3>
                        <p>Full Self-Driving capability introduces additional features and improves existing functionality to make your car more capable over time including:</p>
                    </div>

                    <div>
                        <Carousel fade>
                            <Carousel.Item>
                                <video className="d-block w-75" autoPlay loop muted>
                                    <source src={Navigate} type="video/mp4" />
                                </video>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <video className="d-block w-75" autoPlay loop muted>
                                    <source src={change} type="video/mp4" />
                                </video>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <video className="d-block w-75" autoPlay loop muted>
                                    <source src={summon} type="video/mp4" />
                                </video>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <video className="d-block w-75" autoPlay loop muted>
                                    <source src={parking} type="video/mp4" />
                                </video>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className='Plaid-cart'>
                        <div className='dual-motor'>
                        <ButtonGroup>
                            <Rangas>
                            <h4>Navigate on Autopilot</h4>
                                <p>Active guidance from on-ramp to off-ramp</p>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='dual-motor'>
                        <ButtonGroup>
                            <Rangas>
                                <h4>Auto Lane Change</h4>
                                <p>Automatically change lanes while driving on the highway</p>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='dual-motor'>
                        <ButtonGroup>
                            <Rangas>            
                                <h4>Summon</h4>
                                <p>Automatically retrieve your car</p>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='dual-motor'>
                        <ButtonGroup>
                            <Rangas>
                                <h4>Autopark</h4>
                                <p>Parallel and perpendicular parking with a single touch</p>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className="fotar">
                    <div className="foter-img">
                        <img src={Specs} alt="" />
                    </div>
                    <div className="foter-text">
                        <div><h1>Model S Specs</h1></div>
                        <button className='btn-style'>Model S Plaid</button>
                        <div>
                        <h2> </h2>
                            <h5>Range (EPA est.)</h5>
                            <h6>396 mi</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>1/4 Mile</h5>
                            <h6>9.23@155 mph trap speed</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Peak Power</h5>
                            <h6>1.020 hp</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Wheels</h5>
                            <h6>19" or 21"</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Cargo</h5>
                            <h6>28 cu ft</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Weight</h5>
                            <h6>4,766 lbs</h6>
                        </div>
                    </div>
                    <div className="foter-text-2">
                        <button className='btn-style'>Model S</button>
                        <div>
                        <h2> </h2>
                            <h5>Acceleration</h5>
                            <h6>1.99 s 0-60 mph*</h6>
                            <h6>*with rollout subtracted</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Top Speed</h5>
                            <h5>200 mph†</h5>
                            <h6>†when equipped with paid</h6>
                            <h6> hardware upgrades</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Drag Coefficient</h5>
                            <h6>0.208 Cd</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h5>Powertrain</h5>
                            <h6>Tri Motor</h6>
                        </div>
                        <div>
                        <h2> </h2>
                            <h4>Supercharging Max</h4>
                            <h6>250 kW</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero-order">
                        <div className="hero-btn">
                                <h2>Model S</h2>
                            <div className="last-btn">
                                <Button>ORDER NOW</Button>
                                <Button>COMPARE</Button>
                            </div>
                        </div>
                        <div className="last-img">
                            <img src={MsOrderHero} alt="" />
                        </div>
                    </div>
                    <div className="navber">
                        <nav>
                            <Link to='/'>Tesla © 2022</Link>
                            <Link to='/'>Privacy & Legal</Link>
                            <Link to='/'>Vehicle Recalls</Link>
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>News</Link>
                            <Link to='/'>Engage</Link>
                            <Link to='/'>Locations</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelS;

const CheckedIco =styled(CheckedIcon)``

const Itemtext =styled.div`
padding-top: 15vh;
text-align: center;
h1{
    font-size: 40px;
}
`
const ButtonGroup =styled.div`
display: flex;
margin-bottom: 40px;
`
const Ranges =styled.div`
font-size: 35px;
color: whitesmoke;
margin-right: 30px;
p{
    font-size: 15px;
    text-align: center;
}
`
const Range =styled.div`
font-size: 35px;
color: whitesmoke;
margin-right: 150px;
p{
    font-size: 15px;
    text-align: center;
}
`
const Rangas =styled.div`
font-size: 35px;
color: #000;
margin-right: 30px;
p{
    font-size: 15px;
    text-align: center;
}
`
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
:hover{
    background-color: antiquewhite;
    color: #000;
}
`
const Button =styled.button`
height: 40px;
width: 250px;
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
const Item =styled.div`
text-align: center;
margin-top: 60px;
h3{
    font-size: 25px;
    color:  whitesmoke;
}
`