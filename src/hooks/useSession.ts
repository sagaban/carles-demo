import { AuthContext } from 'providers/AuthContext';
import { useContext } from 'react';

const useSession = () => {
  // eslint-disable-next-line react-x/no-use-context
  return useContext(AuthContext);
};

export default useSession;
