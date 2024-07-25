import React from 'react';
import '../HireUs/Form.css';
import Image from "../HireUs/img/handshake-close-up-executives 1.png";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonIcon from '@mui/icons-material/Person';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Swal from 'sweetalert2';

const JoinUs = () => {
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        console.log("form data ", e.target);
        emailjs.sendForm('service_xegr7op', 'template_fmd2bve', e.target, 'w6YrJF19aGQUp7J0G')
            .then((result) => {
                Swal.fire({
                    icon: "success",
                    title: "Thank you for Submitting Our Team will Connect with you soon.",
                    showConfirmButton: false,
                    timer: 5500
                });
                console.log("form data ", result)
                window.location.reload()
                //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Please try again Maximum 52 kb file can be attached in the attachment",
                    showConfirmButton: false,
                    timer: 5500
                });
            });
    }
    const [input, setInput] = useState({
        name: "",
        email: "",
        file: "",
        description: "",
    })

    const resetForm = (e) => {
        setInput({ ...input, [e.target.name]: '' })
    }
    const changedata = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (

        <div className='main-inner'>
            <div className='inner-main shadow-lg'>
                <div className='row-1'>
                    <img src={Image} alt="" width={400} />
                    {/* <div className='row-social'>
                    <EmailIcon sx={{ color: "white",my:1}}/>
                    <FacebookOutlinedIcon sx={{ color: "white" ,my:1}}/>
                    <TwitterIcon sx={{ color: "white" ,my:1}}/>
                </div> */}
                    <div className='main-row'>
                        {/* <div className='inner-row'>
                    <LocationOnOutlinedIcon/>
                    <p>JAGATSINGHPUR , ODISHA , 754103</p>
                </div> */}
                        <div className='inner-row'>
                            <EmailOutlinedIcon />
                            <p>hrdepartment@kjxsofttech.com</p>
                        </div>
                        <div className='inner-row'>
                            <CallOutlinedIcon />
                            <p>(+91) 9661087999</p>
                        </div>
                    </div>
                </div>
                <div className='row-2'>
                    <h3>Join Our Growing Team</h3>
                    <form action="" onSubmit={sendEmail}>
                        <div className='inner-row-2'>
                            <div class="inputWithIcon">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name='name' required onChange={changedata} />

                                <PersonIcon sx={{ mt: -11, ml: 1 }} />
                            </div>

                            <div class="inputWithIcon">
                                <label htmlFor="Email">Email</label>
                                <input type="email" name='email' required onChange={changedata} />
                                <EmailIcon sx={{ mt: -11, ml: 1 }} />
                            </div>

                            <div class="col-sm-12 mb-3">
                                <label for="formFile" class="form-label">Resume Attachment</label>
                                <input class="form-control" name='upload-image' type="file" id="formFile" onChange={changedata} />
                            </div>
                            <div className=" col-sm-12 mb-3">
                                <label for="inputWebsite">Description</label>
                                <textarea type="text" name='description' rows={5} className="form-control" id="inputWebsite" onChange={changedata} />
                            </div>
                            <button type="submit" className="form-btn btn-dark-blue">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JoinUs;