import { useEffect } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';

const SyncUser = () => {
  const { user } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    const syncUserToBackend = async () => {
      const token = await getToken();

      if (!user || !token) return;

      await fetch('http://localhost:5000/api/users/sync', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
          mobile: user.phoneNumbers[0]?.phoneNumber || '',
          profilePhoto: user.imageUrl,
          about: '',
        }),
      });
    };

    syncUserToBackend();
  }, [user, getToken]);

  return null; // Doesn't render anything
};

export default SyncUser;
