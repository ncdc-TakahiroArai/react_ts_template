import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@Components/atoms/Button";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

export default (): JSX.Element => {
  const [isPos, setTranslate] = useState<boolean>(false);
  const handleSlider = () => {
    isPos ? setTranslate(false) : setTranslate(true);
  };

  return (
    <>
      <MenuRoundedIcon
        style={{ fontSize: 50 }}
        onClick={() => handleSlider()}
      />

      <SliderBackground isPos={isPos} onClick={() => handleSlider()} />
      <SideBar isPos={isPos}>
        <Button
          value="サイドバー"
          width={200}
          borderRadius={50}
          height={45}
          background={"red"}
          onClick={() => handleSlider()}
        />
      </SideBar>
    </>
  );
};
const SideBar = styled.div<{
  isPos?: boolean;
}>`
  z-index: 2;
  transition: 0.3s ease-in-out;
  position: absolute;
  top: ${(props) => {
    return props.isPos ? "50%" : `20%`;
  }};
  z-index: ${(props) => {
    return props.isPos ? "1" : `-1`;
  }};
  opacity: ${(props) => {
    return props.isPos ? "1" : `0`;
  }};
  left: 50%;
  width: 500px;
  height: 500px;
  background: #fff;
  transform: translate(-50%, -50%);
`;

const SliderBackground = styled.div<{
  isPos?: boolean;
}>`
  transition: 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000de;
  ${(props) => {
    return props.isPos ? "z-index:1; opacity:0.6;" : "z-index:-1; opacity:0;";
  }}
`;
