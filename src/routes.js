import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//components
const Layout = React.lazy(() => import('./components/layout'));
const Header = React.lazy(() => import('./components/header'));
const AboutUs = React.lazy(() => import('./components/about'));
const Careers = React.lazy(() => import('./components/careers'));
const ContactUs = React.lazy(() => import('./components/contact'));
const Services = React.lazy(() => import('./components/services'));

export default function Routes(props) {
    console.log('routes', props)
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Layout />
                    </Route>
                    <Route exact path="/about" render={() => <AboutUs {...props} />} />
                    <Route exact path="/contact">
                        <ContactUs />
                    </Route>
                    <Route exact path="/careers">
                        <Careers />
                    </Route>
                    <Route exact path="/services">
                        <Services />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
}
