import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate(); // <-- this is the new way

  // useEffect to navigate after 2 seconds
  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate('/'); // replaces props.history.push('/')
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <div className='text-3xl font-bold'>
      we have images
    </div>
  );

};

export default About