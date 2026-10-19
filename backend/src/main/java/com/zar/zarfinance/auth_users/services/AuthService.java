package com.zar.zarfinance.auth_users.services;

import com.zar.zarfinance.auth_users.dtos.LoginRequest;
import com.zar.zarfinance.auth_users.dtos.LoginResponse;
import com.zar.zarfinance.auth_users.dtos.RegistrationRequest;
import com.zar.zarfinance.auth_users.dtos.ResetPasswordRequest;
import com.zar.zarfinance.res.Response;

public interface AuthService {
    Response<String > register(RegistrationRequest request);
    Response<LoginResponse> login(LoginRequest loginRequest);
    Response<? > forgetPassword(String email);
    Response<? > updatePasswordViaResetCode(ResetPasswordRequest resetPasswordRequest);
}






