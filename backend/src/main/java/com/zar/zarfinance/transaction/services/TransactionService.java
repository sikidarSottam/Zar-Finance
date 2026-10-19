package com.zar.zarfinance.transaction.services;

import com.zar.zarfinance.res.Response;
import com.zar.zarfinance.transaction.dtos.TransactionDTO;
import com.zar.zarfinance.transaction.dtos.TransactionRequest;

import java.util.List;

public interface TransactionService {
    Response<?>createTransaction(TransactionRequest transactionRequest);
    Response<List<TransactionDTO>> getTransactionsForMyAccount(String accountNumber, int page, int size);
}

