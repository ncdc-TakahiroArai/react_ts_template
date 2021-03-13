import React, { useEffect, useState } from "react";
import { Navigation } from "@Components/molecules/Navigation";
import { Button } from "@Components/atoms/Button";
import Slider from "@/components/molecules/Slider";
import Modal from "@/components/molecules/Modal";
import { Colors } from "@Theme/color";
import styled from "@emotion/styled";

export const HomePage: React.FC = () => {
  return <Home />;
};

const Home = (): JSX.Element => {
  const [Radius, setRadius] = useState("20px");
  const [isSwitch, setSwitch] = useState(true);

  const [dataValue, setDataValue] = useState("0");

  useEffect(() => {
    setDataValue("300");
  }, []);
  const handleChange = () => {
    if (isSwitch) {
      setSwitch(false);
      setRadius("0px");
    }

    if (!isSwitch) {
      setSwitch(true);
      setRadius("50%");
    }
  };
  const [value, setValue] = React.useState<number>(30);
  const handleChangea = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Wrapper>
        <Navigation />
        <Inner>
          <Button
            value="新規登録"
            borderRadius={50}
            height={45}
            background={Colors.primary.main}
          />
          <Button
            value="モーダル"
            width={200}
            borderRadius={50}
            height={45}
            background={Colors.secondary.main}
            onClick={() => handleChange()}
          />

          <Rectangel borderRadius={Radius} value={value}></Rectangel>

          <DataBar>
            <Data value={dataValue} />
          </DataBar>

          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChangea}
          />
        </Inner>
        <Modal />
        <Slider />
      </Wrapper>
    </>
  );
};

const Rectangel = styled.div<{
  borderRadius?: string;
  value?: number;
}>`
  width: ${(props) => {
    return props.value;
  }}px;
  height: 100px;
  background: red;
  ${(props) => {
    return props.borderRadius ? `border-radius:${props.borderRadius}` : "0";
  }};
  transition: 0.3s;
`;
const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  transition: 0.3s;
  background: #f2e9d8;
`;
const Inner = styled.div`
  padding-top: 85px;
`;
const DataBar = styled.div`
  width: 500px;
  height: 30px;
  background: #0000006e;
  position: relative;
  transition: 0.3s;
`;

const Data = styled.div<{
  value?: string;
}>`
  position: absolute;
  width: ${(props) => {
    return props.value;
  }}px;
  height: 30px;
  background: red;
  transition: 0.3s;
`;
