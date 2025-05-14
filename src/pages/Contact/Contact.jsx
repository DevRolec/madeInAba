import React from 'react'
import './Contact.css';
import { TbTargetArrow } from "react-icons/tb";
import devrolec from '../../assets/devrolec.jpg';

const Contact = () => {
  return (
<div className="body">
    <div className='body1'>
         <p className='firsthead'>Send your message to this supplier</p>

         <div className="form1">

        <label htmlFor="from"><span className='asterisk'>*</span>From:</label>
        <input type="text" id='from' name='text'  placeholder='Enter your email address '/>

        </div>

        <div className="form2">

        <div><label htmlFor="To"><span className='asterisk'>*</span>To:</label></div>
        <div className='dev'><img className='dev1' src={devrolec} alt="" /></div>
        <div><p className='devr'>Mr. Roland</p></div>
    
        </div>


        <div className="msgtext">

        <div className="message">
        <label htmlFor="message"><span className='asterisk'>*</span>Message:</label>
        </div>

        <div className="textarea">
        <textarea id="message" name="message" rows="4" cols="50" placeholder='We suggest you detail your product requirement and company information here'></textarea>
        <p className='ta'>Enter between 20 to 4,000 characters.</p>
        
        <div className="stp">

            <div className="btn">
            <button className='btns' type="submit">Send</button>
            </div>

            <div className="this">
                <p>This is not what you are looking for?</p>
            </div>

            <div className="target">
                <TbTargetArrow className='targ'/>
            </div>

            <div className="post">
                <p><a href="#">Post a Sourcing Request Now</a></p>
            </div>
        </div>
        </div>

        </div>

        </div>
    </div>
  )
}

export default Contact