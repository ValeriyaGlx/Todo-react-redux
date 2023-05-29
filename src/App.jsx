import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Todo from "./pages/todo";
import Done from "./pages/done";
import Info from "./pages/info";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import { addError } from "./helpers/validation";

function App() {
  const [modal, setModal] = useState(true);
  const [input, setInput] = useState('');
  const [err, setErr] = useState(" ");
  const submitName = () => {
    if(err===" "){
      setErr('This field is empty');
    }
    if (err === "") {
      setModal(false);
    }
  };

  const handleChange = (value) => {
    setErr(addError(value));
    setInput(value);
  };

  return (
    <BrowserRouter>
      <Modal
        modal={modal}
        submitName={submitName}
        handleChange={handleChange}
        value = {input}
        err={err}
      />
      <Navbar />
      <Routes>
        <Route exact path="Todo-react-redux/" element={<Todo name={input} />} />
        <Route path="/todo" element={<Todo name={input} />} />
        <Route path="/done" element={<Done />} />
        <Route path="/info" element={<Info name={input} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
