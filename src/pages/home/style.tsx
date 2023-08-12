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
      height: 155px;
      width: 155px;
      border-radius: 100%;
      transition: box-shadow 500ms ease-in-out ;
      
      &:hover {
        box-shadow: 0 0 24px 1px rgba(37,37,86,1);
        
      }
    }
    
  }
  
  
`