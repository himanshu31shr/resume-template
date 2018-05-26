import React from 'react';

const OpenSourceDetails = (props) => {
	return (
		<div className="row details-page">
	    	<div className="col-12">
	        	<h3>{props.project.title}
	        	</h3>
	            <hr />
	        </div>

	        <div className="col-12 mt-2">
	        	<p>{props.project.description}</p>
	        </div>
	    	
	    	<div className="col-12 mt-2">
	        	<h5>Technolgies used</h5>
	        	<p>
	        		{(props.project.technologies).map((technology) => <span className="text-capitalize mr-2 text-muted"><i className={'devicon-'+technology+'-plain'}></i> {technology}</span>)}
	        	</p>
			</div>

			<div className="col-12 mt-2">
	        	<h5>Features</h5>
	        	<ul>
        		{(props.project.features).map((technology) => <li className="text-capitalize text-muted"> {technology}</li>)}
				</ul>
			</div>

	    </div>
	)
}

export default OpenSourceDetails;