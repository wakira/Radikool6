import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {Reserve} from './reserve';
import {ApiResult} from './api-result';

@Injectable()
export class ReserveService extends BaseService{

  constructor(http: HttpClient) { super(http); }

  /**
   * 予約取得
   * @returns {Observable<Object>}
   */
  public get = () => {
    return this.http.get<ApiResult<Reserve[]>>('./api/reserve');
  }

  /**
   * 予約保存
   * @param {Reserve} reserve
   * @returns {Observable<Object>}
   */
  public update = (reserve: Reserve) => {
    return this.http.post<ApiResult>('./api/reserve', reserve);
  }

}
