import styled from "styled-components"

export const GeneralProgress =()=>{
    return(
<Container className="d-flex flex-row justify-center items-center">
<div style={{
  width: "100%",
  height: "100%",
  background: "white",
  color: "black"
}}>
  loading.....
</div>
</Container>
    )
}
const Container = styled.div`
top:0 !important;
width: 100vw !important;
height: 100% !important;
bottom:0 !important;
background-color: white;

z-index:999 !important;
position:absolute !important;
`