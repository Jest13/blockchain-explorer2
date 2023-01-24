import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import Image from "next/image";
import {useRouter} from "next/router";
import {ethers} from "ethers";


//INTERNAL IMPORT

import {Etherscan} from "../Context/Ether";
import Style from '../styles/account.modules.css';
import ethereumm from '../img/ethereumm.png';
import l from "../img/l.gif";
import table from "../components/Tabel";


const account = () => {
    const {provider} = useContext(Etherscan);
    const router = useRouter();
    const {query} = router;
    const acc = Object.keys(query)[0];


    const [account, setAccount] = useState('');
    const [balance, setBalance ] = useState('');
    const [totalTransaction, setTotalTransaction] = useState('')
    const [name, setName] = useState('');
    const [open, setOpen] = useState(true);
    const [loading, setLoading] = useState(true);


    // API GET SET

    const [accountHistory, setAccountHistory] = useState([]);
    const [internalByAddress, setInternalByAddress] = useState([]);
    const [ERC20, setERC20] = useState([]);
    const [ERC1155, setERC1155] = useState([]);
    const [blockMindedByAddrss, setBlockMindedByAddrss] = useState([])
    const [blockRangeTransaction, SetBlockRangeTransaction] = useState([]);


    return (
        <div>
            <p>Salut mon khey</p>
        </div>
    )
}


export default account