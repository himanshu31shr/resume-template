import React from 'react';
import jss from 'jss';
import { fadeIn } from 'react-animations';
import preset from 'jss-preset-default';

jss.setup(preset())
const {classes} = jss.createStyleSheet({
  '@keyframes fadeIn': fadeIn,
  fadeIn: {
    animationName: 'fadeIn',
    animationDuration: '1s',
  },
}).attach() 

const Transition  = (Page) => {

	return props => 
		<div className={classes.fadeIn}>
			<Page {...props} />
		</div>

}

export default Transition;