import React, { useState } from "react";
import styled from "@emotion/styled";

type modalProps = {
  onClick?: (event: any) => void;
};

export const modalHooks = (value?: boolean): [boolean, any] => {
  const [count, setCount] = useState(value);
  console.log(count);
  return [count, setCount];
};

export const Modal = ({ onClick }: modalProps): JSX.Element => {
  const [count, setCount] = useState();
  return (
    <>
      {count ? (
        <Modalpage onClick={onClick}>
          <ModalInner></ModalInner>
        </Modalpage>
      ) : (
        ""
      )}
    </>
  );
};

const Modalpage = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000047;
  transition: 0.5s;
`;
const ModalInner = styled.div`
  width: 400px;
  height: 400px;
  background: #fff;
`;
