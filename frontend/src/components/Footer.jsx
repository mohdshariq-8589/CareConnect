import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-48" src={assets.logo} alt="CareConnect logo" />
          <p className="text-sm text-gray-400">
            CareConnect is your trusted digital companion for seamless doctor
            appointments and health record management. Empowering patients and
            healthcare providers with smarter, faster, and more connected care.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="mailto:mohdshariq8589@gmail.com">
                mohdshariq8589@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919453218589">+91 9453218589</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} CareConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
