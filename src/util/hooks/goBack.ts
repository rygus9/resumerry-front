import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useGoBack() {
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-1);
  }, []);
  return goBack;
}
