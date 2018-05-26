import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import CurationsContent from '../services/curations';
import LinesEllipsis from 'react-lines-ellipsis';
import ProjectDetails from '../components/projectDetails';

class Curations extends Component {

	constructor(props) {
        super(props);
        let cur = new CurationsContent();
        
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false,
        	curations:cur.get(4)
        };

        this.loadCuration = this.loadCuration.bind(this);
    }

    loadCuration(id, e){
        let cur = new CurationsContent();
    	this.setState({ isPaneOpen: true });
        const selected = cur.getById(id);
        this.setState({selected:selected});
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

	render(){
		const curations = this.state.curations;
		return (
			<section id='fifth' className="section fp-auto-height projects bg-dark text-light" ref={ref => this.el = ref}>
				{this.state.selected ?
					<SlidingPane
			            className='some-custom-class'
			            overlayClassName='some-custom-overlay-class'
			            isOpen={ this.state.isPaneOpen }
			            title='Project details'
			            width="55%"
			            onRequestClose={ () => {
			                this.setState({ isPaneOpen: false });
			            } }>
			            <div>
				            <ProjectDetails project={this.state.selected} />
			        	</div>
			        </SlidingPane> : null }
				<div className="container">
					<div className="row m-4">
						<div className="col-12 mb-4">
							<div className="pseudo_border mb-4">
								<h2 className="display-4 pb-2 text-center font-weight-bold ">Last few curations</h2>
							</div>
						</div>
						{curations.map((item) => 
							<div className="col-sm-12 col-lg-6">
								<div className="media mb-4 text-dark">
								  <div className="media-body align-self-center bg-white p-4 border border-dark rounded">
								    <h3 className="mt-0">{item.title}</h3>
								  	<div className="row mt-3">
										<div className="col text-left ml-2" style={{'font-size': '0.8em'}}>
										    <p className="m-0 text-muted"><strong>{item.position}</strong></p>
										    <p className="m-0 text-muted">Team: {item.team.developers} devs & {item.team.designer} designer.</p>
										</div>
										<div className="col text-right">
										    <p className="stack-used text-muted">
										    	{item.technologies.map((tech) => <i className={'devicon-'+tech+'-plain'}></i> )}
										    </p>
										</div>
								  	</div>
								    <p className="text-muted ml-2">
								    <LinesEllipsis
									  text={item.description}
									  maxLine='3'
									  ellipsis='...'
									  trimRight
									  basedOn='words'
									/>
								    </p>

								    {item.isNda &&
									    <p className="ml-2">
										    <small className="text-muted ">** The project is signed under NDA agreement.</small>
									    </p>
								    }
								    <p className="text-left mt-4">
								    	<button onClick={(e) => this.loadCuration(item.id, e)} 
								    			className="btn btn-outline-info btn-sm btn-element">
								    		See details
								    	</button>
								    </p>
								  </div>
								</div>
							</div>
						)}
					</div>

					<div className="row">
						<div className="col pl-4 ml-4">
							<Link to={'/curations'} className="btn btn-outline-light mb-0 border-radius-10 ml-3 btn-main"><span className="">See all curations</span></Link>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Curations;