import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import OrderDataService from '../service/OrderDataService';
import {InputGroup} from 'react-bootstrap';

class OrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            client: '',
            date: '',
            address: '',
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

        OrderDataService.retrieveOrder(this.state.id)
            .then(response => this.setState({
                client: response.data.client,
                date: response.data.date,
                address: response.data.address
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.client) {
            errors.name = 'Введите название'
        } else if (values.client.length < 5) {
            errors.name = 'Название не может иметь менее 5 символов'
        }
        if (!values.address) {
            errors.name = 'Введите цену'
        } else if (values.address.length < 5) {
            errors.name = 'Название не может иметь менее 5 символов'
        }
        return errors

    }

    onSubmit(values) {

        let order = {
            id: this.state.id,
            client: values.client,
            date: values.date,
            address: values.address,
        }

        if (this.state.id === -1) {
            OrderDataService.createOrder(order)
                .then(() => this.props.history.push('/orders'))
        } else {
            OrderDataService.updateOrder(order)
                .then(() => this.props.history.push('/orders'))
        }

        console.log(values);
    }

    render() {

        let { client, id, date, address} = this.state

        return (
            <div>
                <h3>Товары</h3>
                <div className="container">
                    <Formik
                        initialValues={{ client, id, date, address }}
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
                                            <InputGroup.Text id="inputGroup-sizing-default">Клиент</InputGroup.Text>
                                        </InputGroup.Prepend>
                                                <Field className="form-control" aria-label="Id"
                                                       aria-describedby="inputGroup-sizing-default" name="client" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Дата</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Field className="form-control" aria-label="Id"
                                               aria-describedby="inputGroup-sizing-default" name="date" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Адрес</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Field className="form-control" aria-label="Id"
                                               aria-describedby="inputGroup-sizing-default" name="address" />
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

export default OrderComponent