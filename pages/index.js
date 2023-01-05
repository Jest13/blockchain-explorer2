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

    console.log(yourBlockTrans);

    return <div>
        <div className={Style.header}>
            <form className={Style.accountAddress}>
                <input type="text" placeholder={"Ether Account address"} id={"accountAddress"}/>
                <Link href={{pathname: "/account", query: userAccount}}>
                    <a>
                        <SiMinutemailer/>
                    </a>
                </Link>
            </form>
        </div>

        // MAIN SCTION HOME PAGE

        <div className={Style.container}>
            <div className={Style.container__box}>
                <h3>Latest Blocks</h3>
                <div className={Style.container__block}>
                    {yourBlockTrans.map((el, i) => (
                        <div className={Style.oneBlock} key={i + 1}>
                            <div className={Style.block}>
                                <div className={Style.info}>
                                    <p className={Style.bk}>bk</p>
                                    <Link href={{pathname: "/block", query: el.number}}
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>;

};


export default index;