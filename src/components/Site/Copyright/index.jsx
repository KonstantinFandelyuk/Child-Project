import React from 'react';
import { CopyrightBlock } from './style';

export const Copyright = () => {
  const getMeYear = () => {
    return new Date().getFullYear();
  };
  return (
    <CopyrightBlock>
      © {getMeYear()} Bello insurance Services LLC. All right reserved.
    </CopyrightBlock>
  );
};
