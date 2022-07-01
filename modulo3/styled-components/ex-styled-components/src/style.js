import styled from "styled-components"

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 100px;
  width: 100px;
  margin: 0px;
  padding: 0px;

  header {
    color: black;
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-right: 20px;
  }
  form{
    justify-items: end;
  }
  }
  img {
   width: 50px;
   height: 50px;
   padding: 0px;
   margin: 0px;
  }
  aside {
   background-color: orange;
   width: 100px;
   height: 100px;
   padding: 0px;
   margin: 0px;
  }
` 