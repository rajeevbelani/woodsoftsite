import React from 'react';
import Transition from 'components/base/transition';

export default ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>;
};
