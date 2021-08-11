import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import Buttons, { DefaultButton, HipsterButton } from "./components/Buttons"


function App() {
  return (
    <div>
      <BasicTitle>styled components</BasicTitle>
      <DefaultButton>Click me</DefaultButton>
      <HipsterButton>Click me</HipsterButton>
    </div>
  )
}

export default App;
