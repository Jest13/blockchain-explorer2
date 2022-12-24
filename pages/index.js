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
    const {data} = useContext(Etherscan);
    return <div><h1>{data}</h1></div>;

};


export default index;