import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import CurationPage from './pages/Curations';
import ExperiencePage from './pages/Experience';
import SkillsPage from './pages/Skills';
import Home from './pages/Home';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Settings from './data/config.json';
import Transition from './components/Transition';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
      window.scrollTo(0, 0)
  }

  render() {
    return (
    	this.props.children
    )
  }
}

const App = ({match}) => {
	return (
		<div>
		<ScrollToTop>
			<Route path={'/'}  >
					<Banner {...Settings} />
			</Route>
			<div>
				<Switch>
					<Route path={'/'} exact>
						<Home {...Settings} />
					</Route>
					<Route path={'/curations'} component={Transition(CurationPage)} />
					<Route path={'/experience'} component={Transition(ExperiencePage)} />
					<Route path={'/skills'} component={Transition(SkillsPage)} />
				</Switch>	
			</div>
			<Route path={'/'} >
				<Footer {...Settings} />
			</Route>
			</ScrollToTop>
		</div>
	)
}

export default App;