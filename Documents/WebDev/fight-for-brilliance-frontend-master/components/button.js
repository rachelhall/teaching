import React from "react";
import styled from "styled-components";
import Link from "next/link";

// styles
import { Colors } from "../theme";

const Button = props => {
  return (
    <Btn>
      <Link href={props.href}>{props.children}</Link>
    </Btn>
  );
};

const Btn = styled.div`
  z-index: 10;

  a {
    font-family: "PT Serif", "Times New Roman", Times, serif;
    padding: 0.5rem 1rem;
    min-width: 188px;
    border: 1px solid white;
    color: white;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    z-index: 10;

    &:hover {
      background-color: white;
      color: ${Colors.primary};
      cursor: pointer;
      transform: scale(1.1);
      box-shadow: 8px 9px 0 0 ${Colors.secondary};
    }
  }
`;

export default Button;
