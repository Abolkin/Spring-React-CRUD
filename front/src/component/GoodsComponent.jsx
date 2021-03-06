import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import GoodsDataService from '../service/GoodsDataService';
import {InputGroup} from 'react-bootstrap';

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

        GoodsDataService.retrieveGoods(this.state.id)
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
            GoodsDataService.createGoods(goods)
                .then(() => this.props.history.push('/goods'))
        } else {
            GoodsDataService.updateGoods(goods)
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
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Id</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Field className="form-control" aria-label="Id"
                                               aria-describedby="inputGroup-sizing-default" name="id" disabled />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Название</InputGroup.Text>
                                        </InputGroup.Prepend>
                                                <Field className="form-control" aria-label="Id"
                                                       aria-describedby="inputGroup-sizing-default" name="name" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Цена</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Field className="form-control" aria-label="Id"
                                               aria-describedby="inputGroup-sizing-default" name="price" />
                                    </InputGroup>
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