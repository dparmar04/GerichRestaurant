import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit</p>
        </div>
        <p className='p__opensans'> odio hic itaque quasi tempore quam tempora? Quis eius aspernatur quam accusamus dolor voluptates modi, vero repudiandae, culpa rerum est mollitia!</p>
      </div>

      <div className='app__chef-sign'>
        <p className='headtext__cormorant'>Kevin Luo</p>
        <p className='p__opensans'>Chef & founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
