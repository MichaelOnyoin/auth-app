//Create a registration page in react containing the fields(Full Names,Voter ID,National_ID,Constituency,Registration Center) ?
import * as React from "react";

import { loadBlockchainData, loadWeb3 } from "../Web3helpers";
import { useNavigate } from "react-router-dom";

export default function Registry() {
    const [fullNames, setFullnames] = React.useState("");
    const [voterId, setVoterId] = React.useState("");
    const [nationalId, setnationalId] = React.useState("");
    const [constituency, setconstituency] = React.useState("");
    const [registrationCenter, setregistrationCenter] = React.useState("");
    
    
    const navigate = useNavigate();
    
    const [accounts, setAccounts] = React.useState(null);
    
    const [register, setRegister]=React.useState(null);

    const loadAccounts = async () => {
        let { register, accounts } = await loadBlockchainData();
    
        setAccounts(accounts);
        
        setRegister(register);
    };
    
    const signUp = async () => {
        if (!fullNames || !voterId || !nationalId || !constituency || !registrationCenter) {
        alert("please fill all details");
        return;
        }
        
        try {
        await register.methods
            .registerVoter(fullNames, voterId, nationalId,constituency,registrationCenter)
            .send({ from: accounts });
    
        localStorage.setItem("fullNames", fullNames);
        localStorage.setItem("voterId", voterId);
        localStorage.setItem("nationalId", nationalId);
        localStorage.setItem("constituency", constituency);
        localStorage.setItem("registrationCenter", registrationCenter);
        navigate("/Home");
        } catch (e) {
        console.log(e.message);
        }
    };
    React.useEffect(() => {
        loadWeb3();
    }, []);
    
    React.useEffect(() => {
        loadAccounts();
    }, []);
    
    return (
        <div style={rootDiv}>
            <h1>Voter Registry</h1>
        <img
            src="https://i.postimg.cc/Hnmyyk4N/logo.png"
            style={image}
            alt="geeks"
        />
        <input
            style={input}
            value={fullNames}
            onChange={(e) => setFullnames(e.target.value)}
            placeholder="Full names"
            type="text"
        />
        <input
            style={input}
            value={voterId}
            onChange={(e) => setVoterId(e.target.value)}
            placeholder="VoterId"
            type="text"
        />
        <input
            style={input}
            value={nationalId}
            onChange={(e) => setnationalId(e.target.value)}
            placeholder="nationalId"
            type="nationalId"
        />
        <input
            style={input}
            value={constituency}
            onChange={(e) => setconstituency(e.target.value)}
            placeholder="constituency"
            type="constituency"
        />
        <input
            style={input}
            value={registrationCenter}
            onChange={(e) => setregistrationCenter(e.target.value)}
            placeholder="registrationCenter"
            type="registrationCenter"
        />
        <button style={button} onClick={signUp}>
            {" "}
            Register
        </button>
        <div>
        {/* <button style={button} onClick={()=>navigate("/Vote")}>
            {" "}
            Go Vote
        </button> */}
        </div>
        </div>
        
        
    );
    }
    
    const rootDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
    justifyContent: "center",
    height: "100vh",
    };
    
    const input = {
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    outline: "none",
    border: "2px solid grey",
    fontSize: 17,
    };
    
    const button = {
    width: 325,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    cursor: "pointer",
    fontSize: 17,
    color: "white",
    backgroundColor: "#2986cc",
    border: "none",
    };
    
    const image = {
    width: 70,
    height: 70,
    objectFit: "contain",
    borderRadius: 70,
    };
    