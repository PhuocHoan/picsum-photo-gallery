/**
 * Header Component
 * App header with logo and navigation
 */

import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link
            to='/photos'
            className='flex items-center gap-3 group hover:opacity-80 transition-opacity'
          >
            <div className='bg-linear-to-br from-blue-500 to-purple-600 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            </div>
            <div>
              <h1 className='text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Picsum Gallery
              </h1>
              <p className='text-xs text-gray-500'>
                Beautiful photos from Lorem Picsum
              </p>
            </div>
          </Link>

          <nav className='flex items-center gap-4'>
            <a
              href='https://picsum.photos'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-gray-600 hover:text-blue-600 transition-colors'
            >
              API Docs
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
