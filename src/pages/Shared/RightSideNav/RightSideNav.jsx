import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";

import qZone1 from '../../../assets/swimming.png';
import qZone2 from '../../../assets/class.png';
import qZone3 from '../../../assets/playground.png';
import qZone4 from '../../../assets/bg.png';


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>   
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>   
                    Login With Github
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook  className="mr-2"></FaFacebook >
                     <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center border-x" href="">
                    <FaTwitter   className="mr-2"></FaTwitter  >
                     <span>Twiter</span>
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram  className="mr-2"></FaInstagram >
                     <span>Instagram</span>
                </a>
            </div>

            {/* q zone */}

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                <img src={qZone4} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;