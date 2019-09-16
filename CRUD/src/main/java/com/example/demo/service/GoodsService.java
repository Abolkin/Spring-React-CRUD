package com.example.demo.service;

import com.example.demo.exception.GoodsRepoException;
import com.example.demo.model.Goods;

import java.util.List;

public interface GoodsService {

    Goods findOneGood(Long id) throws GoodsRepoException;

    List<Goods> findAllGood();

    Goods saveGoods(Goods goods);

    void  deleteGoods(Long id);
}
