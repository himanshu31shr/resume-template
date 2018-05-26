import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import OpenSourceContent from '../services/openSource';
import OpenSourceDetails from '../components/OpenSourceDetails';

class OpenSource extends Component {
		
	constructor(props){
		super(props);
		let cur = new OpenSourceContent();
        
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false,
        	curations:cur.get(2)
        };

        this.loadProject = this.loadProject.bind(this);
	}

	loadProject(id, e){
        let cur = new OpenSourceContent();
        const selected = cur.getById(id);
    	this.setState({ isPaneOpen: true });
        this.setState({selected:selected});
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

	render() {
		return (
			<section id='sixth' className="section fp-auto-height community bg-light" ref={ref => this.el = ref }>
				{this.state.selected ?
					<SlidingPane
			            className='some-custom-class'
			            overlayClassName='slide-overlay'
			            isOpen={ this.state.isPaneOpen }
			            title='Project details'
			            width='55%'
			            onRequestClose={ () => {
			                this.setState({ isPaneOpen: false });
			            } }>
			            <div>
				            <OpenSourceDetails project={this.state.selected} />
			        	</div>
			        </SlidingPane> : 
				null }

				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="pseudo_border mb-4">
								<h2 className="display-4 pb-2 text-center font-weight-bold ">Open Source</h2>
							</div>
						</div>
					</div>
					
					<div className="row mt-4 p-4">
					  {this.state.curations.map((project) => 
					  <div className="col-sm-6 m-4">
					    <div className="card">
					    	{project.image != '' ? 
						      <img className="card-img-top" src={'https://www.macobserver.com/wp-content/uploads/2017/10/code-2434271_1280-1024x538.jpg'} alt="Card image cap" />
						      : null }
					      <div className="card-body">
					        <h4 className="card-title">{project.title}</h4>
					        <div>
							    <p className="stack-used text-muted">
							    	{project.technologies.map((tech) => 
							    		<i className={'devicon-'+tech+'-plain'}></i> 
						    		)}
							    </p>
							</div>
					        <p className="card-text text-muted">
						        <LinesEllipsis
								  text={project.description}
								  maxLine='2'
								  ellipsis='...'
								  trimRight
								  basedOn='letters'
								/>
							</p>
					        <button onClick={(e) => this.loadProject(project.id, e)} className="btn btn-element btn-info btn-sm">Details</button>
					        <a href={project.link} target="_blank" className="btn btn-element btn-outline-info btn-sm float-right"><i className="fa fa-external-link"></i></a>
					      </div>
					    </div>
					  </div>
					  	)}
				    </div>
				</div>
			</section>
		)
	}
}

export default OpenSource