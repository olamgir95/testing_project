import { ChangeEvent, MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import {
  Container,
  CustomButton,
  Form,
  Input,
  InputBox,
  InputLabel,
  StyledLink,
} from "../SignUp/style";

const SignIn = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [errPassword, setErrPassword] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [errClientName, setErrClientName] = useState<string>("");

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleSignUp = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!clientName) {
      setErrClientName("Enter your name");
    }

    if (!password) {
      setErrPassword("Please enter correct password");
    }

    if (clientName && password) {
      setClientName("");
      setPassword("");
    }

    try {
      const login_data = {
        mb_nick: clientName,
        mb_password: password,
      };

      // const memberApiService = new MemberApiService();
      // await memberApiService.loginRequest(login_data);

      await sweetTopSmallSuccessAlert("Log in successfully", 500, true);
      navigate("/");
      // window.location.reload();
      return true;
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Container>
      <Form>
        <h1>Sign in</h1>
        {/* client name */}
        <InputBox>
          <InputLabel htmlFor="Username">Username</InputLabel>
          <Input
            id="outlined-basic"
            value={clientName}
            placeholder="Username"
            onChange={handleName}
          />
          {errClientName && (
            <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
              <span className="font-bold italic mr-1">!</span>
              {errClientName}
            </p>
          )}
        </InputBox>

        {/* Password */}
        <InputBox>
          <InputLabel htmlFor="Username">Password</InputLabel>
          <Input
            id="outlined-password-input"
            placeholder="Enter your password"
            autoComplete="current-password"
            onChange={handlePassword}
            value={password}
          />
          {errPassword && (
            <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
              <span className="font-bold italic mr-1">!</span>
              {errPassword}
            </p>
          )}
        </InputBox>

        <CustomButton onClick={handleSignUp}>Submit</CustomButton>
        <p className="text-sm text-center font-titleFont font-medium">
          Don't have an Account? <span> </span>
          <StyledLink to="/signup">
            <span className="ml-2 text-blue-400 hover:text-blue-600 duration-300">
              Go to sign up.
            </span>
          </StyledLink>
        </p>
      </Form>
    </Container>
  );
};

export default SignIn;
