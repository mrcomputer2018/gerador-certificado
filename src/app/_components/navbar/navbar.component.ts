import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit{
    //Sera executado sempre que o componente for inicializado
    ngOnInit(): void {
        this.mensagem()
    }

    mensagem() {
        console.log("Componente inicializado com sucesso!!!")
    }
}
