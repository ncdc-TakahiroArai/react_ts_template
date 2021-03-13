import React from "react";
import styled from "@emotion/styled";
import { Button } from "@Components/atoms/Button";

export const Navigation = (): JSX.Element => {
  return (
    <>
      <Nav>
        <NavInner>
          <NavItems>
            <h1>テストサービス</h1>
          </NavItems>
          <NavItems>
            <p>テストサービス</p>
          </NavItems>
        </NavInner>
      </Nav>
    </>
  );
};

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  position: fixed;
  width: 100%;
  height: 65px;
  background: #56a8f5;
`;
const NavInner = styled.div<{ maxWidth?: number }>`
  display: flex;
  align-items: center;
  height: inherit;
  justify-content: space-between;
  padding: 0px 24px;
  margin: 0 auto;
  @media (max-width: 480px) {
    padding: 0px 16px;
  }
  ${(props) => {
    return props.maxWidth ? `max-width:${props.maxWidth}` : "";
  }};
`;

// Readme
// ・max-widthで中央寄せをする場合
// →NavInnerコンポーネントに中央よせ
