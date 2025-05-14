import React from 'react'
import './Solution.css'
import oem from "../../pages/Solution/image/OEM.png"
import sample from "../../pages/Solution/image/Sample.png"
import Factory from "../../pages/Solution/image/Factory.png"
import { IoIosArrowForward } from "react-icons/io";
import { SlUserFemale } from "react-icons/sl";
import { GiFishingNet } from "react-icons/gi";


const Solution = () => {
  return (
    <div>
        <div className="First-Holder">

                <div className="Header">
                      <h1>Solutions</h1>
                </div>
            <div className="Solutions">
                <div className="gap">
                    <h4>Solutions</h4>
            <p>Services tailored to your business</p>
                </div>
                <div className="Full-folder">
                     <div className="First-oem">
                          <img src={oem} alt="" />
                          <div className="SP">
                             <h1>OEM/ODM</h1>
                                <p>If you ... <br />
                                     1. Are looking for OEM/ODM manufacturers in this industry.
                                        2. Need someone that can produce what you want and have a custom design printed to your specification.
                                        Then our OEM/ODM service is for you!</p>
                            <button type="onClick" className='oem'>Send Customized Request <IoIosArrowForward /></button>
                            </div>
                    </div>
                <div className="Sample-Order">
                    <img src={sample}  alt="" />
                    <div className="SK">
                    <h1>Sample Order</h1>
                    <p>If you… <br />
                        1. Want to purchase a sample order first.
                        2. Purchase a full order after validating the product quality.
                            Then our Sample Order service is for you!</p>
                            <button type="onClick" className='oem'>Sample Order <IoIosArrowForward /></button>
                            </div>
                </div>
            </div>
            <div className="Second-folder">
            <div className="Fact">
                          <img src={Factory} alt="" />
                          <div className="SO">
                             <h1>Factory Tour</h1>
                                <p>If you... <br />
                                        1. Would like more information about our company. <br />
                                            2. Would like to visit China and are interested in working with us. <br />
                                             Then our Factory Tour service is for you!</p>
                            <button type="onClick" className='oem'>Learn More....<IoIosArrowForward /></button>
                            </div>
                    </div>
            </div>
            </div>

      </div>
      <div className="Second-Header">
        <div className="Spl">
                <div className="Tinker">
                    <h4>Send your message to this supplier</h4>
                </div>
                <div className="fo">
                    <form action="">
                        <label htmlFor="email" className='Flex'><h4><span>*</span>From:</h4>
                            <input type="email" placeholder='Enter your email address' required />
                        </label>
                    </form>
                </div>
                <div className="fx">
                <form action="">
                        <label htmlFor="email" className='Flex'><h4><span>*</span>To:</h4><SlUserFemale />
                            <h3>Ms. Vicky</h3>
                        </label>
                        </form>
                </div>
                <div className="fr">
                <form action="">
                        <label htmlFor="email" className='Flex'><h4><span>*</span>Message:</h4>
                            <input type="text" placeholder='We suggest your product requirements and company information here. ' required />
                        </label>
                    </form>
                </div>
                <div className="hre">
                    <h4>Enter between 20 to 4,000 characters.</h4>
                    <div className="Fore">
                        <button type="submit" className='Win'>Send</button>
                        <h5> This is not what you are looking for?</h5>
                        <h6><a href="https://sunshine-electric.en.made-in-china.com/Solutions/?pv_id=1ir4ma7eg2&faw_id=1ir4mb4qs50a"><GiFishingNet />Post a Sourcing Request Now</a></h6>
                    </div>
                </div>
         </div>
      </div>
      
    </div>
  )
}

export default Solution
