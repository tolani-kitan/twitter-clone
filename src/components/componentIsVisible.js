import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const ComponentIsVisible = (visibility, id) => {
  const history = useHistory();
  const [isComponentVisible, setIsComponentVisible] = useState(visibility);
  const ref = useRef(null);

  const handleClick = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      history.push(`post/${id}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    // return () => {
    //   document.removeEventListener('click', handleClick, true);
    // };
  });

  return {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  };
};

export default ComponentIsVisible;
