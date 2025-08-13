import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ImageGrid from './ImageGrid';

const ImageDetail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [imagedata, setTagImages] = useState([]);

  const API_KEY = "3061424-2d8e74a0fcb44ce299788cdd6";

  // Fetch current image whenever id changes
  useEffect(() => {
    if (state?.image && state.image.id.toString() === id) {
      setImage(state.image);
    } else {
      fetch(`https://pixabay.com/api/?key=${API_KEY}&id=${id}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data.hits) && data.hits.length > 0) {
            setImage(data.hits[0]);
          }
        })
        .catch(err => console.error(err));
    }
  }, [id, state]);

  // Fetch related images whenever image changes
  useEffect(() => {
    if (image?.tags) {
      const tagsArray = image.tags.split(',').map(tag => tag.trim());
      let query = '';
      for (let tag of tagsArray) {
        if ((query + ' ' + tag).trim().length <= 100) {
          query += (query ? ' ' : '') + tag;
        } else break;
      }

      fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data.hits)) {
            const filtered = data.hits.filter(img => img.id !== image.id);
            setTagImages(filtered);
          } else {
            setTagImages([]);
          }
        })
        .catch(err => {
          console.error(err);
          setTagImages([]);
        });
    }
  }, [image]);

  if (!image) return <p>Loading...</p>;

  return (
    <div className="grid gap-4 p-1 lg:p-10">
      <div>
        <img className="h-200 max-w-full rounded-lg w-full object-cover" src={image.largeImageURL} alt="" />
      </div>
      <div className="columns-2 md:columns-4 gap-4 mt-10  space-y-4">
        {imagedata.map((img) => (


          <ImageGrid key={img.id}  imagesdata={img} clickable={true} />
        ))}
      </div>
    </div>
  );
};

export default ImageDetail;
