//@ts-nocheck
import React from 'react';
import { css } from '@emotion/core'
import { PulseLoader } from 'react-spinners';
import { responseLoadingType } from '../../Types/types'

const override: any = css`
  margin-left: 47%;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const LoadingRepositories = (responseLoading: responseLoadingType): JSX.Element => (
  <div className="sweet-loading">
    <PulseLoader css={override} sizeUnit={'px'} size={15} color={'#5285C1'} loading={responseLoading.responseLoading} />
  </div>
);

export default LoadingRepositories;