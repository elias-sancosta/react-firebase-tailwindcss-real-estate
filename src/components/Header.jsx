import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Header() {
  const [pageState, setPageState] = useState('Sign in');
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Profile');
      } else {
        setPageState('Sign in');
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="Logo"
            className="h-6 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={` ${
                pathMatchRoute('/')
                  ? ' cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-red-500 text-black'
                  : 'cursor-pointer py-3 text-sm font-semibold text-gray-400'
              }`}
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className={` ${
                pathMatchRoute('/offers')
                  ? ' cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-red-500 text-black'
                  : 'cursor-pointer py-3 text-sm font-semibold text-gray-400'
              }`}
              onClick={() => navigate('/offers')}
            >
              Offers
            </li>
            <li
              className={` ${
                pathMatchRoute('/sign-in') || pathMatchRoute('/profile')
                  ? ' cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-red-500 text-black'
                  : 'cursor-pointer py-3 text-sm font-semibold text-gray-400'
              }`}
              onClick={() => navigate('/profile')}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
