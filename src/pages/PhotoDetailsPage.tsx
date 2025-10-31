/**
 * Photo Details Page
 * Displays full-size photo with all details
 */

import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from '@tanstack/react-router';
import { fetchPhotoById, getFullSizeUrl } from '../api/picsum';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export function PhotoDetailsPage() {
  const { photoId } = useParams({ strict: false }) as { photoId: string };
  const navigate = useNavigate();

  const {
    data: photo,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['photo', photoId],
    queryFn: () => fetchPhotoById(photoId),
    enabled: !!photoId,
  });

  // Loading state
  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-[60vh]'>
        <LoadingSpinner size='lg' text='Loading photo details...' />
      </div>
    );
  }

  // Error state
  if (isError || !photo) {
    return (
      <ErrorMessage
        message={error?.message || 'Photo not found'}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className='py-6 px-4 max-w-7xl mx-auto'>
      {/* Back Button */}
      <button
        onClick={() => navigate({ to: '/photos' })}
        className='flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group'
      >
        <svg
          className='w-5 h-5 group-hover:-translate-x-1 transition-transform'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M10 19l-7-7m0 0l7-7m-7 7h18'
          />
        </svg>
        <span className='font-medium'>Back to Gallery</span>
      </button>

      {/* Photo Details Card */}
      <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
        {/* Full-size Image */}
        <div className='relative bg-gray-100'>
          <img
            src={getFullSizeUrl(photo.download_url)}
            alt={`Photo by ${photo.author}`}
            className='w-full h-auto max-h-[70vh] object-contain'
          />
        </div>

        {/* Photo Information */}
        <div className='p-8'>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Left Column - Main Info */}
            <div>
              <h1 className='text-3xl font-bold text-gray-900 mb-4'>
                Photo #{photo.id}
              </h1>

              {/* Author Info */}
              <div className='flex items-start gap-3 mb-6 p-4 bg-gray-50 rounded-lg'>
                <div className='bg-blue-100 p-3 rounded-full'>
                  <svg
                    className='w-6 h-6 text-blue-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-500 mb-1'>Photographer</p>
                  <p className='text-xl font-semibold text-gray-900'>
                    {photo.author}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className='mb-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Description
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  This stunning photograph was captured by {photo.author}. The
                  image showcases excellent composition and lighting, making it
                  a perfect addition to any collection or project.
                </p>
              </div>
            </div>

            {/* Right Column - Technical Details */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                Technical Details
              </h3>

              <div className='space-y-4'>
                {/* Dimensions */}
                <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
                  <div className='flex items-center gap-3'>
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
                        d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
                      />
                    </svg>
                    <span className='text-gray-600'>Dimensions</span>
                  </div>
                  <span className='font-semibold text-gray-900'>
                    {photo.width} × {photo.height}
                  </span>
                </div>

                {/* Photo ID */}
                <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
                  <div className='flex items-center gap-3'>
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
                        d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
                      />
                    </svg>
                    <span className='text-gray-600'>Photo ID</span>
                  </div>
                  <span className='font-mono font-semibold text-gray-900'>
                    {photo.id}
                  </span>
                </div>

                {/* Aspect Ratio */}
                <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
                  <div className='flex items-center gap-3'>
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
                        d='M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
                      />
                    </svg>
                    <span className='text-gray-600'>Aspect Ratio</span>
                  </div>
                  <span className='font-semibold text-gray-900'>
                    {(photo.width / photo.height).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Download Button */}
              <a
                href={photo.download_url}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-6 flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg'
              >
                <svg
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                  />
                </svg>
                Download Original
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
