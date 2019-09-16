import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseComponent from './CourseComponent';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Приложение заказа товаров</h1>
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/goods" exact component={ListCoursesComponent} />
                        <Route path="/goods/:id" component={CourseComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp