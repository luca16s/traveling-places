import { BaseService } from './../../../shared/services/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViagemService extends BaseService {
  constructor() {
    super('viagem');
  }
}
