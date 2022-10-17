import React from 'react';
import { Image} from 'semantic-ui-react'

const SelectedImage = (selectedImage) => {
    return (
      <Image size='large' src={`https://images.pexels.com/photos/${selectedImage.selectedImage}/pexels-photo-${selectedImage.selectedImage}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800`}/>
    );
}

export default SelectedImage;