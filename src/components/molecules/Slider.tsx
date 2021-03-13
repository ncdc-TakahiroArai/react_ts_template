import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@Components/atoms/Button";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

export default (): JSX.Element => {
  const [isPos, setTranslate] = useState(false);
  const handleSlider = () => {
    if (isPos) {
      setTranslate(false);
    }
    if (!isPos) {
      setTranslate(true);
    }
  };

  return (
    <>
      <MenuRoundedIcon
        style={{ fontSize: 30 }}
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
  transition: 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background: #fff;
  transform: translate(
    ${(props) => {
      return props.isPos ? "0px" : "-100%";
    }},
    0px
  );
`;

const SliderBackground = styled.div<{
  isPos?: boolean;
}>`
  transition: 0.3s;
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
