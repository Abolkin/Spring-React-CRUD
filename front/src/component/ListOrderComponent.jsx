import React, { Component } from 'react'
import OrderDataService from '../service/OrderDataService';

class ListOrderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: [],
            message: null
        }
        this.deleteOrderClicked = this.deleteOrderClicked.bind(this)
        this.updateOrderClicked = this.updateOrderClicked.bind(this)
        this.addOrderClicked = this.addOrderClicked.bind(this)
        this.refreshOrders = this.refreshOrders.bind(this)
    }

    componentDidMount() {
        this.refreshOrders();
    }

    refreshOrders() {
        OrderDataService.retrieveAllOrders()
            .then(
                response => {
                    this.setState({ order: response.data })
                }
            )
    }

    deleteOrderClicked(id) {
        OrderDataService.deleteOrder(id)
            .then(
                response => {
                    this.setState({ message: `Delete of order ${id} Successful` })
                    this.refreshOrders()
                }
            )

    }

    addOrderClicked() {
        this.props.history.push(`/orders/-1`)
    }

    updateOrderClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/orders/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>Все заказы</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Клиент</th>
                                <th>Дата</th>
                                <th>Адрес</th>
                                <th>Изменить</th>
                                <th>Удалить</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.order.map(
                                    order =>
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.client}</td>
                                            <td>{order.date}</td>
                                            <td>{order.address}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateOrderClicked(order.id)}>Изменить</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteOrderClicked(order.id)}>Удалить</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addOrderClicked}>Добавить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListOrderComponent