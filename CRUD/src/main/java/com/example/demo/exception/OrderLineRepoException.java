package com.example.demo.exception;

public class OrderLineRepoException extends Exception {
    public OrderLineRepoException(String message) {
        super(message);
    }

    public OrderLineRepoException(String message, Throwable cause) {
        super(message, cause);
    }
}
