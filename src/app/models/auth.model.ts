import {BaseUserModel} from './user.model';

export interface LoginModel {
    email: string;
    password: string;
}

export interface LoginWithAccessCodeModel {
    email: string;
    access_code: string;
}

export interface RegisterUserModel extends BaseUserModel {
    password?: string | null;
    password_confirmation: string | null;
}

export interface ForgotPasswordModel {
    email: string;
}

export interface ResetPasswordModel {
    email: string;
    token: string;
    password: string;
    password_confirmation: string;
}
