import styled from "styled-components";

export const Container = styled.div`
    
  background: var(--gray-400);
  display: flex;
  flex-direction: column;
  border-radius: var(--br);
  padding: 20px;
  width: 100%;
  
  &:hover {
    background: linear-gradient(360deg, rgba(36,36,36,1) 0%, rgba(37,37,86,1) 100%);
    
  }
  
  & section {
    display: flex;
    align-items: center;
    gap: var(--gap);
    
    &  img {
      height: 64px;
      width: 64px;
      border-radius: var(--br);
      
      
    }
  }
  ;
  
`