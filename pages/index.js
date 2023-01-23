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
    const {yourBlockTrans, transaction} = useContext(Etherscan);

    const [userAccount, setUserAccount] = useState('');

    const convertIntoETH = (amount) => {
        const ETH = ethers.utils.formatUnits(amount, "ether")
        return ETH;
    };

    const accountAddress = (event) => {
        event.preventDefault();
        let address = document.getElementById("accountAddress").value.trim();
        setUserAccount(address);
        router.push(`/account?${address}`);
        address = "";
    };


    console.log(yourBlockTrans);

    return (
        <div>
            <div className={Style.header}>
                <form className={Style.accountAddress}>
                    <input type="text" placeholder="Ether Account address" id="accountAddress"/>
                    <Link href={{pathname: "/account", query: userAccount}}>
                        <SiMinutemailer onClick={(event) => accountAddress(event)}/>
                    </Link>
                </form>
            </div>

            <div className={Style.container}>
                <div className={Style.container__box}>
                    <h3>Latest Blocks</h3>
                    <div className={Style.container__block}>
                        {yourBlockTrans.map((el, i) => (
                            <div className={Style.oneBlock} key={i + 1}>
                                <p></p>
                                <div className={Style.block}>
                                    <div className={Style.info}>
                                        <p className={Style.bk}>Bk</p>
                                        <Link href={{pathname: "/block", query: el.number}}>
                                            {el.number}
                                        </Link>
                                    </div>

                                    <p>{el.timestamp}</p>
                                </div>
                                <div>
                                    <div className={Style.miner}>
                                        <p>
                                            <samp>Miner: &nbsp;&nbsp;
                                                <Link className={Style.link}
                                                      href={{pathname: '/account/', query: el.miner}}>
                                                    {el.miner.slice(0, 35)}...
                                                </Link>
                                            </samp>
                                        </p>
                                        <samp>
                                            <Link href={{pathname: "/account", query: el.number}}>
                                                {el.transactions.length}
                                            </Link>
                                            &nbsp;TNS in 3Sec
                                        </samp>
                                    </div>
                                    <div className={Style.reward}>
                                        <p>{convertIntoETH(el.baseFeePerGas)} <span>ETH</span></p>
                                        <Image src={ethereumm}
                                               className={Style.eth}
                                               alt="ETHER LOGO"
                                               width={10}
                                               height={10}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={Style.container__box}>
                    <h3>Latest Transaction</h3>
                    <div className={Style.container__block}>
                        {transaction.map((el, i) => (
                            <div className={Style.oneBlock} key={i + 1}>
                                <div>
                                    <div className={Style.info}>
                                        <div>
                                            <p className={Style.bx}>TS</p>
                                        </div>
                                        <Link href={{pathname: "/transaction", query: el}}>
                                            Hash:&nbsp; {el.slice(0, 55)}..
                                        </Link>
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