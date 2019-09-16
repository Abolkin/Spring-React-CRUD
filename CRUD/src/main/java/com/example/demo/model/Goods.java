package com.example.demo.model;

import com.example.demo.service.GoodsData;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Getter
@Setter
@ToString
@Table
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Goods implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min=2, max=30)
    private String name;

    private Long price;

    public static Goods from(GoodsData goodsData) {
        if (goodsData == null) {
            return null;
        }
        GoodsBuilder builder = Goods.builder();
        if(!goodsData.getId().equals((long) -1)) {
            builder.id(goodsData.getId());
        }
        return builder
                .name(goodsData.getName())
                .price(goodsData.getPrice())
                .build();
    }
}
