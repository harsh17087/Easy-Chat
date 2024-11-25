import React from 'react';
import { Typography } from '@mui/material';

/**
 * CompanyName component renders the company name within a div element.
 * It uses Material-UI's Typography component to display the company name.
 *
 * @returns {JSX.Element} A div containing the company name styled with Typography.
 */
const CompanyName: React.FC = (): JSX.Element => {
  return (
    <div className='navigation-company'>
      <Typography variant='h6'>Harsh Company</Typography>
    </div>
  );
};

export default CompanyName;
