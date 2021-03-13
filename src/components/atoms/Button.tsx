import React from "react";
import styled from "@emotion/styled";

// ボタンの大きさ定義をする
// 統一化する
// ・高さ
// ・border-radius
// ・
type btnProps = {
  width?: number;
  borderRadius?: number;
  height?: number;
  background?: string;
  value?: string;
  onClick?: (event: any) => void;
};

export const Button = ({
  borderRadius,
  height,
  background,
  value,
  onClick,
  width,
}: btnProps): JSX.Element => {
  return (
    <>
      <Btn
        width={width}
        borderRadius={borderRadius}
        height={height}
        background={background}
        onClick={onClick}
      >
        {value}
      </Btn>
    </>
  );
};

const Btn = styled.div<{
  height?: number;
  borderRadius?: number;
  background?: string;
  width?: number;
}>`
  display: flex;
  align-items: center;
  width: ${(props) => {
    return props.width ? `${props.width}px` : "100%";
  }};
  justify-content: center;
  ${(props) => {
    return props.height ? `height:${props.height}px` : "65px";
  }};
  color: #fff;
  ${(props) => {
    return props.background ? `background:${props.background}` : "#56a8f5";
  }};
  ${(props) => {
    return props.borderRadius ? `border-radius:${props.borderRadius}px` : "";
  }};
`;
