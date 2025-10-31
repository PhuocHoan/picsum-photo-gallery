/**
 * Custom hook for Intersection Observer
 * Detects when an element enters the viewport
 */

import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  onIntersect: () => void;
  enabled?: boolean;
  threshold?: number;
}

export function useIntersectionObserver({
  onIntersect,
  enabled = true,
  threshold = 0.1,
}: UseIntersectionObserverProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect, enabled, threshold]);

  return targetRef;
}
