import React from 'react';

const ProjectDetails = (props) => {
	return (
		<div className="row details-page">
	    	<div className="col-12">
	        	<h3>{props.project.title}
	        	</h3>
	    		<small>Position: {props.project.position}</small>
	            <hr />
	        </div>

	    	<div className="col-12 mt-2">
	        	<h5>Technolgies used:</h5>
	        	<p>
	        		{(props.project.technologies).map((technology) => <span className="text-capitalize text-muted mr-2"><i className={'devicon-'+technology+'-plain'}></i> {technology}</span>)}
	        	</p>
			</div>

			<div className="col-12 mt-2">
	        	<h5>Project outline:</h5>
	            <p className="text-muted">{props.project.description}</p>
	        </div>
	        
	        <div className="col-12 mt-2">
	            <h5>Roles and Responsibilities:</h5>
	            <ul className="mr-2">
				{(props.project.details.responsibilities).map((technology) => <li className="text-capitalize text-muted">{technology}</li>)}
	            </ul>
	       </div>
	       <div className="col-12 mt-2">
	            <h5>Top Contributions:</h5>
	            <ul className="mr-2">
				{(props.project.details.top_modules).map((technology) => <li className="text-capitalize text-muted">{technology}</li>)}
	            </ul>
	       </div>
	    </div>
	)
}

export default ProjectDetails;