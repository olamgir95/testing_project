import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background: white;
  width: 430px;
  height: 518px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 48px 28px;
  gap: 16px;
  border-radius: 12px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  margin-bottom: 2px;
`;

const InputLabel = styled.label`
  margin-bottom: 2px;
  color: #151515;
  font-weight: 500;
  font-size: 16px;
`;

const Input = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  color: #151515;
  max-height: 47px;
  border-radius: 6px;
  padding: 14px 16px;
  width: 374px;
  border: 1px solid rgba(21, 21, 21, 0.2);
  display: block;
  outline: none;
  box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
  &::placeholder {
    color: #151515;
    opacity: 0.48;
    font-size: 16px;
    font-weight: 400;
  }
`;

const StyledLink = styled(Link)`
  color: #6200ee;
  text-decoration: none;
`;

const CustomButton = styled.button`
  margin-top: 36px;
  color: white;
  background: #6200ee;
  font-size: 16px;
  font-weight: 500;
  width: 374px;
  max-height: 40px;
  border-radius: 4px;
  padding: 10px 24px;
  text-transform: capitalize;
  &:hover {
    background-color: rgba(98, 0, 238, 0.8);
  }
`;
export {
  Container,
  Form,
  Input,
  InputLabel,
  StyledLink,
  CustomButton,
  InputBox,
};
