import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ClientService', () => {
  let service: ClientService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GIVEN postClient', () => {
    it('WHEN is call post THEN is called', () => {
      const client = {
        shared_key: '',
        name: '',
        email: '',
        phone: 0,
        data_added: ''
      }

      spyOn(http, 'post')

      service.postClient(client);

      expect(http.post).toHaveBeenCalledWith('http://localhost:8080/api/clients',client);

    });
  });

  describe('GIVEN updateClient', () => {
    it('WHEN is call put THEN is called', () => {
      const client = {
        shared_key: '',
        name: '',
        email: '',
        phone: 0,
        data_added: ''
      }

      spyOn(http, 'put')

      service.updateClient(client);

      expect(http.put).toHaveBeenCalledWith('http://localhost:8080/api/clients',client);

    });
  });
});
