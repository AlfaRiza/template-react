/* eslint-disable import/export */
import React, { type FC, type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Router>{children}</Router>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
