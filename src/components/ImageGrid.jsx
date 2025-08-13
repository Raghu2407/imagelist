import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageGrid = ({ imagesdata , clickable = true, onClick  }) => {
    const { id, webformatURL, likes, comments } = imagesdata;
    const navigate = useNavigate();
  
    const handleClick = () => {
        if (clickable) {
            // navigate(`/image/${id}`, { state: { image: imagesdata } });
            window.location.href = `/image/${id}`;
          }
          if (onClick) onClick(imagesdata);
    };
  
    return (
      <div className="grid gap-4">
        <div className='relative' onClick={handleClick} key={id}>
          <img className="h-auto max-w-full rounded-lg w-100" src={webformatURL} alt="" />
          <div className='absolute bottom-0 left backdrop-brightness-50 drop-shadow-lg bg-white p-5 w-full'>
            <div className='flex gap-6 items-center '>
              <div className='flex gap-2 items-center'>
                <i className="fa-solid fa-heart text-red-400"></i> 
                <span>{likes}</span>
              </div>
              <div className='flex gap-2 items-center'>
                <i className="fa-solid fa-comments"></i> 
                <span>{comments}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ImageGrid