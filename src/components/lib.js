/* eslint-disable no-unused-vars */
/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Input = styled.input({
  width: "100%",
  padding: " 10px",
  "&:focus": {
    outline: 0,
  },
});

const Form = styled.form`
  margin-bottom: 2em;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  width: 100%;
  background: #28a8a4;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export { Input, Form, Button };
