import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useGoHome() {
  const navigate = useNavigate();
  const goHome = useCallback(() => {
    navigate('/');
  }, []);
  return goHome;
}
