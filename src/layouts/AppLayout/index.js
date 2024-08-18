import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/Auth/Auth.slice";

const AppLayout = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!user || user === null) {
    return <Navigate to="/login" />;
  }
  return (
    <div data-test="app-wrapper" id="app-wrapper" className="app-wrapper">
      <Outlet />
    </div>
  );
};

export default AppLayout;
