import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #dedede;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 6px;
  padding: 20px;
  min-height: 150px;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`

export default Card;