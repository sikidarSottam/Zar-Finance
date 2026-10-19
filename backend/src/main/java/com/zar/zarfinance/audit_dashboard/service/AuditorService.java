package com.zar.zarfinance.audit_dashboard.service;

import com.zar.zarfinance.account.dtos.AccountDTO;
import com.zar.zarfinance.auth_users.dtos.UserDTO;
import com.zar.zarfinance.transaction.dtos.TransactionDTO;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface AuditorService {

    Map<String, Long> getSystemTotals();

    Optional<UserDTO> findUserByEmail(String email);

    Optional<AccountDTO> findAccountDetailsByAccountNumber(String accountNumber);

    List<TransactionDTO> findTransactionsByAccountNumber(String accountNumber);

    Optional<TransactionDTO> findTransactionById(Long transactionId);
}

