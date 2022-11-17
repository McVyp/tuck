import React from 'react';
import { NextPage } from 'next';

interface IProps {
    text: string
}
// export const NoResults:NextPage<IProps> = ({text}) => {
//   return (
//     <div>NoResults</div>
//   )
// }

export const NoResults=({text}: IProps) => {
    return (
      <div>NoResults</div>
    )
  }