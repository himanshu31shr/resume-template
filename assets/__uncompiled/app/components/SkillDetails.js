import React from 'react';

const SkillDetails = (props) => {
	return (
		<div className="row details-page">
	    	<div className="col-12">
		    	<h2 className="text-skills"><i className={props.project.icon}></i></h2>
	        	<h3 className="text-capitalize">{props.project.title}</h3>
	            <hr />
	        </div>

	        <div className="col-12 mt-2">
	        	<p>{props.project.description}</p>
	        </div>
	        

	        <div className="col-12 mt-2">
	        	<h5>Notable mentions</h5>
	        	<p>{props.project.mentions}</p>
	        </div>

	    </div>
	)
}

export default SkillDetails;