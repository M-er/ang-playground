import { Component, OnInit } from '@angular/core';
 import { Injectable } from '@angular/core';
 import { CanActivate, CanActivateChild } from '@angular/router';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

 @Injectable()
 export class AuthGuard implements CanActivate, CanActivateChild {
  private apiUrl: string = 'http://localhost:8000/';
  private rta: boolean = false;
  constructor(private http: HttpClient){}

 	canActivate() {
    this.isLogged();
    return this.rta;
 	}

 	canActivateChild() {
 		console.log('checking child route access');
 		return true;
 	}
  isLogged(){
    this.http.get(this.apiUrl+'logueado/').subscribe(data => {this.rta = true;});
  }
 }
