import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';
import API from '../../services/API';
import { LoginContext } from '../../_contexts/LoginContextProvider';

export default function Profile() {
  const history = useHistory();
  const { addToast } = useToasts();
  const [fetchedUser, setFetchedUser] = useState([]);
  const { userLogged, setUserLogged } = useContext(LoginContext);

  const logout = async () => {
    try {
      await API.get('auth/logout');
      addToast('logged out successfully', {
        appearance: 'success',
        autoDismiss: true,
      });
      history.push('/login');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    API.get('/me').then((res) => {
      console.log(res);
      setUserLogged(res.data);
      setFetchedUser(res.data);
    });
  }, []);

  return (
    <>
      <h1>Profile Page</h1>
      <button type='button' onClick={logout}>
        Logout
      </button>
    </>
  );
}
