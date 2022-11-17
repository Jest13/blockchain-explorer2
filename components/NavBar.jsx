import React, {useEffect, useState} from 'react'
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import {mdOutlineClose} from 'react-icons/md';


//IMPORT INTERNE
import ethereumm from '../img/ethereumm.png'
import blockchain from '../img/blockchain.png'
import user from '../img/avatar.png'

import Style from "../styles/NavBar.module.css"


const Navbar = () => {

    const [userAccount, setUserAccount] = useState("");
    const [Balance, setBalance] = useState("");
    const [count, setCount] = useState("");
    const [openModel, setOpenModel] = useState(true);
    const [price, setPrice] = useState([]);
    const [etherSupply, setEtherSupply] = useState([]);
    const [updatedPriceDate, setUpdatedPriceDate] = useState("");

    //ouvrir la modal
    const openUserInfo = () => {
        if (openModel) {
            setOpenModel(false);
        } else if (!openModel) {
            setOpenModel(true);
        }
    };

    const getEtherPrice = async () => {
        try {
            const API_ETHER_KEY = "J7S6H859JJRE5RZ31C5I5E58I5GI3Y6DHX";
            axios.get(`https://api.etherscan.io/api/?module=stats&action=ethprice&apikey=${API_ETHER_KEY}`, {crossDomain: false})
                .then((response) => {
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

            axios.get(`https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${API_ETHER_KEY}`, {crossDomain: false})
                .then((response) => {
                    setEtherSupply(response.data.result);
                });
        } catch (error) {
            console.log(error)
        }
    };

    //connexion api Metamask
    // check si le compte existe
    // ça a l'air de marcher mais ça n'affiche pas l'adresse du wallet ? wtf

    const checkIfAccountExist = async () => {
        try {
            if (!window.ethereum) return console.log("Please install Metamask ");

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (accounts.length) {
                setUserAccount(accounts[0]);
            }
            console.log(userAccount);

        } catch (error) {
            console.log(error);
        }
    };

    //CONNECTER LE WALLET
    const connectwallet = async () => {


        window.onload = (event) => {
            isConnected();
        };

        async function isConnected() {
            const accounts = await ethereum.request({method: 'eth_accounts'});
            if (accounts.length) {
                console.log(`You're connected to: ${accounts[0]}`);
            } else {
                console.log("Metamask is not connected");

            }

        }

        console.log(isConnected());


    }


    useEffect(() => {
        checkIfAccountExist();
        getEtherPrice();
        connectwallet();
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
                        {userAccount.length ? (
                            <div className={Style.connected}>
                                <button onClick={() => openUserInfo()}>
                                    Acc: {userAccount.slice(0, 10)}...
                                </button>

                            {
                                openModel ? (
                                    <div className={Style.userModal}>
                                        <div className={Style.user_box}>
                                            <div className={Style.closeBtn}>
                                                <mdOutlineClose onClick={() => openUserInfo()}/>
                                            </div>
                                            <Image src={user} alt={User} width={50} height={50}/>
                                            <p>Acc: &nbsp; {userAccount}</p>
                                            <p>Balance: &nbsp; {balance} ETH</p>
                                            <p>Total Transaction: &nbsp; count ETH</p>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                                    </div>
                            ) : (
                            <button onClick={()=> connectwallet()}>Connect Wallet</button>
                            )}
                        </div>
                </div>
            </div>
        </div>
    );
};


export default Navbar;