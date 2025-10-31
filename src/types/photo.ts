/**
 * Type definitions for Picsum Photo data
 * Based on the Lorem Picsum API response structure
 */

export interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface PhotoListParams {
  page: number;
  limit: number;
}
