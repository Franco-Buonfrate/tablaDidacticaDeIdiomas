import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { AuthLoginService } from '../services/auth-login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tema: string = 'animales';
  rutaIdioma: string = "/assets/idiomas/espanol.png";
  rutaTema: string = "/assets/temas/animales/animales.png";
  idioma: string = 'esp'
  showSpinner: boolean = false;

  constructor(
    private userService: AuthLoginService) { }

  ngOnInit() {
    window.screen.orientation.unlock();
  }

  cambiarIdiomaElegido(ruta: string, idiomaSeleccionado: string) {
    this.rutaIdioma = ruta;
    this.idioma = idiomaSeleccionado;
  }

  cambiarTemaElegido(ruta: string, temaElegido: string) {
    this.showSpinner = true

    setTimeout(() => {
      this.rutaTema = ruta;
      this.tema = temaElegido;
      this.showSpinner = false;
    }, 1);             //ACA ES PARA PONERLE EL SPINNER

  }

  generarSonido(objeto: string) {
    const ruta = `/assets/audios/${this.idioma}/${this.tema}/${objeto}`
    const audio = new Audio(ruta);
    audio.play();
  }

  cerrarSesion() {
    setTimeout(() => {
      this.userService.logout();
    }, 2200);
  }

}
