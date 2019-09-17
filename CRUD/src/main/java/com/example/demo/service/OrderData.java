package com.example.demo.service;

import com.example.demo.model.Order;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.ZonedDateTime;

@Getter
@Setter
@Builder
public class OrderData implements Serializable {

    private Long id;
    private String client;
    private ZonedDateTime date;
    private String address;

    public static OrderData from(Order order) {
        if (order == null) {
            return null;
        }
        return OrderData.builder()
                .id(order.getId())
                .client(order.getClient())
                .date(order.getDate())
                .address(order.getAddress())
                .build();
    }
}
