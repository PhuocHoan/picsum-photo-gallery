/**
 * Photo Grid Component
 * Displays photos in a responsive grid layout
 */

import type { Photo } from '../types/photo';
import { PhotoCard } from './PhotoCard';

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  if (photos.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-20 px-4'>
        <div className='text-center'>
          <svg
            className='w-24 h-24 text-gray-300 mx-auto mb-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.5}
              d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
          <h3 className='text-xl font-semibold text-gray-700 mb-2'>
            No Photos Found
          </h3>
          <p className='text-gray-500'>
            We couldn't find any photos to display.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6'>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
