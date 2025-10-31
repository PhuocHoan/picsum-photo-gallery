/**
 * Custom hook for infinite scroll functionality
 * Uses Intersection Observer API to detect when user scrolls to bottom
 */

import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPhotos } from '../api/picsum';
import type { Photo } from '../types/photo';

const PHOTOS_PER_PAGE = 30;

export function useInfinitePhotos() {
  return useInfiniteQuery<Photo[], Error>({
    queryKey: ['photos'],
    queryFn: ({ pageParam = 1 }) =>
      fetchPhotos({ page: pageParam as number, limit: PHOTOS_PER_PAGE }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // If the last page has fewer items than the limit, we've reached the end
      if (lastPage.length < PHOTOS_PER_PAGE) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
}
