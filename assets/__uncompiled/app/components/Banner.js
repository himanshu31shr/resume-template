import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
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

const Banner = (props) => {
	return(
		<header id='first' className={"section fp-auto-height p-4 "+classes.fadeIn} >
			<nav className="navbar navbar-expand-lg navbar-light pb-4">
				<div className="container">
				  <Link className="navbar-brand" to={'/'}>
				    <span className="bg-info border-primary rounded text-white text-bold header-logo">HS</span>
				  </Link>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
				    <ul className="navbar-nav d-flex justify-content-end">
				     
				    </ul>
				    <ul className="navbar-nav">
				      <li className="nav-item">
				        <Link className="nav-link" to={'/'}>Blog</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to={'/curations'}>Projects</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to={'/experience'}>Experience</Link>
				      </li>
				    </ul>
				  </div>
				</div>
			</nav>
			<Switch>
				<Route exact path={'/'}>
					<div className="header-cover">
						<div className="container">
							<div className="row p-4">
								<div className="col font-weight-normal cover-section">
									<h1 className="display-4 pb-2">Hello, I'm <span className=" font-weight-bold text-capitalize border-primary border-bottom">{props.first_name}</span></h1>
									<h1 className="display-4 pb-1 text-muted">{props.qualities[0]}, {props.qualities[1]}</h1>
									<h1 className="display-4 pb-1 text-muted">& {props.qualities[2]}.</h1>
									<button className="btn btn-lg  btn-main btn-outline-dark"><i className="fa fa-hashtag"></i>Hire Me</button>
								</div>
							</div>
						</div>
					</div>
				</Route>
				<Route exact path={'/curations'} >
					<div className="header-cover m-4">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="pseudo_border">
										<h2 className="display-4 text-center text-dark font-weight-bold">Why i'm awesome!</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Route>

				<Route exact path={'/experience'} >
						<div className="header-cover m-4">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="pseudo_border">
											<h2 className="display-4 text-center text-dark font-weight-bold">Companies i've been with!</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
				</Route>
				<Route exact path={'/skills'} >

					<div className="header-cover m-4">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="pseudo_border">
											<h2 className="display-4 text-center text-dark font-weight-bold">All i know..</h2>
										</div>
									</div>
								</div>
							</div>
					</div>
				</Route>

			</Switch>
		</header>
	)
}

export default Banner