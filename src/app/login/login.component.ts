import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
	private apiUrl: string = 'http://localhost:8000/index.php/';
	hide = true;
	username = "";
	password = "";

	constructor(private http: HttpClient,public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.http.get(this.apiUrl+'saluda/').subscribe(data => {
			console.log(data);
		});
	}
	clean(){
		this.username = "";
		this.password = "";
	}
	login() {
		var usuario = {'username':this.username,'password':this.password};

		this.http.post(this.apiUrl+'login/',usuario).subscribe(data => {
			this.openSnackBar(data['message'],data['status']);
		});
	}
	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000,
		});
	}
}
