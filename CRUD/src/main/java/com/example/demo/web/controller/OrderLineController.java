package com.example.demo.web.controller;

import com.example.demo.exception.OrderLineRepoException;
import com.example.demo.exception.OrderRepoException;
import com.example.demo.model.Order;
import com.example.demo.model.OrderLine;
import com.example.demo.service.OrderData;
import com.example.demo.service.OrderLineData;
import com.example.demo.service.OrderLineService;
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
public class OrderLineController {

    @Autowired
    OrderLineService orderLineService;

    @GetMapping("/orderlines")
    public List<OrderLine> getAllOrderLines() {
        return orderLineService.findAllOrderLines();
    }

    @GetMapping("/orderlines/{id}")
    public ResponseEntity<OrderLineData> getOrderLine(@PathVariable long id) {
        try {
            OrderLineData result = OrderLineData.from(orderLineService.findOneOrderLine(id));
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (OrderLineRepoException  e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/orderlines/{id}")
    public ResponseEntity<Void> deleteOrderLine(@PathVariable long id) {
        orderLineService.deleteOrderLine(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/orderlines")
    public ResponseEntity<OrderLineData> updateOrderLine(@RequestBody OrderLineData orderLineData) {
        return new ResponseEntity<>(OrderLineData.from(orderLineService.saveOrderLine(OrderLine.from(orderLineData))), HttpStatus.OK);
    }

    @PostMapping("/orderlines")
    public ResponseEntity<Void> createOrderLine(@RequestBody OrderLineData orderLineData) {
        OrderLineData createdOrderLine = OrderLineData.from(orderLineService.saveOrderLine(OrderLine.from(orderLineData)));
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdOrderLine.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }
}
