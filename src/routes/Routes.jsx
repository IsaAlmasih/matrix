import React, { Suspense } from 'react'
import { useRoutes } from 'react-router';
import { publicRoutes } from './routesConfig';
import { wrapUseRoutes } from '@sentry/react';
import { AnimatePresence } from 'framer-motion';

export const Routes = () => {
const useSentryRoutes = wrapUseRoutes(useRoutes);
const routes = [...publicRoutes];
const routing = useSentryRoutes(routes);
  return <AnimatePresence><Suspense>{routing}</Suspense></AnimatePresence>;
}
