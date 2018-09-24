import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private apiUrl: string = 'http://localhost:8000/index.php/';

  nombre: string;
  motivo: string;
  mensaje: string;
  constructor(private http: HttpClient,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  processForm() {
    const allInfo = `Nombre: ${this.nombre}. Motivo ${this.motivo}. My message is ${this.mensaje}`;
    alert(allInfo);
    this.http.get(this.apiUrl+'saluda/').subscribe(data => {
    			console.log(data);
    		});
  }
}
