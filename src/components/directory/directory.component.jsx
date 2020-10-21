import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  // ({title, imageUrl, id, size, linkUrl}) same as id ...othersectionprops
  // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/> same as ...othersectionprops
  <div className='directory-menu'>{
    sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);