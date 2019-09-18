package com.example.demo.service;

import com.example.demo.exception.OrderRepoException;
import com.example.demo.model.Order;
import com.example.demo.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Override
    public Order findOneOrder(Long id) throws OrderRepoException {
        return orderRepository.findById(id)
                .orElseThrow(() -> new OrderRepoException("Order not found with id " + id));
    }

    @Override
    public List<Order> findAllOrders() {
        return (List<Order>) orderRepository.findAll();
    }

    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
