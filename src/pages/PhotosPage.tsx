/**
 * Photos List Page
 * Displays grid of photos with infinite scroll
 */

import { useInfinitePhotos } from '../hooks/useInfinitePhotos';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { PhotoGrid } from '../components/PhotoGrid';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export function PhotosPage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    refetch,
  } = useInfinitePhotos();

  // Intersection observer for infinite scroll
  const loadMoreRef = useIntersectionObserver({
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    enabled: hasNextPage && !isFetchingNextPage,
  });

  // Initial loading state
  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-[60vh]'>
        <LoadingSpinner size='lg' text='Loading photos...' />
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <ErrorMessage
        message={error?.message || 'Failed to load photos'}
        onRetry={() => refetch()}
      />
    );
  }

  // Flatten all pages of photos into a single array
  const allPhotos = data?.pages.flatMap((page) => page) || [];

  return (
    <div className='pb-8'>
      {/* Page Header */}
      <div className='bg-white border-b border-gray-200 py-8 px-6 mb-6'>
        <div className='max-w-3xl'>
          <h2 className='text-3xl font-bold text-gray-900 mb-2'>
            Explore Beautiful Photos
          </h2>
          <p className='text-gray-600'>
            Discover stunning photography from Lorem Picsum. Scroll down to load
            more!
          </p>
        </div>
      </div>

      {/* Photo Grid */}
      <PhotoGrid photos={allPhotos} />

      {/* Infinite Scroll Trigger & Loading Indicator */}
      {hasNextPage && (
        <div ref={loadMoreRef} className='py-8'>
          {isFetchingNextPage && (
            <LoadingSpinner text='Loading more photos...' />
          )}
        </div>
      )}

      {/* End of List Message */}
      {!hasNextPage && allPhotos.length > 0 && (
        <div className='text-center py-8 px-4'>
          <div className='inline-flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3'>
            <svg
              className='w-5 h-5 text-gray-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span className='text-gray-700 font-medium'>
              You've reached the end! {allPhotos.length} photos loaded.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
