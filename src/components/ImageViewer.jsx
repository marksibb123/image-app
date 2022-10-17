import React from 'react';
import { Image, Segment, Header } from 'semantic-ui-react'
import ImageBefore from '../assets/rockBefore.jpg'
import ImageAfter from '../assets/rockAfter.jpg'

function ImageViewer() {

    return (
      <Segment>
        <b><p>Sadly, this does not automatically run the python script as planned, so here is an example with the Rock instead.</p>
        <p>The main focus when writing the script was to preserve the images outer edges, while reducing/blocking out colours. Comments on this will be in the simplifyScript.ipynb.</p>
        <p>The lack of blending in the new image makes images that seem daunting to use as a reference initially, make sense once you block out the colours. </p></b>
        <Image.Group style={{ marginTop: '20px', textAlign: 'center' }} size='large'>
          <Image src={ImageBefore}/>
          <Image src={ImageAfter}/>
        </Image.Group>
      </Segment>
    )
  }

export default ImageViewer;