import React from 'react';
import Songs from '../components/Songs';

const Album = (props) => {

  const album = props.album;

  return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs songs={album.songs} />
    </div>
  );
}

export default Album;
