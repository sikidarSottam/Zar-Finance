package com.zar.zarfinance.account.services;

import com.zar.zarfinance.account.dtos.AccountDTO;
import com.zar.zarfinance.account.entity.Account;
import com.zar.zarfinance.auth_users.entity.User;
import com.zar.zarfinance.enums.AccountType;
import com.zar.zarfinance.res.Response;

import java.util.List;

public interface AccountService {
    Account createAccount(AccountType accountType, User user);

    Response<List<AccountDTO>> getMyAccounts();

    Response<?> closeAccount(String accountNumber);
}

