import React, { Component } from 'react';

class TimeUntil extends Component {
  state = {};
  render() {
    var item = {
      name: '',
      value: 0
    };
    var items = [('days', 59), ('weks', 3)];

    return (
      <div className='countdown_wrapper'>
        <div className='countdown_top'>Event Starts In</div>
        <div className='countdown_bottom'>
          {items.map(key => (
            <div key={key} className='countdown_item'>
              <div key={key} className='countdown_time'>
                59
              </div>
              <div key={key + 1} className='countdown_tag'>
                {key}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TimeUntil;
