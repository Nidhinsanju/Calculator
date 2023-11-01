import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";

function App() {
  const [value, setvalue] = useState("");

  function deletevalue() {
    setvalue(value.slice(0, -1));
  }

  function calculate() {
    setvalue(eval(value));
  }

  return (
    <div style={{ marginTop: "200px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Input"
          variant="outlined"
          value={value}
        />
      </div>
      <div>
        <main style={{ display: "flex", justifyContent: "center" }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => {
                setvalue(value + "7");
              }}
            >
              7
            </Button>
            <Button
              onClick={() => {
                setvalue(value + "8");
              }}
            >
              8
            </Button>
            <Button
              onClick={() => {
                setvalue(value + "9");
              }}
            >
              9
            </Button>
            <Button
              onClick={() => {
                setvalue(value + "+");
              }}
            >
              +
            </Button>
          </ButtonGroup>
        </main>
        <main style={{ display: "flex", justifyContent: "center" }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => {
                setvalue(value + "4");
              }}
            >
              4
            </Button>
            <Button
              onClick={() => {
                setvalue(value + "5");
              }}
            >
              5
            </Button>
            <Button
              onClick={() => {
                setvalue(value + "6");
              }}
            >
              6
            </Button>
            <Button
              onClick={() => {
                setvalue(value + "-");
              }}
            >
              -
            </Button>
          </ButtonGroup>
        </main>
        <main style={{ display: "flex", justifyContent: "center" }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => {
                setvalue(value + "1");
              }}
            >
              1
            </Button>
            <Button
              onClick={() => {
                setvalue(value + "2");
              }}
            >
              2
            </Button>
            <Button
              onClick={() => {
                setvalue(value + "3");
              }}
            >
              3
            </Button>
            <Button
              onClick={() => {
                setvalue(value + "/");
              }}
            >
              /
            </Button>
          </ButtonGroup>
        </main>
        <main style={{ display: "flex", justifyContent: "center" }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              style={{ padding: "00" }}
              onClick={() => {
                setvalue(value + "00");
              }}
            >
              00
            </Button>
            <Button
              onClick={() => {
                setvalue(value + "0");
              }}
            >
              0
            </Button>
            <Button
              onClick={() => {
                setvalue(value + ".");
              }}
            >
              .
            </Button>
            <Button
              onClick={() => {
                setvalue(value + "*");
              }}
            >
              *
            </Button>
          </ButtonGroup>
        </main>
        <main style={{ display: "flex", justifyContent: "center" }}>
          <ButtonGroup
            style={{ padding: "00px" }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => {
                setvalue("");
              }}
            >
              AC
            </Button>
            <Button
              onClick={() => {
                deletevalue(value + "0");
              }}
            >
              DEL
            </Button>
            <Button
              style={{ paddingLeft: "23px" }}
              onClick={() => {
                calculate();
              }}
            >
              =
            </Button>
          </ButtonGroup>
        </main>
      </div>
    </div>
  );
}

export default App;
