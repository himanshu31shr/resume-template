import React, { Component } from 'react';
import SkillsData from '../services/skills'

import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import LinesEllipsis from 'react-lines-ellipsis';
import SkillDetails from '../components/SkillDetails';

class Skills extends Component {
	
	constructor(props){
		super(props);
		let cur = new SkillsData();
        
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false,
        	skills:cur.get(4),
        	total:cur.get().length
        };

        this.loadSkill = this.loadSkill.bind(this);
	}

	loadSkill(id, e){
        let cur = new SkillsData();
        const selected = cur.getById(id);
    	this.setState({ isPaneOpen: true });
        this.setState({selected:selected});
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

	render() {
		return (
			<section id='third' className="section fp-auto-height skills-section m-4 p-4" ref={ref => this.el = ref}>
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
				            <SkillDetails project={this.state.selected} />
			        	</div>
			        </SlidingPane> : 
		        null }

				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="pseudo_border mb-4">
								<h2 className="display-4 pb-2 text-center font-weight-bold ">My skillset</h2>
							</div>
						</div>
						
						<div className="row mt-4 skills-elements">
							{this.state.skills.map((skill)=> 

							<div className="col-6 p-4" onClick={e => this.loadSkill(skill.id, e)} style={{'cursor':'pointer'}}>
								<div className="p-2">
									<h2 className="text-skills"><i className={skill.icon}></i></h2>
									<h2 className="text-skills text-capitalize mb-3">{skill.title}</h2>
									<p className="pt-2 text-muted">
										<LinesEllipsis
										  text={skill.description}
										  maxLine='3'
										  ellipsis='...'
										  trimRight
										  basedOn='letters'
										/>
									</p>
								</div>
							</div>

							)}
						</div>
						<div className="row">
							<div className="col">
								<Link to={'/skills'} className="btn btn-info mb-0 border-radius-10 ml-3 btn-main"><span className="">+{this.state.total - 4} more skills</span></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Skills;