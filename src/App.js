import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import Buttons, { DefaultButton, HipsterButton } from "./components/Buttons"
import { Button } from '@material-ui/core' 

const StyledBtn = styled(Button)`
  text-transform: capitalize;
  align-items: center;
`

function App() {
  return (
    <div>
      <BasicTitle>styled components</BasicTitle>
      <DefaultButton color="primary" variant="contained">Click me</DefaultButton>
      <HipsterButton>Click me</HipsterButton>
      <StyledBtn color="primary" variant="contained">Click me</StyledBtn>
    </div>
  )
}

export default App;
