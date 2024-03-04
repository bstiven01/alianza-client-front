import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientsSubject: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);

  private flagMenuSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8080/api/clients');
  }

  postClient(client: Client): Observable<Client[]> {
    return this.http.post<Client[]>('http://localhost:8080/api/clients', client);
  }

  updateClient(client: Client): Observable<Client[]> {
    return this.http.put<Client[]>('http://localhost:8080/api/clients', client);
  }

  get clientObservableBehavior() {
    return this.clientsSubject.asObservable();
  }

  get clientObservableValues() {
    return this.clientsSubject.getValue();
  }

  set clientSubjectSetData(client: Client[]){
    this.clientsSubject.next(client);
  }

  get flagMenuObservableBehavior() {
    return this.flagMenuSubject.asObservable();
  }

  set flagMenuSubjectSetData(menu: boolean){
    this.flagMenuSubject.next(menu);
  }


}
