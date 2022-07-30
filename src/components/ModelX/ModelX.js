import React from 'react';
import './ModelX.css'
import styled from 'styled-components';
import MXmap from './ModelX/mxMap.jpg';
import MXInterior1 from './ModelX/MX-Interior-Carousel-A-3.jpg';
import MXInterior2 from './ModelX/MX-Interior-Carousel-B-4.jpg';
import MXInterior3 from './ModelX/MX-Interior-Carousel-C-5.jpg';
import MXInterior4 from './ModelX/MX-Interior-Carousel-D-6.jpg';
import MXInteriorC1 from './ModelX/MX-Interior-Grid-A-7.jpg';
import MXInteriorC2 from './ModelX/MX-Interior-Grid-B-8.jpg';
import MXInteriorC3 from './ModelX/MX-Interior-Grid-C-9.jpg';
import MXperformance from './ModelX/mx-performance-tri-motor-11.jpg';
import MXExteriorC5 from './ModelX/Model-X-Exterior-Grid-A-14.jpg';
import MXExteriorC6 from './ModelX/Model-X-Exterior-Grid-B-15.jpg';
import MXExteriorC7 from './ModelX/Model-X-Exterior-Grid-C-16.jpg';
import MXSpecs from './ModelX/Model-X-Specs-20.jpg'
import MXOrde from './ModelX/Model-X-Order-Hero-21.jpg'
import MXVideos1 from './ModelX/model-1.mp4'
import MXVideos2 from './ModelX/model-2.mp4'
import MXVideos3 from './ModelX/model-3.mp4'
import MXVideos4 from './ModelX/model-4.mp4'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { Link } from 'react-router-dom';

const ModelX = () => {

    return (
        <div>
            {/* (pages--1) */}
            <div className='pages-x1'>
                <Itemtext>
                    <h1> Model X</h1>
                    <h4> Plaid</h4>
                </Itemtext>
              <ButtonGroup>  
                <Ranges>
                    <h3>396mi</h3>
                    <p>Range (EPA est.)</p>
                </Ranges>
                <Ranges>
                    <h3>2.5s</h3>
                    <p> 0-60 mph*</p>
                </Ranges>
                <Ranges>
                    <h3>9.9s</h3>
                    <p> 1/4 Mile</p>
                </Ranges>
                <Ranges>
                    <h3> 1,020hp</h3>
                    <p> Peak Power </p>
                </Ranges>
                     <RightButton>Order Now</RightButton>
              </ButtonGroup>  
            </div>
             {/* (pages--2) */}
            <div className='pages-x2'>

                <h3>All-New Interior</h3>

            </div>
            {/* (pages--3) */}
            <div className='pages-x3'> 
                <Carousel fade>
                    <Carousel.Item>
                        <img className="d-block w-75" src={MXInterior1} alt="First slide"/>
                        <Carousel.Caption>
                            <h3>Cinematic Experience</h3>
                            <p>A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and <br /> exceptional responsiveness for gaming, movies and more.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-75" src={MXInterior2} alt="First slide"/>
                        <Carousel.Caption>
                            <h3>Focus on Driving</h3>
                            <p>The ultimate focus on driving: no stalks, no shifting. Model X is the best SUV to drive, and <br /> the best SUV to be driven in.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                       <img className="d-block w-75"src={MXInterior3} alt="First slide"/>
                        <Carousel.Caption>
                            <h3>Perfect Environment</h3>
                            <p>Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated<br /> front seats and HEPA filtration come standard.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                       <img className="d-block w-75" src={MXInterior4} alt="First slide"/>
                        <Carousel.Caption>
                            <h3>Spacious Cabin</h3>
                            <p>Model X offers a spacious cabin with the world's largest panoramic windshield and seating <br /> for up to seven.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* (pages--4) */}
            <div className='pages-x4'>
              <div className='card-x'>
                <div className='img-1 ' >
                <img  src={MXInteriorC1} alt="" />
                        <div className='item-3'>
                            <h2>Stay Connected</h2>
                            <p> Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.
                            </p>
                        </div>
                </div>
                <div className='img-2'>
                    <div className='item-v'>
                         <h1> Immersive Sound </h1>
                          <p> A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
                    </div>
                    <img src={MXInteriorC2} alt="" />
                </div>
                <div className='img-3 ' >
                        <img  src={MXInteriorC3} alt="" />
                        <div className='item-3'>
                            <h2>Room for Everything</h2>
                            <p> With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.
                            </p>
                        </div>
                </div>
              </div>
            </div>
            {/* (pages--5) */}
                <div className='pages-x5'>
                    <Itemtext>

                    </Itemtext>
                    <ButtonGroup>
                        <Range>
                            <h3>1,020hp</h3>
                            <p> Peak Power</p>
                        </Range>
                        <Range>
                            <h3>9.9s</h3>
                            <p>1/4 mile</p>
                        </Range>
                        <Range>
                            <h3>2.5s</h3>
                            <p>0-60 mph</p>
                        </Range>
                    </ButtonGroup>
                </div>
                <div className='Plaid-x'>
                    <div className='Plaid'>
                        <div>
                        <h5> Plaid</h5>
                        <h2> Beyond Ludicrous</h2>
                        <Button>Order Now</Button>
                        </div>
                        <div className='plaidText'>
                        <p>With the most power and quickest acceleration of any SUV, Model X Plaid is the highest <br /> performing SUV ever built. All Model X powertrains, with updated battery architecture, can <br /> deliver instant torque at any speed.</p>
                        </div>
                    </div>
                </div>
                {/* (pages--6) */}
                <div className='pages-x6'>
                    <div className='Electric-x'>
                        <h2>Electric Powertrain</h2>
                       <p> Model X platforms unite powertrain and battery technologies for unrivaled performance, range and <br /> efficiency. New module and pack thermal architecture allows faster charging and gives you more power <br /> and endurance in all conditions.</p>
                    </div>
                    <div className='cart-img'>
                        <img src={MXperformance} alt="" />
                    </div>

                    <div className='Plaid-cart'>
                        <div className='dual-motor'>
                        <h3>Model X </h3>
                        <p>Dual Motor All-Wheel Drive platform has the longest range, and now delivers incredible power and acceleration.
                        </p>
                        <ButtonGroup>
                            <Rangas>
                                <h3>3.8 s</h3>
                                <p>0-60 mph</p>
                            </Rangas>
                            <Rangas>
                                <h3>348 mi</h3>
                                <p>Range (EPA est.)</p>
                            </Rangas>
                            <Rangas>
                                <h3>670 hp</h3>
                                <p>Peak Power</p>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='dual-motor'>
                        <h3>Model X Plaid</h3>
                        <p>Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon fiber-sleeved rotor that maintains peak power output all the way to top speed.
                        </p>
                        <ButtonGroup>
                            <Rangas>
                                <h3>2.5 s*</h3>
                                <p>0-60 mph</p>
                            </Rangas>
                            <Rangas>
                                <h3>333 mi</h3>
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
                {/* (pages--7) */}
                <div className='pages-x7'>
                    <div className="item-7">
                        <div className="item-7-text">
                            <h5>Utility</h5>
                            <h2>Even More Capable</h2>
                            <p>With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.</p> 
                            <div className="btn-7">
                            <Button>Order Now</Button>
                            </div>
                        </div>
                        <div className="imgPages-7">
                            <Itemtext>

                            </Itemtext>
                        <ButtonGroup>
                            <Range>
                                <h3>91ft³</h3>
                                <p>Storage capacity</p>
                            </Range>
                            <Range>
                                <h3>5000lbs</h3>
                                <p>Towing capacity</p>
                            </Range>
                            <Range>
                                <h3> <ElectricCarIcon></ElectricCarIcon> </h3>
                                <p>Falcon Wing doors</p>
                            </Range>
                        </ButtonGroup>
                        </div>
                    </div>
                </div>
                {/* (pages--8) */}
                <div className="pages-x8">
                    <Itemtext>
                    </Itemtext>
                    <ButtonGroup>
                        <Range>
                        </Range>
                        <Range>
                            <h3>0.24 cd</h3>
                            <p>Lowest-drag SUV on Earth</p>
                        </Range>
                        <Range>
                            <h3> </h3>
                            <p>Refined exterior styling</p>
                       </Range>
                    </ButtonGroup>
                </div>
                <div>
                    <div className='item-8'>
                        <div className='Plaid-x8'>
                        <h5> Exterior</h5>
                        <h3>Designed for Efficiency</h3>
                        <Button>Order Now</Button>
                        </div>
                        <div className='text-x8'>
                        <p>With the lowest drag coefficient of any SUV, Model X is built for speed and range. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.</p>
                        </div>
                    </div>
                </div>
                 {/* (pages--9) */}
                <div className='pages-x9'>
                    <div className='img-x1' >
                        <div className='item-x1'>
                            <h2>New Wheels and Tires</h2>
                            <p>New performance tires deliver better handling and ride quality with lower rolling resistance and are paired with new aerodynamic wheels for an updated look.</p>
                        </div> 
                        <img className='imgCard' src={MXExteriorC5} alt="" />
                    </div>
                    <div className='img-x2'>
                        <img className='imgCard' src={MXExteriorC6} alt="" />
                        <div className='item-x2'>
                            <h2>Optimized Aerodynamics</h2>
                            <p>Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth.</p>
                        </div>
                    </div>
                    <div className='img-x3' >
                        <div className='item-x1'>
                            <h2>Refined Styling</h2>
                            <p>Exterior design combines an iconic look with elegant proportions.</p>
                        </div> 
                        <img className='imgCard' src={MXExteriorC7} alt="" />
                    </div>
                </div>
            {/* (pages--10) */}
            <div className="">
                <div className='pages-x7'>
                    <div className="item-7">
                        <div className="pages-x10">
                            <Itemtext>

                            </Itemtext>
                        <ButtonGroup>
                            <Range>
                                <h3>348 mi</h3>
                                <p>Go anywhere with up to 348 miles of estimated range on a single charge</p>
                            </Range>
                            <Range>
                                <h3>175 mi</h3>
                                <p>Supercharge up to 175 miles in 15 minutes</p>
                            </Range>
                            <Range>
                                <h3>30,000+</h3>
                                <p>Superchargers placed along popular routes</p>
                            </Range>
                        </ButtonGroup>
                        </div>
                        <div className="item-7-text">
                            <h5>Range</h5>
                            <h2>Go Anywhere</h2>
                            <p>Travel farther on a single charge than any other electric SUV—and keep going with access to 30,000+ Superchargers globally. By combining up to 348 miles of estimated range with Tesla fast charging technology, you’ll spend less time charging and even more time on the road.</p> 
                            <div className="btn-7">
                            <Button>Order Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* (pages--11) */}
            <div className="pages-11">
                    <div className='Electric-x'>
                        <h2>Freedom to Travel</h2>
                       <p>Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.</p>
                    </div>
                    <div className='cart-img'>
                        <img src={MXmap} alt="" />
                    </div>

                    <div className='Plaid-cart'>
                        <div className='dual-motor'>
                            <h5>San Jose to Los Angeles</h5>
                            <ButtonGroup>
                            <Rangas>
                                <h3>340 miles</h3>
                            </Rangas>
                            </ButtonGroup>
                        </div>
                        <div className='dual-motor'>
                        <h5>Berkeley to Lake tahoe</h5>
                        <ButtonGroup>
                            <Rangas>
                                <h3>178 miles</h3>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='dual-motor'>
                        <h5>Manhattan to Boston</h5>
                        <ButtonGroup>
                            <Rangas>
                                <h3>211 miles</h3>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                        <div className='dual-motor'>
                        <h5>Fort Lauderdale to Orlando</h5>
                        <ButtonGroup>
                            <Rangas>
                                <h2>195 miles</h2>
                            </Rangas>
                        </ButtonGroup>
                        </div>
                    </div>
                    <div className="btnCenter">
                    <Button>LEARN MORE</Button>
                    </div>
            </div>
            {/* (pages--12) */}
            <div className="">
                <div className='pages-x7'>
                    <div className="item-7">
                        <div className="item-7-text">
                            <h5>Utility</h5>
                            <h2>Even More Capable</h2>
                            <p>With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.</p> 
                            <div className="btn-7">
                            <Button>Order Now</Button>
                            </div>
                        </div>
                        <div className="pages-x12">
                            <Itemtext>

                            </Itemtext>
                        <ButtonGroup>
                            <Range>
                                <h3>91ft³</h3>
                                <p>Storage capacity</p>
                            </Range>
                            <Range>
                                <h3>5000lbs</h3>
                                <p>Towing capacity</p>
                            </Range>
                            <Range>
                                <h3> <ElectricCarIcon></ElectricCarIcon> </h3>
                                <p>Falcon Wing doors</p>
                            </Range>
                        </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
            {/* pages--13 */}
            <div className="">
                <div className="pages-x13">
                    <div className="itemText-13">
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
                    <div className='item-8'>
                        <div className='Plaid-x8'>
                        <h5>Autopilot</h5>
                        <h3>Future of Driving</h3>
                        <Button>Order Now</Button>
                        </div>
                        <div className='text-x8'>
                        <p>Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* (pages--14) */}
                <div>
                    <div className='Electric-x'>
                        <h2>Features</h2>
                       <p>Full Self-Driving capability introduces additional features and improves existing functionality to make your car more capable over time including:</p>
                    </div>
                    {/* boo */}
                    <div >
                        <Carousel fade>
                            <Carousel.Item>
                                <video className="d-block w-75" autoPlay loop muted>
                                    <source src={MXVideos1} type="video/mp4" />
                                </video>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <video className="d-block w-75" autoPlay loop muted>
                                    <source src={MXVideos2} type="video/mp4" />
                                </video>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <video className="d-block w-75" autoPlay loop muted>
                                    <source src={MXVideos3} type="video/mp4" />
                                </video>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <video className="d-block w-75" autoPlay loop muted>
                                    <source src={MXVideos4} type="video/mp4" />
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
            {/* (pages--15) */}
            <div className="pages-x15">
                    <div className="foter-ximg">
                        <img src={MXSpecs} alt="" />
                    </div>
                    <div className="text-15">
                        <div><h1>Model X Specs</h1></div>
                        <button className='btn-15'>Model X Plaid</button>
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
                    <div className="text-2-15">
                        <button className='btn-15'>Model X</button>
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
                {/* (pages--16) */}
                <div>
                    <div className="hero-order">
                        <div className="hero-btn">
                                <h2>Model X</h2>
                            <div className="last-btn">
                                <Button>ORDER NOW</Button>
                                <Button>COMPARE</Button>
                            </div>
                        </div>
                        <div className="last-img">
                            <img src={MXOrde} alt="" />
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
            
    );
};

export default ModelX;


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
text-align: center;
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