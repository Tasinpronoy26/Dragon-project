import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../../Pages/Qzone/Qzone';
import img4 from '../../assets/bg.png'

const RightSide = () => {
    return (
        <div>
            <div>
                <h4>Log in with</h4>
                <Button className='mb-2' variant="outline-primary"><FaGoogle className='m-2'></FaGoogle>Sign in with Google</Button>
                <Button variant="outline-secondary"><FaGithub className='m-2'></FaGithub>Sign in with Github</Button>
            </div>

            <div className='mt-4'>
                <h4>Find Us On</h4>
                <ul class="list-group mt-3">
                    <li class="list-group-item"><FaFacebook className='text-primary m-3'></FaFacebook>Facebook</li>
                    <li class="list-group-item"><FaTwitter className='text-primary m-3'></FaTwitter>Twitter</li>
                    <li class="list-group-item"><FaInstagram className='text-danger m-3'></FaInstagram>Instagram</li>
                </ul>
            </div>
            <div className='mt-4'>
                <Qzone></Qzone>
            </div>
            <div style={{ position: "relative" }} className='mt-4 mb-5'>
                <img src={img4} alt="" />
                <div className='text-center' style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <h1 className='text-white mb-3'>Create an
                        <br /> Amazing <br /> Newspaper</h1>
                    <p className='text-white mt-2'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>

            </div>
        </div>
    );
};

export default RightSide;