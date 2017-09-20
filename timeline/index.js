import React from 'react';
import ReactDOM from 'react-dom';



import {Timeline, TimelineEvent} from './myIndex';

ReactDOM.render(
    <Timeline>
            <TimelineEvent title="First Event"
                           createdAt="2017-09-20 05:06 PM"
                           icon={<i className="material-icons md-18"></i>}
            >
                This is the first Event.
            </TimelineEvent>
            <TimelineEvent
                title="Second Event "
                createdAt="2017-09-20 05:06 PM"
                icon={<i className="material-icons md-18"></i>}
            >
                This is Second Event.
            </TimelineEvent>
    </Timeline>,
      document.getElementById('mytimeline')
);
