import React,{ Component } from 'react'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import CurationsContent from '../services/curations';
import LinesEllipsis from 'react-lines-ellipsis';
import ProjectDetails from '../components/projectDetails';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

class CurationPage extends Component {

	constructor(props) {
        super(props);
        let cur = new CurationsContent();
        
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false,
        	curations:cur.get()
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


	render() {
		const curations = this.state.curations;
		return (
				<section id='fifth' className="section fp-auto-height projects bg-white text-light" ref={ref => this.el = ref}>
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
					            <ProjectDetails project={this.state.selected} />
				        	</div>
				        </SlidingPane> : null }
					<div className="container">
						<div className="row">
							{curations.map((item) => 
								<div className="col-6 mb-4">
									<div className="media text-dark">
									  <div className="media-body align-self-center bg-light p-4 border border-info rounded">
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
										  maxLine='2'
										  ellipsis='...'
										  trimRight
										  basedOn='letters'
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
					</div>
				</section>
			
		)
	}
}



export default CurationPage;