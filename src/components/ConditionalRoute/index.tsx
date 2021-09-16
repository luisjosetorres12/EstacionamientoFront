/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { FC } from 'react';
import { RouteComponentProps, Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router';

export const ConditionalRoute: FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Component {...props} />
      )}
    />
  );
};
