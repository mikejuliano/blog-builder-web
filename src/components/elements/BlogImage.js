import React from 'react';

export const BlogImage = ({file, linksTo}) => {
  const imagePath = '../../configurations/auth-tutorial-01/images';
  const filePath = `${imagePath}/${file}`;
  console.log('filePath', filePath);
  return (
    <img src={ filePath }/>
  );
};