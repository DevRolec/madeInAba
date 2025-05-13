import React from 'react'
import './Solution.css'
import oem from "../../pages/Solution/image/OEM.png"
import sample from "../../pages/Solution/image/Sample.png"
import Factory from "../../pages/Solution/image/Factory.png"


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
                            <button type="onClick" className='oem'>Send Customized Request </button>
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
                            <button type="onClick" className='oem'>Sample Order</button>
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
                            <button type="onClick" className='oem'>Learn More....</button>
                            </div>
                    </div>
            </div>
            </div>
           

      </div>

    </div>
  )
}

export default Solution
