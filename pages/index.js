import React, {useEffect, useState, useContext} from 'react'
import {useRouter} from "next/router";
import Image from "next/image";
import {ethers} from "ethers";
import Link from "next/link";
import {SiMinutemailer} from "react-icons/all";

// IMPORT INTERNE

import {Etherscan} from "../Context/Ether";
import Style from "../styles/index.module.css";
import ethereumm from "../img/ethereumm.png";

const index = () => {
    const router = useRouter();
    const {data, yourBlockTrans} = useContext(Etherscan);

    const [userAccount, setUserAccount] = useState('');

    return (
        <div>
            <div className={Style.header}>
                <form className={Style.accountAddress}>
                    <input type="text" placeholder="Ether Account address" id="accountAddress"/>
                    <Link href={{pathname: "/account", query: userAccount}}>
                            <SiMinutemailer/>
                    </Link>
                </form>
            </div>

            <div className={Style.container}>
                <div className={Style.container__box}>
                    <h3>Latest Blocks</h3>
                    <div className={Style.container__block}>

                        {yourBlockTrans.map((el, i) => (
                        <div className={Style.oneBlock} key={i + 1}>
                            <div className={Style.block}>
                                <div className={Style.info}>
                                    <p>BBBBBBBBBBBBBBBk</p>
                                    <Link href={{pathname: "/block", query: el.number}}
                                    >{el.number}
                                    </Link>
                                </div>
                                <p>{el.timestamp}</p>
                            </div>
                            <div>
                                <div className={Style.miner}>
                                    <p>
                                        <samp>Miner: &nbsp;&nbsp;
                                        <Link className={Style.link} href={{pathname: '/account/', query:el.miner}}>
                                           <a> {el.miner.slice(0, 35)}...</a>
                                        </Link>
                                        </samp>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
);
};


export default index;