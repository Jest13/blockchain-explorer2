import React from 'react'
import Image from "next/image";
import { RiSendPlaneFill} from "react-icons/ri";
import { TiSocialTwitter,
         TiSocialYoutube,
         TiSocialLinkedin,
         TiSocialFacebook,
         TiSocialInstagram
        } from "react-icons/all";

// IMPORT INTERN
import Style from '../styles/Footer.module.css';
import logo from '../img/ethereumm.png'

const Footer = () => {
    return (

            <div className={Style.footer}>
                <div className={Style.footer__box}>
                    <Image src={logo} alt={logo} width={100} height={100}/>
                </div>

                <div className={Style.footer__box}>
                    <div className={Style.footer__input}>
                        <input type="email" placeholder="email"/>
                        <RiSendPlaneFill/>
                    </div>
                </div>

                <div className={Style.footer__box}>
                    <div className={Style.social}>
                        <TiSocialInstagram/>
                        <TiSocialTwitter/>
                        <TiSocialYoutube/>
                        <TiSocialLinkedin/>
                        <TiSocialFacebook/>
                    </div>
                </div>

            </div>

    )
};


export default Footer;