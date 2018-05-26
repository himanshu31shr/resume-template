import React, { Component } from 'react'
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Curations from '../components/Curations';
import OpenSource from '../components/OpenSource';
import Blogs from '../components/Blogs';

const Home = (props, style) =>  {
	return(
		<div>	
			<AboutMe image={props.image} summary={props.summary} />
			<Skills />
			<Experience />
			<Curations />
			<OpenSource />
			<Blogs />
        </div>
		
	)
}

export default Home;