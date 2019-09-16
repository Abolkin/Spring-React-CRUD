package com.example.demo.service;

import com.example.demo.model.Goods;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class GoodsData {

    private Long id;
    private String name;
    private Long price;

    public static GoodsData from(Goods goods) {
        if (goods == null) {
            return null;
        }
        return GoodsData.builder()
                .id(goods.getId())
                .name(goods.getName())
                .price(goods.getPrice())
                .build();
    }
}
