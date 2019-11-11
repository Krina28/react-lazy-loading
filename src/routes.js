import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//components
const Header = React.lazy(() => import('./components/header'));
const AboutUs = React.lazy(() => import('./components/about'));
const Careers = React.lazy(() => import('./components/careers'));
const ContactUs = React.lazy(() => import('./components/contact'));
const Services = React.lazy(() => import('./components/services'));

export default function Routes() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Switch>
                    <Route path="/about">
                        <AboutUs />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                    <Route path="/careers">
                        <Careers />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
}
