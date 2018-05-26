import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

const AboutMe = (props) => {
	return (
		<section id='second' className="section fp-auto-height intro-section m-4 p-4">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div class="media">
						  <img src={props.image} width={"300px"} className="img-fluid mr-4 align-self-center rounded-circle" />
						  <div class="media-body ml-4 align-self-center">
						    <h2 className="font-weight-light m-4">
						    	<LinesEllipsis
								  text={props.summary}
								  maxLine='6'
								  ellipsis='...'
								  trimRight
								  basedOn='letters'
								/>
							</h2>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;