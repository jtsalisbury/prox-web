import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface CommandData {
  prettyName: string;
  help: string;
  aliases: [string];
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
    return this.http.get("https://cors-anywhere.herokuapp.com/https://discord-prox.herokuapp.com/help");
  }
}
