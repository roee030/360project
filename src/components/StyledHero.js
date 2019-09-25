import styled from "styled-components";
const  defaultImg =  '../images/Virtual_Tours';
const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  
  align-items: center;
  justify-content: center;
`;

export default StyledHero;