import React, { Component } from 'react'
import CourseDataService from '../service/CourseDataService';

class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goods: [],
            message: null
        }
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses()
            .then(
                response => {
                    this.setState({ goods: response.data })
                }
            )
    }

    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )

    }

    addCourseClicked() {
        this.props.history.push(`/goods/-1`)
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/goods/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>Все товары</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Название</th>
                                <th>Цена</th>
                                <th>Изменить</th>
                                <th>Удалить</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.goods.map(
                                    goods =>
                                        <tr key={goods.id}>
                                            <td>{goods.id}</td>
                                            <td>{goods.name}</td>
                                            <td>{goods.price}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateCourseClicked(goods.id)}>Изменить</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(goods.id)}>Удалить</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addCourseClicked}>Добавить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent