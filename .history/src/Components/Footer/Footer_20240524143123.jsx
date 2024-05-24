// import React from "react";
// import styles from "./Footer.module.css";
// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light py-4">
//       <div className={styles.container}>
//         <div className="row">
//           <div className={styles.FooterHere}>
//             <div className="col-lg-12">
//               <p>Questions? Contact us </p>
//               <ul>
//                 <li>FAQ</li>
//                 <li>Investor Relations</li>
//                 <li>Privacy</li>
//                 <li>Speed Test</li>
//                 dropdown
//                 <li>Netflix Pakistan</li>
//               </ul>
//             </div>

//             <div className="col-lg-12">
//               <ul>
//                 <li>Help Center</li>
//                 <li>Jobs</li>
//                 <li>Cookie Preferences</li>
//                 <li>Legal Notices</li>
//               </ul>
//             </div>

//             <div className="col-lg-12 ">
//               <ul>
//                 <li>Account</li>
//                 <li>Ways to Watch</li>
//                 <li>Corporate Information</li>
//                 <li>Only on Netflix</li>
//               </ul>
//             </div>

//             <div className="col-lg-12 ">
//               <ul>
//                 <li>Media Center</li>
//                 <li>Terms of Use</li>
//                 <li>Contact Us</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Address: 1234 Street Name, City, State, 12345</li>
              <li>Email: info@example.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
            <div>
              <a href="#" className="text-light me-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Your Website Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
