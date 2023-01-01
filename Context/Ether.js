import React, {useState, useEffect} from "react";
import {ethers} from "ethers";

const apiKey = 'dbeef9ff307642539fff5b81106aaf90'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${apiKey}`)
export const Etherscan = React.createContext();

export const EtherProvider = ({children}) => {
    const data = "Etherscan Clone";
    const tenBlockWithDetails = [];
    const [yourBlockTrans, setYourBlockTrans] = useState(tenBlockWithDetails);
    const [currentBlock, setCurrentBlock] = useState([]);
    const [topTenBlock, setTopTenBlock] = useState([]);
    const [transaction, setTransaction] = useState([]);
    const [gasPrice, setGasPrice] = useState("");


    const accountDetails = async () => {
        try {
            const getCurrentBlock = await provider.getBlockNumber();
            setCurrentBlock(getCurrentBlock);

            const blockTransaction = await provider.getBlock(getCurrentBlock)
            setTransaction(blockTransaction.transactions);

            // TOP TEN BLOCK
            const previousBlock = getCurrentBlock - 10;
            const listTenBlock = [];

            for (let i = getCurrentBlock; i > previousBlock; i--) {
                listTenBlock.push([i]);
            }

            //GET BLOCK DETAILS
            const getBlockDetails = listTenBlock.flat();
            setTopTenBlock(getBlockDetails);

            getBlockDetails.map(async (el) => {
                const singleBlockData = await provider.getBlock(el);
                tenBlockWithDetails.push(singleBlockData);
            });

            const gasPrice = await provider.getGasPrice();
            const latestGasPrice = ethers.utils.formatUnits(gasPrice);
            setGasPrice(latestGasPrice);

        } catch (error) {
            console.log('Something want wrong while fetching data', error)
        }
    };

    useEffect(() => {
        accountDetails()
    }, []);

    return <Etherscan.Provider
        value={{data, currentBlock, topTenBlock, yourBlockTrans, transaction, gasPrice, provider}}>
        {children}
    </Etherscan.Provider>

};