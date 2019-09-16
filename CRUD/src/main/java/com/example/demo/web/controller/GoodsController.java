package com.example.demo.web.controller;

import com.example.demo.exception.GoodsRepoException;
import com.example.demo.model.Goods;
import com.example.demo.service.GoodsData;
import com.example.demo.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class GoodsController {

    @Autowired
    GoodsService goodsService;

    @GetMapping("/goods")
    public List<Goods> getAllCourses() {
        return goodsService.findAllGood();
    }

    @GetMapping("/goods/{id}")
    public ResponseEntity<GoodsData> getCourse(@PathVariable long id) {
        try {
            GoodsData result = GoodsData.from(goodsService.findOneGood(id));
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (GoodsRepoException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/goods/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable long id) {
        goodsService.deleteGoods(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/goods/{id}")
    public ResponseEntity<GoodsData> updateCourse(@RequestBody GoodsData goodsData) {
        return new ResponseEntity<>(GoodsData.from(goodsService.saveGoods(Goods.from(goodsData))), HttpStatus.OK);
    }

    @PostMapping("/goods/{name}")
    public ResponseEntity<Void> createCourse(@PathVariable String name, @RequestBody GoodsData goodsData) {
        GoodsData createdCourse = GoodsData.from(goodsService.saveGoods(Goods.from(goodsData)));
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }
}
