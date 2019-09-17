import React, { Component } from 'react'
import GoodsDataService from '../service/GoodsDataService';

class ListGoodsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goods: [],
            message: null
        }
        this.deleteGoodsClicked = this.deleteGoodsClicked.bind(this)
        this.updateGoodsClicked = this.updateGoodsClicked.bind(this)
        this.addGoodsClicked = this.addGoodsClicked.bind(this)
        this.refreshGoods = this.refreshGoods.bind(this)
    }

    componentDidMount() {
        this.refreshGoods();
    }

    refreshGoods() {
        GoodsDataService.retrieveAllGoods()
            .then(
                response => {
                    this.setState({ goods: response.data })
                }
            )
    }

    deleteGoodsClicked(id) {
        GoodsDataService.deleteGoods(id)
            .then(
                response => {
                    this.setState({ message: `Delete of goods ${id} Successful` })
                    this.refreshGoods()
                }
            )

    }

    addGoodsClicked() {
        this.props.history.push(`/goods/-1`)
    }

    updateGoodsClicked(id) {
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
                                            <td><button className="btn btn-success" onClick={() => this.updateGoodsClicked(goods.id)}>Изменить</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteGoodsClicked(goods.id)}>Удалить</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addGoodsClicked}>Добавить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListGoodsComponent