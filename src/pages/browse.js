import React from 'react';
import {useContent} from '../hooks';

export default function Browse(params) {

  const {series} = useContent('series');
  const {films} = useContent('films');

  console.log(series);

  return (<p>Hello Browse</p>)
};
