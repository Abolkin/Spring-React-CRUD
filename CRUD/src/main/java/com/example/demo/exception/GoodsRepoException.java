package com.example.demo.exception;

public class GoodsRepoException extends Exception {
    public GoodsRepoException(String message) {
        super(message);
    }

    public GoodsRepoException(String message, Throwable cause) {
        super(message, cause);
    }
}
