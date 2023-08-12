import styled from "styled-components";

export const Container = styled.div`
    
  background: aqua;
  display: flex;
  flex-direction: column;
  border-radius: var(--br);
  padding: 20px;
  width: 100%;
  
  & section {
    display: flex;
    align-items: center;
    gap: var(--gap);
    & img {
      height: 64px;
      width: 64px;
      border-radius: var(--br);
      
      
    }
  }
  ;
  
`