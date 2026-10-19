package com.zar.zarfinance.exceptions;

public class InsufficientBalanceException extends RuntimeException{
    public InsufficientBalanceException(String error){
        super(error);
    }
}
