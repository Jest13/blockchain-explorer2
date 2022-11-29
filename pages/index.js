import React,{useEffect, useState, useContext} from 'react'
import { useRouter} from "next/router";
import Image from "next/image";
import { ethers } from "ethers";
import Link from "next/link";
import { SiMinutemailer} from "react-icons/all";

// IMPORT INTERNE

import Style from "../styles/index.modul.css";
import ethereumm from "../img/ethereumm.png";

const index = () => {
  return (
      <div>
        <p>Home</p>
      </div>
  )
}


export default index;