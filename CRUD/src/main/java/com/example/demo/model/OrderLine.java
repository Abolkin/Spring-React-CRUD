package com.example.demo.model;

import com.example.demo.service.OrderData;
import com.example.demo.service.OrderLineData;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Collection;
import java.util.HashSet;

@Getter
@Setter
@ToString
@Table
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderLine implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private Long count;

    @OneToOne
    private Order order;

    @OneToMany
    private Collection<Goods> goods = new HashSet<>();

    public static OrderLine from(OrderLineData orderLineData) {
        if (orderLineData == null) {
            return null;
        }
        OrderLine.OrderLineBuilder builder = OrderLine.builder();
        if(!orderLineData.getId().equals((long) -1)) {
            builder.id(orderLineData.getId());
        }
        return builder
                .count(orderLineData.getCount())
                .order(orderLineData.getOrder())
                .goods(orderLineData.getGoods())
                .build();
    }

}
