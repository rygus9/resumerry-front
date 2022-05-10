import { useEffect, useState } from 'react';

export default function useUser() {
  const [user, setUser] = useState('');

  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      setUser(localStorage.getItem('userToken') as string);
    } else {
      setUser('');
    }
  }, []);

  return user;
}
