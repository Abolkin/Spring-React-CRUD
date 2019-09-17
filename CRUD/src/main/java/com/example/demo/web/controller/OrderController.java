package com.example.demo.web.controller;

import com.example.demo.exception.OrderRepoException;
import com.example.demo.model.Order;
import com.example.demo.service.OrderData;
import com.example.demo.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        return orderService.findAllOrders();
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<OrderData> getOrder(@PathVariable long id) {
        try {
            OrderData result = OrderData.from(orderService.findOneOrder(id));
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (OrderRepoException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/orders/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/orders")
    public ResponseEntity<OrderData> updateOrder(@RequestBody OrderData orderData) {
        return new ResponseEntity<>(OrderData.from(orderService.saveOrder(Order.from(orderData))), HttpStatus.OK);
    }

    @PostMapping("/orders")
    public ResponseEntity<Void> createOrder(@PathVariable String name, @RequestBody OrderData orderData) {
        OrderData createdOrder = OrderData.from(orderService.saveOrder(Order.from(orderData)));
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdOrder.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }
}
