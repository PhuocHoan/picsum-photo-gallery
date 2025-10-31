/**
 * API Service for Lorem Picsum
 * Handles all API calls to https://picsum.photos
 */

import type { Photo, PhotoListParams } from '../types/photo';

const BASE_URL = 'https://picsum.photos';
const API_VERSION = 'v2';

/**
 * Fetches a paginated list of photos from the Lorem Picsum API
 * @param params - Pagination parameters (page and limit)
 * @returns Promise<Photo[]> - Array of photo objects
 */
export async function fetchPhotos({ page, limit }: PhotoListParams): Promise<Photo[]> {
  const response = await fetch(
    `${BASE_URL}/${API_VERSION}/list?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch photos: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetches details for a specific photo by ID
 * @param id - Photo ID
 * @returns Promise<Photo> - Photo object with details
 */
export async function fetchPhotoById(id: string): Promise<Photo> {
  // Use the /id/{id}/info endpoint to get specific photo details
  const response = await fetch(
    `${BASE_URL}/id/${id}/info`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch photo details: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Gets the thumbnail URL for a photo
 * @param id - Photo ID
 * @param width - Desired width (default: 400)
 * @param height - Desired height (default: 300)
 * @returns string - Thumbnail URL
 */
export function getThumbnailUrl(id: string, width = 400, height = 300): string {
  return `${BASE_URL}/id/${id}/${width}/${height}`;
}

/**
 * Gets the full-size image URL for a photo
 * @param downloadUrl - Original download URL from API
 * @returns string - Full-size image URL
 */
export function getFullSizeUrl(downloadUrl: string): string {
  return downloadUrl;
}
