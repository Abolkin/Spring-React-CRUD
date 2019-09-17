package com.example.demo.model;

import com.example.demo.service.OrderData;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.ZonedDateTime;

@Getter
@Setter
@ToString
@Table(name = "ORDER_TABLE")
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Order implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min=2, max=30)
    private String client;

    @NotNull
    private ZonedDateTime date;

    @NotNull
    @Size(min=2, max=30)
    private String address;

    public static Order from(OrderData orderData) {
        if (orderData == null) {
            return null;
        }
        OrderBuilder builder = Order.builder();
        if(!orderData.getId().equals((long) -1)) {
            builder.id(orderData.getId());
        }
        return builder
                .client(orderData.getClient())
                .date(orderData.getDate())
                .address(orderData.getAddress())
                .build();
    }
}
