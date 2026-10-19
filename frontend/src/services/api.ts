import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export const apiService = {
    saveAuthData: (token: string, roles: string[]) => {
        localStorage.setItem('token', token);
        localStorage.setItem('roles', JSON.stringify(roles));
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('roles');
    },

    hasRole(role: string) {
        const roles = localStorage.getItem('roles');
        return roles ? JSON.parse(roles).includes(role) : false;
    },

    isAuthenticated: () => {
        return localStorage.getItem('token') !== null;
    },

    isAdmin() {
        return this.hasRole('ADMIN');
    },

    isCustomer() {
        return this.hasRole('CUSTOMER');
    },

    isAuditor() {
        return this.hasRole('AUDITOR');
    },

    login: (body: Record<string, string>) => {
        return api.post('/auth/login', body);
    },

    register: (body: Record<string, string>) => {
        return api.post('/auth/register', body);
    },

    forgetPassword: (body: { email: string }) => {
        return api.post('/auth/forgot-password', body);
    },

    resetPassword: (body: { code: string; newPassword: string }) => {
        return api.post('/auth/reset-password', body);
    },

    getMyProfile: () => {
        return api.get('/users/me');
    },

    updatePassword: (oldPassword: string, newPassword: string) => {
        return api.put('/users/update-password', {
            oldPassword,
            newPassword,
        });
    },

    uploadProfilePicture: (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        return api.put('/users/profile-picture', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    getMyAccounts: () => {
        return api.get('/accounts/me');
    },

    makeTransfer: (transferData: Record<string, unknown>) => {
        return api.post('/transactions', transferData);
    },

    makeDeposit: (depositData: Record<string, unknown>) => {
        return api.post('/transactions', depositData);
    },

    getTransactions: (accountNumber: string, page = 0, size = 10) => {
        return api.get(`/transactions/${accountNumber}?page=${page}&size=${size}`);
    },

    getSystemTotals: () => {
        return api.get('/audit/totals');
    },

    findUserByEmail: (email: string) => {
        return api.get(`/audit/users?email=${email}`);
    },

    findAccountByAccountNumber: (accountNumber: string) => {
        return api.get(`/audit/accounts?accountNumber=${accountNumber}`);
    },

    getTransactionsByAccountNumber: (accountNumber: string) => {
        return api.get(`/audit/transactions/by-account?accountNumber=${accountNumber}`);
    },

    getTransactionById: (id: number) => {
        return api.get(`/audit/transactions/by-id?id=${id}`);
    },
};

export default api;
