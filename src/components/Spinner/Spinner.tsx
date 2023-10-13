'use client';

import { BounceLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <BounceLoader color="#64bbf9" size={120} aria-label="Loading Spinner" speedMultiplier={1} />
  );
};

export default Spinner;
