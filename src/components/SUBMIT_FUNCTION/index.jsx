import React, { useState } from "react";
import {
  handlePerfectNumber,
  handlePrimeNumber,
  factorialNumber,
  handleFibonacciNumber,
  fibonacciNumber,
  handleFactorialNumber,
} from "../HANDLE_STRING_FUNCTION";

function SUBMIT_FUNCTION() {
  const [stringNum, setStringNum] = useState("");

  const [perfectNumber, setPerfectNumber] = useState("");
  const [primeNumber, setPrimeNumber] = useState("");
  const [fibonacci_Number, setFibonacciNumber] = useState("");
  const [factorial_Number, setFactorialNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let arrString = stringNum.split(",").map((i) => +i);

    setPerfectNumber(handlePerfectNumber(arrString));
    setPrimeNumber(handlePrimeNumber(arrString));
    setFibonacciNumber(handleFibonacciNumber(arrString));
    setFactorialNumber(handleFactorialNumber(arrString));
  };

  const handleReset = (event) => {
    event.preventDefault();
    setStringNum("");
    setPerfectNumber("");
    setPrimeNumber("");
    setFibonacciNumber("");
    setFactorialNumber("");
  };

  return (
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
      style={{ marginLeft: "25%", marginTop: "5%" }}
    >
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Number prime - Perfect number</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Array input</label>
                <input
                  type="text"
                  className="form-control"
                  name="num1"
                  value={stringNum}
                  onChange={(e) => setStringNum(e.target.value)} // convert string-number to number
                  placeholder="Enter list string-number"
                />
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Perfect number</label>
                <input
                  type="text"
                  className="form-control"
                  value={perfectNumber}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Number prime</label>
                <input
                  type="text"
                  className="form-control"
                  value={primeNumber}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Fibonacci number</label>
                <input
                  type="text"
                  className="form-control"
                  value={fibonacci_Number}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Factorial umber</label>
                <input
                  type="text"
                  className="form-control"
                  value={factorial_Number}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={!stringNum} // disabled Submit btn after enter data at input
            >
              Submit
            </button>
            <button onClick={handleReset} className="btn btn-danger">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SUBMIT_FUNCTION;
