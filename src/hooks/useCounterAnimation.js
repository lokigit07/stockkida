import { useEffect, useRef } from 'react';

const useCounterAnimation = (isVisible) => {
  const countersRef = useRef([]);

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        countersRef.current.forEach((counter) => {
          if (!counter) return;
          
          const target = parseInt(counter.getAttribute('data-target').replace(/,/g, ''));
          const increment = target / 50;
          let current = 0;
          
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.textContent = Math.floor(current).toLocaleString();
              setTimeout(updateCounter, 40);
            } else {
              counter.textContent = target.toLocaleString();
            }
          };
          
          updateCounter();
        });
      };

      // Small delay to ensure animation is visible
      setTimeout(animateCounters, 300);
    }
  }, [isVisible]);

  const setCounterRef = (element, index) => {
    countersRef.current[index] = element;
  };

  return { setCounterRef };
};

export default useCounterAnimation;