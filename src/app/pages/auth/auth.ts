import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

interface User {
	name: string;
	email: string;
	password: string;
}
@Component({
	selector: "app-auth",
	imports: [FormsModule, ReactiveFormsModule, CommonModule],
	templateUrl: "./auth.html",
	styleUrls: ["./auth.css"],
})
export class Auth implements OnInit {
	form!: FormGroup;
	isLoginMode = true;

	constructor(
		private fb: FormBuilder,
		private router: Router,
	) {}
	ngOnInit(): void {
		this.setupForm();
	}
	setupForm(): void {
		this.form = this.fb.group({
			name: [""],
			email: ["", [Validators.required, Validators.email]],
			password: ["", [Validators.required, Validators.minLength(8)]],
		});
	}
	toggleMode(): void {
		this.isLoginMode = !this.isLoginMode;
	}
	getUsers(): User[] {
		const data = localStorage.getItem("users");
		return data ? JSON.parse(data) : [];
	}
	saveUsers(Lista: User[]): void {
		localStorage.setItem("users", JSON.stringify(Lista));
	}
	onSubmit(): void {
		console.log("Form submitted successfully");
		if (this.form.invalid) return;
		console.log("No data was submitted", this.form.errors);

		const { name, email, password } = this.form.value;
		const users = this.getUsers();

		if (this.isLoginMode) {
			const user = users.find(
				(u) => u.email === email && u.password === password,
			);
			if (user) {
				console.log("Login bem sucedido", user);
				localStorage.setItem("UsuarioLogado", JSON.stringify(user));
				this.router.navigate(["/home"]);
			} else {
				alert("Email ou senha invalida !");
			}
		} else {
			const userExists = users.some((u) => u.email === email);

			if (userExists) {
				alert("Email já cadastrado !");
				return;
			}
			const newUser: User = { name, email, password };
			users.push(newUser);
			this.saveUsers(users);
			alert("Cadastro criado com sucesso!");
			this.toggleMode();
			this.form.reset();
		}
	}
}
