import { useState } from 'react';

const useHome = () => {
  const [state, setState] = useState({
    isHome: false,
  });
  return {
    data: {
      isHome: state.isHome,
    },
    action: {
      setState,
    },
  };
};

export default function Home() {
  const { data } = useHome();

  return <div>{data.isHome ? 'Home' : 'Vite React Template !'}</div>;
}
