import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GuessTheNumberService} from "../../services/guess-the-number.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-guessthenumber',
  templateUrl: './guessthenumber.component.html',
  styleUrls: ['./guessthenumber.component.css']
})
export class GuessthenumberComponent implements OnInit {
  dIsSelected = false;
  dSelected: string = "";
  loading = false;
  numbers: any[] = []
  tries: number = 0;
  puntuacion: number = 0;
  hint = ''


  constructor(private _gServ: GuessTheNumberService) {
  }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this._gServ.getInfo().subscribe((info: any) => {
    })
  }

  setDifficulty(difficulty: string) {
    this.loading = true;
    setTimeout(() => {
      this.dSelected = difficulty;
      this.loading = false;
      this.dIsSelected = true;
    }, 500);
    this.generateRandomNumbers(difficulty);
  }

  setNumber(n: number) {
    console.log("set number", n);
  }

  checkNumber() {
    let element = document.getElementById('iptNumber') as any
    console.log(element, "Element")
    let n = element.value
console.log("n", n)
    this.tries++;

    let correctNumber = this.numbers.filter(n => n.correct)[0].number



    if (this.numbers[n - 1].correct) {
      Swal.fire({
        title: 'Correcto!',
        text: 'Has acertado el número',
        icon: 'success',
        confirmButtonText: 'Continuar',
        allowOutsideClick: false
      }).then(() => {
        this.hint = '';
        let element = document.getElementById('iptNumber') as HTMLInputElement
        // reset element
        element.value = '';
        this.generateRandomNumbers(this.dSelected);
        switch (this.dSelected) {
          case "facil":
            this.puntuacion += 10;
            break;
          case "medio":
            this.puntuacion += 20;
            break;
          case "dificil":
            this.puntuacion += 30;
            break;
          default:
            this.puntuacion += 10;
        }

      })
    } else {
      Swal.fire({
        title: 'Incorrecto!',
        text: 'No es lo que buscas',
        icon: 'error',
        confirmButtonText: 'Continuar',
        allowOutsideClick: false
      }).then(() => {
        console.log(correctNumber,n)
        this.hint = correctNumber < n ? 'El número debe ser menor que ' + n : 'El número debe ser mayor que ' + n;
        console.log(this.hint, "hint")
        switch (this.dSelected) {
          case "facil":
            this.puntuacion = this.puntuacion > 0 ? this.puntuacion - 2 : 0;
            break;
          case "medio":
            this.tries == 15 ? Swal.fire({
              title: 'Agotaste tus intentos',
              text: 'Más suerte la próxima',
              icon: 'error',
              allowOutsideClick: false,
              confirmButtonText: "Intentar de nuevo"
              }).then(_ => {
              this.hint = '';
              let element = document.getElementById('iptNumber') as HTMLInputElement
              // reset element
              element.value = '';
                this.generateRandomNumbers(this.dSelected);}) : null
            this.puntuacion = this.puntuacion > 0 ? this.puntuacion - 4 : 0;
            break;
          case "dificil":
            this.tries == 5 ? Swal.fire({
              title: 'Agotaste tus intentos',
              text: 'Más suerte la próxima',
              icon: 'error',
              allowOutsideClick: false,
              confirmButtonText: "Intentar de nuevo"
            }).then(_ => {
              this.hint = '';
              let element = document.getElementById('iptNumber') as HTMLInputElement
              // reset element
              element.value = '';
              this.generateRandomNumbers(this.dSelected);}) : null
            this.puntuacion = this.puntuacion > 0 ? this.puntuacion - 6 : 0;
            break;
        }
      }).then(() => {
        let availableNumbers = this.numbers.filter((number: any) => number.disabled == false);
        console.log(availableNumbers);
      })
    }

  }


  generateRandomNumbers(mode: string) {
    return this.generateRandomNumber();
  }

  generateRandomNumber() {
    this.numbers = []
    this.tries = 0;


    for (let i = 1; i <= 1000; i++) {
      this.numbers.push({number: i, correct: false, disabled: false});
    }
    let number = Math.floor(Math.random() * 999) + 1;
    console.log(number);
    this.numbers[number].correct = true;
    console.log(this.numbers);
    return this.numbers;
  }



  return() {
    if (this.puntuacion > 0) {
      Swal.fire({
        title: '¿Quieres guardar tu puntuación?',
        text: "Tu puntuación es de " + this.puntuacion,
        icon: 'question',
        //input
        input: 'text',
        inputPlaceholder: 'Ingresa tus iniciales',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, guardar!'
      }).then((result) => {
        if (result.isConfirmed) {
          this._gServ.setScore({name: result.value, score: this.puntuacion}).then(() => {
            Swal.fire(
              'Guardado!',
              'Tu puntuación ha sido guardada',
              'success'
            ).then(() => {
              this.puntuacion = 0;
              this.loading = true;
              this.dIsSelected = false;
              this.dSelected = "";
              setTimeout(() => {

                this.loading = false;
              }, 500);
            })
          })
        }
      })
    } else {
      this.loading = true;
      this.dIsSelected = false;
      this.dSelected = "";
      setTimeout(() => {

        this.loading = false;
      }, 500);
    }


  }
}
