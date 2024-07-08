import React from 'react';
import styles from './ImageCard.module.css';

interface ImageCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-xs w-full m-4 overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className={`${styles.cardImageWrapper} bg-center bg-cover`}>
        <img src={imageUrl} alt={title} className={`${styles.cardImage} h-48 w-full object-cover`} />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-primary-700">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
