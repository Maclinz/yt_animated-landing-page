import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import logo from '../img/urbanfitnewlogo (1).png';

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-con">
                    <div className="logo-con">
                       <div className="logo-items">
                        <img src={logo} alt="" />
                            <p>
                                Copyright @2021 Urbanfit. <br />
                                All rights reserved.
                            </p>
                       </div>
                    </div>
                    <ul className="botton-nav">
                        <div className="links1">
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Policy</a>
                            </li>
                        </div>
                        <div className="links2">
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Affiliate</a>
                            </li>
                        </div>
                        <div className="links3">
                            <li>
                                <a href="#">Terms of use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    padding: 0 18rem;
    background-color: #99ef11;
    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
    .footer-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .logo-con{
        display: flex;
        align-items: center;
        img{
            width: 90px;
        }
    }

    .botton-nav{
        display: flex;
        justify-content: space-between;
        li{
            color: #16194F;
        }
    }
`;

export default Footer
