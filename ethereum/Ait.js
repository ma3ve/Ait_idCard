import web3 from "./web3";
import Ait from "./build/contracts/Ait.json";

const instance = new web3.eth.Contract(
  Ait.abi,
  "0xb468d7b2F6d3CaD9B4071e0168e338038ecA38C1"
);
export default instance;
