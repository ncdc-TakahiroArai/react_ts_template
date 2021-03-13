import React from "react";
import style from "@emotion/styled"


export enum PositionX {
  left,
  mid,
  right = "right",
}

type Props ={
  position?: PositionX;
}

export const About: React.FC = () => {
  return <PileList />;
};

const PileList = ( { position }: Props):JSX.Element => {
position = PositionX.right
console.log(position)

  return (
    <>
     aaa
    </>
  );
};


