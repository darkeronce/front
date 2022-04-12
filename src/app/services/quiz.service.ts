import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  endpointUrl = environment.url + '/quiz';
  errorData!: {}

  constructor(private http: HttpClient) { }

  rockCount(){
    return this.http.get(`${this.endpointUrl}/rockresults`).pipe(map(res => {
      return res;
    })
    );
  }

  popCount(){
    return this.http.get(`${this.endpointUrl}/popresults`).pipe(map(res => {
      return res;
    })
    );
  }

  jazzCount(){
    return this.http.get(`${this.endpointUrl}/jazzresults`).pipe(map(res => {
      return res;
    })
    );
  }

  classsicCount(){
    return this.http.get(`${this.endpointUrl}/classicresults`).pipe(map(res => {
      return res;
    })
    );
  }

  etcCount(){
    return this.http.get(`${this.endpointUrl}/etcresults`).pipe(map(res => {
      return res;
    })
    );
  }

  save(quiz: Quiz) {
    return this.http.post(this.endpointUrl, quiz).pipe(map(res => {
      return res;
    })
    );
  }
}
