package com.zar.zarfinance.role.services;

import com.zar.zarfinance.res.Response;
import com.zar.zarfinance.role.entity.Role;

import java.util.List;

public interface RoleService {

    Response<Role> createRole(Role roleRequest);

    Response<Role> updateRole(Role roleRequest);

    Response<List<Role>> getAllRoles();

    Response<?> deleteRole(Long id);

}

