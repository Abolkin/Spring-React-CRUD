package com.example.demo.service;

import com.example.demo.exception.GoodsRepoException;
import com.example.demo.model.Goods;
import com.example.demo.repository.GoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsServiceImpl implements GoodsService {

    @Autowired
    GoodsRepository goodsRepository;

    @Override
    public Goods findOneGood(Long id) throws GoodsRepoException {
        return goodsRepository.findById(id)
                .orElseThrow(() -> new GoodsRepoException("Goods not found with id " + id));
    }

    @Override
    public List<Goods> findAllGood() {
        return (List<Goods>) goodsRepository.findAll();
    }

    @Override
    public Goods saveGoods(Goods goods) {
        return goodsRepository.save(goods);
    }

    @Override
    public void deleteGoods(Long id) {
        goodsRepository.deleteById(id);
    }
}
