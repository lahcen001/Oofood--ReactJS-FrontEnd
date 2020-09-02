import React, { Component } from 'react'
import logo  from './logo.svg'
import './css/footer.scss'
import { FaComments } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';
import { AiFillStar, AiFillPhone } from 'react-icons/ai';
// import { AiFillStar } from 'react-icons/ai';
import { FaEllipsisH } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import {AiFillLinkedin } from 'react-icons/ai';
import {AiFillFacebook } from 'react-icons/ai';
export class Footer extends Component {
    render() {
        return (
            <footer>
            <div class="container">
              <div class="row">
                <div class="col-md-4 footer-column">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <span class="footer-title">Accueil</span>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">Commander</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">Register</a>
                    </li>
                    
                  </ul>
                </div>
                <div class="col-md-4 footer-column">
                 
<h4 className="text-white">COORDONNÉES</h4><p className="text-white">100 Boulevard Zerktouni, Maârif ,
20000  Casablanca</p>
<ul class="list-inline social-buttons mt-4 text-center">
                    <li class="list-inline-item">
                      <a href="#">
                    <IoLogoTwitter/>
                    </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                      <AiFillFacebook/>
                    </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                     <AiFillLinkedin/>
                    </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 footer-column">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <span class="footer-title"> Contact & Support</span>
                    </li>
                    <li class="nav-item">
                      <span class="nav-link text-white"><AiFillPhone/> 05 22 77 81 58</span>
                    </li>
                   
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#"><BsEnvelopeFill/> Contact us</a>
                    </li>
                   
                  </ul>
                </div>
              </div>
           
             
              
              <div class="row text-center">
                <div class="col-md-4 box">
                  <span class="copyright quick-links">Copyright &copy; BestMenu  By <a href="http://lahcen-elhanchir.com" class="text-white">lahcen-elhanchir</a> <script>document.write(new Date().getFullYear())</script>
                  </span>
                </div>
                <div class="col-md-4 box ">
                 
                </div>
                <div class="col-md-4 box">
                  <ul class="list-inline quick-links">
                    <li class="list-inline-item text-white">
                      <a href="#" class="text-white">Privacy Policy</a>
                    </li>
                    <li class="list-inline-item text-white">
                      <a href="#" class="text-white">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
              
        )
    }
}

export default Footer
