import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = ({ images }: any) => {
    return (
        <Fade arrows={false} autoplay={true}>
            {images.map((i: any) => {
                return (
                    <div key={i}>
                        <img
                            src={i.fields?.file?.url}
                            className='w-full'
                            width="800"
                            height="200"
                            alt="imagen"
                        />
                    </div>
                );
            })}
        </Fade>

    )
}

export default Slideshow;