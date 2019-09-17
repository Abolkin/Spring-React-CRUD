import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../service/GoodsDataService';

class GoodsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            price: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                price: response.data.price
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Введите название'
        } else if (values.name.length < 5) {
            errors.name = 'Название не может иметь менее 5 символов'
        }
        if (!values.price) {
            errors.name = 'Введите цену'
        } else if (values.price < 0) {
            errors.name = 'Введите корректную цену'
        }
        return errors

    }

    onSubmit(values) {

        let goods = {
            id: this.state.id,
            name: values.name,
            price: values.price,
        }

        if (this.state.id === -1) {
            CourseDataService.createCourse(goods)
                .then(() => this.props.history.push('/goods'))
        } else {
            CourseDataService.updateCourse(goods)
                .then(() => this.props.history.push('/goods'))
        }

        console.log(values);
    }

    render() {

        let { name, id, price } = this.state

        return (
            <div>
                <h3>Товары</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, name, price }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="name" component="div"
                                                  className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Название</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Цена</label>
                                        <Field className="form-control" type="text" name="price" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Сохранить</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default GoodsComponent