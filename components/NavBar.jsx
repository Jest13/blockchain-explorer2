import React, {useState, useEffect, useContext }from 'react'
import Image from "next/image";
import axios from "axios";
import Link from "next/link";


//IMPORT INTERNE
import ethereum from '../img/ethereum.png'
import blockchain from '../img/blockchain.png'

import Style from "../styles/NavBar.module.css"
import cors from "cors";
import App from "next/app";


const Navbar = () => {

    const [userAccount, setUserAccount] = useState("");
    const [Balance, setBalance] = useState("");
    const [count, setCount] = useState("");
    const [openModele, setOpenModele] = useState(true);
    const [price, setPrice] = useState([]);
    const [etherSupply, setEtherSupply] = useState([]);
    const [updatedPriceDate, setUpdatedPriceDate] = useState("");

    const getEtherPrice = async() => {
        try{
            const API_ETHER_KEY = "J7S6H859JJRE5RZ31C5I5E58I5GI3Y6DHX";
            axios.get(`https://api.etherscan.io/api/?module=stats&action=ethprice&apikey=${API_ETHER_KEY}`,{ crossDomain: true })
                .then((response)=>{
                  setPrice(response.data.result);
                  //console.log(response.data.result);
                  // console.log(price);

                  const timestamp = Number(response.data.result.ethusd_timestamp);
                  //console.log(timestamp);

                  const date = new Date(timestamp)
                    setUpdatedPriceDate("Update:" +
                        date.getHours() +
                        ":" +
                        date.getMinutes() +
                        ":" +
                        date.getSeconds()
                    );
                });
           // console.log(updatedPriceDate);

            axios.get(`https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${API_ETHER_KEY}`)
                .then((response)=>{
                   setEtherSupply(response.data.result);
                });
        } catch (error) {
            console.log(error)
        }
    };

    //connexion api Metamask
    // check si le compte existe

    const checkIfAccountExist = async()=>{
        try {
            if(!window.ethereum) return console.log("Please install Metamask ");
            const accounts = await window.ethereum.request({method: "eth_account"});
            if (accounts.length) {
                setUserAccount(accounts[0]);
                console.log(userAccount);
            }
        }catch (error){
            console.log(error);
        }
    };



    useEffect(() =>{
        checkIfAccountExist();
        getEtherPrice();
    }, []);

    return (
            <div>
                <div className={Style.navbar}>
                        <div className={Style.navbar__container}>
                        <div className={Style.left}>
                            <Link href="/">
                                <div>
                                <h1 className={Style.desktop}>Blockchain Explorer</h1>
                                <h1 className={Style.mobile}>
                                    <Image src={blockchain} alt="logo" width={150} height={50}/>
                                </h1>
                            </div>
                        </Link>
                    </div>
                            <div className={Style.right}>

                            </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar