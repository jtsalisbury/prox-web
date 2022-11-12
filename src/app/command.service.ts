import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface CommandData {
  prettyName: string;
  help: string;
  aliases: any;
  params: [{
    name: string;
    type: string;
    optional: boolean;
    default: any;
  }];
  userPermissions: [string];
  botPermissions: [string];
  canExecuteExternally: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http: HttpClient) {}

  getAll() {
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*')
    return this.http.get("http://jtsalisbury.me:3001/help", { headers: header });
  }
}
