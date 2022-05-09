import { useParams } from 'react-router-dom';

import Overview from './Overview';
import ButtonPage from './ButtonPage';
import DividerPage from './DividerPage';
import React from 'react';

const getPageConstructor = (pageName: string | undefined) => {
  switch (pageName) {
    case 'divider':
      return DividerPage;
    case 'button':
      return ButtonPage;
    default:
      break;
  }
  return Overview;
};

const Component = () => {
  const { slug } = useParams();

  const cons = getPageConstructor(slug);
  return React.createElement(cons);
};

export default Component;
