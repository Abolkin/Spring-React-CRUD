package com.example.demo.service;

import com.example.demo.exception.OrderRepoException;
import com.example.demo.model.Order;

import java.util.List;

public interface OrderService {

    Order findOneOrder(Long id) throws OrderRepoException;

    List<Order> findAllOrders();

    Order saveOrder(Order goods);

    void  deleteOrder(Long id);
}
