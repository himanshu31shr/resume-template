import React,{ Component } from 'react'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import LinesEllipsis from 'react-lines-ellipsis';
import ExperienceDetails from '../components/ExperienceDetails';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import ExperienceContent from '../services/experience';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

class ExperiencePage extends Component {

	constructor(props) {
        super(props);
        let cur = new ExperienceContent();
        
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false,
        	curations:cur.get()
        };

        this.loadExperience = this.loadExperience.bind(this);
        this.convertTime = this.convertTime.bind(this);

    }

    loadExperience(id, e){
        let cur = new ExperienceContent();
    	this.setState({ isPaneOpen: true });
        const selected = cur.getById(id);
        this.setState({selected:selected});
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    convertTime(date){
		return (new Intl.DateTimeFormat('en-GB', { 
	     	year: 'numeric', 
	      	month: 'long', 
	      	day: '2-digit' 
	    }).format(Date.parse(date)));
	}

	render() {
		const experience = this.state.curations;
		return (

			<section id='fifth' className="section fp-auto-height projects" ref={ref => this.el = ref}>
				{this.state.selected ?
					<SlidingPane
			            className='some-custom-class'
			            overlayClassName='slide-overlay'
			            isOpen={ this.state.isPaneOpen }
			            title='Experience details'
			            width='55%'
			            onRequestClose={ () => {
			                this.setState({ isPaneOpen: false });
			            } }>
			            <div>
				            <ExperienceDetails project={this.state.selected} />
			        	</div>
			        </SlidingPane> : null }
				<div className="container">
					<div className="row">
						{experience.map((exp) => 
							<div className="media p-4 mb-4 ">
								{exp.image != '' ? 
							  <img className="align-self-center mr-5 rounded" width="250px" src={exp.image} alt="Generic placeholder image" />
							  : null}
							  <div className="media-body align-self-center">
							    <h3 className="mt-0"><a href={exp.url} target="_blank" className="float-right text-muted"><i className="fa fa-link mr-2 outbound-link"></i></a> {exp.company_name}</h3>
							    <p className="mt-0 text-muted">{exp.designation} <small className="float-right">{this.convertTime(exp.started)} - {exp.current === true ? 'Current' : this.convertTime(exp.ended)}</small></p>
							   	<LinesEllipsis
								  text={exp.about}
								  maxLine='4'
								  ellipsis='...'
								  trimRight
								  basedOn='letters'
								/>
							    <p className="text-right"><button onClick={(e) => this.loadExperience(exp.id, e)} className="btn btn-outline-info btn-sm btn-element">See details</button></p>
							  </div>
							</div>
						)}
					</div>
				</div>
			</section>
		)
	}
}



export default ExperiencePage;