import React from 'react';

const convertTime = (date) => {
	return (new Intl.DateTimeFormat('en-GB', { 
     	year: 'numeric', 
      	month: 'long', 
      	day: '2-digit' 
    }).format(Date.parse(date)));
}

const ExperienceDetails = (props) => {
	return (
		<div className="row details-page">
	    	<div className="col-12">
	        	<h3>{props.project.company_name}
	        	</h3>
	    		<small>{props.project.designation}</small>
	    		<small className="float-right">{convertTime(props.project.started)} - {props.project.current === true ? 'Current' : convertTime(props.project.ended)}</small>
	            <hr />
	        </div>

	        <div className="col-12 mt-2">
	        	<p>{props.project.about}</p>
	        </div>
	    	
	    	<div className="col-12 mt-2">
	        	<h5>Technolgies used</h5>
	        	<p>
	        		{(props.project.technologies).map((technology) => <span className="text-capitalize text-muted mr-2"><i className={'devicon-'+technology+'-plain'}></i> {technology}</span>)}
	        	</p>
			</div>

			<div className="col-12 mt-2">
	        	<h5>Projects</h5>
	        	<ul>
        		{(props.project.projects).map((technology) => <li className="text-capitalize text-muted"> {technology}</li>)}
				</ul>
			</div>

	    </div>
	)
}

export default ExperienceDetails;