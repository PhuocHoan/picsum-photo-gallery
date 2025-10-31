/**
 * Photo Card Component
 * Displays a single photo thumbnail with author information
 * Clickable to navigate to photo details
 */

import { Link } from '@tanstack/react-router';
import type { Photo } from '../types/photo';
import { getThumbnailUrl } from '../api/picsum';

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Link
      to='/photos/$photoId'
      params={{ photoId: photo.id }}
      className='group relative overflow-hidden rounded-lg bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
    >
      {/* Photo Thumbnail */}
      <div className='aspect-4/3 overflow-hidden'>
        <img
          src={getThumbnailUrl(photo.id)}
          alt={`Photo by ${photo.author}`}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
          loading='lazy'
        />
      </div>

      {/* Author Info Overlay */}
      <div className='absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
        <div className='flex items-center gap-2 text-white'>
          <svg
            className='w-5 h-5 shrink-0'
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
          <span className='font-medium text-sm truncate'>{photo.author}</span>
        </div>
        <div className='mt-1 text-xs text-gray-300'>
          {photo.width} × {photo.height}
        </div>
      </div>

      {/* Hover Effect - View Icon */}
      <div className='absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300'>
        <div className='transform scale-0 group-hover:scale-100 transition-transform duration-300'>
          <div className='bg-white rounded-full p-3 shadow-lg'>
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
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
