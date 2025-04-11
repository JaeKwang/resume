import { useEffect, useState } from 'react';

export function useScrollTop(threshold: number = 10): boolean {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY <= threshold);
    };

    handleScroll(); // 초기 상태 확인
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return atTop;
}
