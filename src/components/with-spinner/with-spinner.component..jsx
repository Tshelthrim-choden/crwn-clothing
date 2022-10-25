import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const withSpinner= wrappedComponent =>{
    const Spinner=({isLoading, ...otherProps})=>{
return isLoading ? (
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
) : (
    <wrappedComponent {...otherProps} />
);
};
return Spinner;
};

export default withSpinner;