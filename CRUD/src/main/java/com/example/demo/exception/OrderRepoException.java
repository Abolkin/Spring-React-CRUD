package com.example.demo.exception;

public class OrderRepoException extends Exception {
    public OrderRepoException(String message) {
        super(message);
    }

    public OrderRepoException(String message, Throwable cause) {
        super(message, cause);
    }
}
