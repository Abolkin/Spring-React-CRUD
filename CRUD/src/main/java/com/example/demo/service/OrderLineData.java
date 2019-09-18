package com.example.demo.service;

import com.example.demo.model.Goods;
import com.example.demo.model.Order;
import com.example.demo.model.OrderLine;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Collection;
import java.util.HashSet;

@Getter
@Setter
@Builder
public class OrderLineData {

    private Long id;
    private Long count;
    private Order order;
    private Collection<Goods> goods;

    public static OrderLineData from(OrderLine orderLine) {
        if (orderLine == null) {
            return null;
        }
        return OrderLineData.builder()
                .id(orderLine.getId())
                .count(orderLine.getCount())
                .order(orderLine.getOrder())
                .goods(orderLine.getGoods())
                .build();
    }

}
