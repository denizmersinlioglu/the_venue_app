import React from 'react';
const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24016.04607086109!2d29.043351510093277!3d41.19984802401952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409fe093fb4f1e2f%3A0xb51b89285c845350!2sKoc+University!5e0!3m2!1sen!2str!4v1543787699824'
        width='100%'
        height='500px'
        frameBorder='0'
        allowFullScreen
      />
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
