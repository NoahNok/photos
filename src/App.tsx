import React from 'react';
import Masonry from 'react-masonry-css';
import { SRLWrapper } from 'simple-react-lightbox';
import LazyLoad from 'react-lazyload';

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
}


const photos = [
  'IMG_3611.jpg',
  'IMG_3983.jpg',
  'IMG_3986.jpg',
  'IMG_3987.jpg',
  'IMG_3985.jpg',
  'IMG_3609.jpg',
  'IMG_3984.jpg',
  'IMG_3988.jpg',
  'IMG_3980.jpg',
  'IMG_3603.jpg',
  'IMG_3605.jpg'
]

function App() {
  return (
    <div className=" w-screen max-w-full  bg-indigo-500 overflow-hidden">
      <div className=" w-4/5 ml-auto mr-auto mt-12 flex flex-col font-semibold font-magnolia text-white ">
        <p className="text-[2rem] leading-tight">
          Wow, look
        </p>
        <p className="text-[9rem] font-magnolia leading-tight -mt-3 mb-2">
          PHOTOS
        </p>
      


 
        <SRLWrapper>
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex  z-10 "
        columnClassName=" "
      >
        {
          photos.map(photo => {
            return (
              <div className=' rounded-xl overflow-hidden m-2 mb-4 hover:scale-105 transform-gpu  transition-all' title={photo}  >
                <LazyLoad height={200} offset={100} once>
                  <img src={process.env.PUBLIC_URL + '/photos/' + photo} className='overflow-hidden' />
                </LazyLoad>
              </div>
              
            )
          })
        }
      </Masonry>
        </SRLWrapper>
     
     
      </div>

      
    </div>
  );
}



export default App;


