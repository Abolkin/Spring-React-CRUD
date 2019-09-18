package com.example.demo.service;

import com.example.demo.exception.OrderLineRepoException;
import com.example.demo.exception.OrderRepoException;
import com.example.demo.model.Order;
import com.example.demo.model.OrderLine;
import com.example.demo.repository.OrderLineRepository;
import com.example.demo.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderLineServiceImpl implements OrderLineService {

    @Autowired
    OrderLineRepository orderLineRepository;

    @Override
    public OrderLine findOneOrderLine(Long id) throws OrderLineRepoException {
        return orderLineRepository.findById(id)
                .orElseThrow(() -> new OrderLineRepoException("Order line not found with id " + id));
    }

    @Override
    public List<OrderLine> findAllOrderLines() {
        return (List<OrderLine>) orderLineRepository.findAll();
    }

    @Override
    public OrderLine saveOrderLine(OrderLine goods) {
        return orderLineRepository.save(goods);
    }

    @Override
    public void deleteOrderLine(Long id) {
        orderLineRepository.deleteById(id);
    }
}
