package com.example.demo.service;

import com.example.demo.exception.OrderLineRepoException;
import com.example.demo.exception.OrderRepoException;
import com.example.demo.model.OrderLine;

import java.util.List;

public interface OrderLineService {

    OrderLine findOneOrderLine(Long id) throws OrderLineRepoException;

    List<OrderLine> findAllOrderLines();

    OrderLine saveOrderLine(OrderLine orderLine);

    void  deleteOrderLine(Long id);
}
