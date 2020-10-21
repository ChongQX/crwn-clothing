import React from 'react';
import { withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div style={{backgroundImage: `url(${imageUrl})` }} 
    className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
//withRouter to gain access to eg.history props
//not all children needs this props, so do dont pass down from homepage