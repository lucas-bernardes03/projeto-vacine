import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {LoginService} from '../login.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if(inject(LoginService).logado){
    const token = inject(LoginService).obterTokenUsuario

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  return next(req)
};
