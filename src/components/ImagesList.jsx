import React from 'react'

const ImagesList = (props) => {
  console.log(props);

  const images = props.images.map((image) => {
    return <img key={image.id} src={image.webformatURL} />
  })
  return (
    <div>
      {images}
    </div>
  )
}

export default ImagesList