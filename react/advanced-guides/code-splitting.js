import MyErrorBoundary from './MyErrorBoundary';
const OtherComponent = React.lazy(() => import('./OtherCompnent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
	return (
		<div>
			<MyErrorBoundary>
      	<Suspense fallback={<div>Loading...</div>}>
      		<section>
      	 		<OtherComponent />
      	 		<AnotherComponent />
      	 	</section>
      	</Suspense>
      </MyErrorBoundary>
    </div>
	)
}

// Route-based Code splitting
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);