import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  
  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--gray-700);
    min-width: 50vh;
    max-width: 60vh;
    height: 100%;
    padding: var(--pad);
    gap: 10px;
    border-radius: 10px;
    margin: 20px;
    
    & .title {
      margin-bottom: 2vh;
    }
    
    & > img {
      border-radius: 100%;
    }
    
  }
  
  
`