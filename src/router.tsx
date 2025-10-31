/**
 * Router Configuration
 * Sets up TanStack Router with all routes
 */

import {
  createRouter,
  createRoute,
  createRootRoute,
  Navigate,
  Outlet,
} from '@tanstack/react-router';
import { Header } from './components/Header';
import { PhotosPage } from './pages/PhotosPage';
import { PhotoDetailsPage } from './pages/PhotoDetailsPage';

// Root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='container mx-auto'>
        <Outlet />
      </main>
    </div>
  ),
});

// Index route - redirects to /photos
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Navigate to='/photos' />,
});

// Photos list route
const photosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/photos',
  component: PhotosPage,
});

// Photo details route
const photoDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/photos/$photoId',
  component: PhotoDetailsPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  photosRoute,
  photoDetailsRoute,
]);

// Create and export router
export const router = createRouter({ routeTree });

// Register router type for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
