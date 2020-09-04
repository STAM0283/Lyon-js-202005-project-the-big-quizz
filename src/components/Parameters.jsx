import React from "react";
import "../App.css";
import NbPlayers from "./NbPlayers";
import SelectParameters from './SelectParameters';
import { Link } from "react-router-dom";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";


function Parameters(props) {
   // console.log("props de Parameters",props);

  // const testCondition = true;

  // const handleClick = (e) => {
  //   console.log(e);
  //   if (testCondition) {
  //     props.history.push("/game");
  //   }
  // };

  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card className="test">
          <CardText><h1 className="parameters">Parameters</h1></CardText>

          <NbPlayers gameParameters={props.gameParameters} />
          <SelectParameters gameParameters={props.gameParameters}/>

          <Link to="/game">
            <button className="button-style">Commencer le jeu</button>
          </Link>
      {/* <button onClick={handleClick}>commencer le jeu (conditionnel)</button> */}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Parameters;
