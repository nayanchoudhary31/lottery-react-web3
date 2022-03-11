import React, { useEffect, useState } from "react";
import Banner from "../images/lottery-banner.jpg";
import web3 from "../web3";
import lottery from "../lottery";
import '../App.css'
import { Col, Container, Row, Button, Spinner } from "react-bootstrap";

function Lottery() {
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");
  const [winner, setWinner] = useState("");


  //  eslint-disable-next-line
  useEffect( async()=>{
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    setManager(manager);
    setPlayers(players);
    setBalance(balance);
    console.log("aaa")
  },[])

  const onEnter = async (events)=>{
    events.preventDefault();
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    setMessage(<Spinner animation="border" variant="primary" /> )

    await lottery.methods.enter().send({
      from:accounts[0],
      value: web3.utils.toWei(value,'ether'),
    });
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);


   setPlayers(players);
    setBalance(balance);
    setMessage("Transaction Completed!")
  }

  const pickWinner = async()=>{
    const accounts = await web3.eth.getAccounts();
    setMessage("Wait Transaction is Happening...");

    await lottery.methods.pickWinner().send({
      from:accounts[0]
    });

    const winner  = await lottery.methods.last_winner().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    setMessage('Winner Picked!')
    setWinner(winner);
    setPlayers(players);
    setBalance(balance);

  }

  return (
    <>
      <Container className="mt-5">
        <Row className="row">
          <Col className="col-6 border py-4 text-center px-4">
            <h1>
              Welcome to LottoEther<i className="file code icon"></i>
              <i className="in flag"></i>
            </h1>
            <p>
              This contract is managed by <b>{manager}</b> and There are
              currently <b>{players.length} </b>people entered, competing to win{" "}
              <b>{web3.utils.fromWei(balance, "ether")}</b> ether!
            </p>
            <div className="input-heading">
              <h4>Want to Try Luck?</h4>
            </div>
            <div className="input">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                  style={{ fill: "#0000000" }}
                >
                  <path fill="#9fa8da" d="M11 24L25 2 39 24 25 32z"></path>
                  <path fill="#7986cb" d="M25 2L39 24 25 32z"></path>
                  <path fill="#9fa8da" d="M11 27L25 35 39 27 25 46z"></path>
                  <path
                    fill="#7986cb"
                    d="M25 35L39 27 25 46zM11 24L25 18 39 24 25 32z"
                  ></path>
                  <path fill="#5c6bc0" d="M25 18L39 24 25 32z"></path>
                </svg>
              </span>
              <input
                type="number"
                value={value}
                onChange={(events) =>
                  setValue(events.target.value)
                }
              />
                <Button variant="outline-secondary" id="button-addon2" onClick={onEnter}>
                  Enter
                </Button>
            </div>
            <div className="winner">
                <h4>Time to Pick a  Winnner?</h4>
                <button className="winner-btn" onClick={pickWinner}>
                Pick a Winner!
                </button>
                <div className='winner'>
                <h4>{message}</h4>
                <p>{winner}</p>
                </div>
            </div>
          </Col>
          <Col className="col-6">
            <img src={Banner} alt="lottery-banner" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Lottery;
