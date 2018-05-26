import React from 'react';

const Footer = (props) => {
	return (
		<section id='seventh' className="section fp-auto-height touch bg-dark">
			<div className="container">
				<div className="row m-4">
					<div className="col-12 mb-4">
						<div className="mb-4">
							<h2 className="display-4 pb-4 text-center font-weight-bold text-light">Lets get in touch!</h2>
							<p className="text-muted text-center pt-2 mb-2">I am eager to talk to you, you can mail me</p>
							<h6 className="text-center text-light mb-4"><a href={"mail-to:"+props.email}><i className="fa fa-envelope"></i> {props.email}</a></h6>
							<p className="text-center text-muted mb-2">or message on any social network!</p>
							<div className="social-media text-light text-center">
								<a href={props.social_profiles.facebook} target="_blank"><i className="fa fa-facebook-square fa-2x mr-2"></i></a>
								<a href={props.social_profiles.linkedin} target="_blank"><i className="fa fa-linkedin-square fa-2x mr-2"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center text-muted">
				<p className="">Made with 
					<a className="ml-2" href="https://getbootstrap.com/" target="_blank"><i className="devicon-bootstrap-plain"></i></a>
					<a className="ml-2" href="https://fontawesome.com" target="_blank"><i className="fa fa-font-awesome"></i></a>
					<a className="ml-2" href="http://konpa.github.io/devicon/" target="_blank"><i class="devicon-devicon-plain"></i></a>
					<a className="ml-2" href="https://reactjs.org/" target="_blank"><i className="devicon-react-plain"></i></a>
				</p>
			</div>
		</section>
	);
}

export default Footer