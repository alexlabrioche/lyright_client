import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function IoLayout({ children }) {
  const { socket } = useSelector(({ socket }) => socket);

  useEffect(() => {
    console.log('🍤 IO ON', socket);
    // socket.on(USER_CONNECTED, userList => {
    //   console.log('userList', userList);
    //   setUserList(userList);
    // });
  }, []);

  return children;
}
