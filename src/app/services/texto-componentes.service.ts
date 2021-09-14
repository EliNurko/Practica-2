import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextoComponentesService {

  miTexto = new BehaviorSubject<any>('Texto inicial')

  constructor() { }
}
