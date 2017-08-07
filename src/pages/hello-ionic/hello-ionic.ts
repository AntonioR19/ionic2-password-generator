import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  sic: number;  // dichiarazione variabile di tipo number per livello sicurezza
  prefisso : string; // dichiarazione variabile di tipo stringa per prefisso
  password : string; // dichiarazione variabile di tipo stringa per password
  lunghezza: number; // dichiaro variabile di tipo number per lunghezza
  constructor(private nav: NavController, public alertCtrl: AlertController) {
    this.sic = 1; // inizializzo a 1 la variabile sic
    this.prefisso = ""; // inizializzo come vuota la variabile prefisso
    this.password = ""; // inizializzo come vuota la variabile password
  }

  showAlert(text) { // funzione per alert
    let alert = this.alertCtrl.create({
      title: 'Attenzione!',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  change_sic(value){ // cambio valore sicurezza (sic)
    this.sic = value;
  }

  click_sic_5(){
    this.showAlert('Sono sconsigliate password di questa complessità poichè potrebbero essere utilizzati caratteri con codifica differente dallo standard UTF-8!');
    this.change_sic(5);
  }

  verifica(){ // verifica completezza campi prima di procedere con la generazione
    if(this.sic == undefined){
      this.showAlert('Devi specificare il livello di sicurezza della possword da generare');
      return false;
    }
    else if(this.lunghezza == undefined){
      this.showAlert('Devi specificare la lunghezza della possword da generare');
      return false;
    }

    else if(this.lunghezza < 8 || this.lunghezza > 30){
      this.showAlert('la lunghezza deve essere compresa tra 8 e 30 caratteri');
      return false;
    }

    else if(this.lunghezza < this.prefisso.length){
      this.showAlert('il prefisso '+ this.prefisso + ' supera '+ this.lunghezza + ' caratteri');
    }

    else{
      this.generapsw();
    }

  }

  generapsw(){
    this.password = this.prefisso;
    var lunghezza_psw = this.lunghezza - this.prefisso.length;

    var possible = "";

    if(this.sic == 1){
      possible = "abcdefghijklmnopqrstuvwxyz"; // i valori possibili saranno solo le lettere dalla a alla z minuscole
    }

    if(this.sic == 2){
      possible = "abcdefghijklmnopqrstuvwxyz0123456789"; // i valori possibili saranno tutte le lettere minuscole dalla a alla z e tutti i  numeri da 0 a 9
    }

    if(this.sic == 3){
      possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // saranno ammesse tutte le lettere dalla a alla z maiuscole e minuscole più tutti i numeri da 0 a 9
    }

    if(this.sic == 4){
      possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!%$[]{}~@#\\§*€£"; // oltre ai numeri da 0 a 9 e le lettere maiuscole e minuscole saranno ammessi un primo range di caratteri speciali
    }

    if(this.sic == 5){
      possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!%()$[]{}~@#\\§*€£¢©÷><µ·¶±®™¥æÆ"; // saranno ammessi tutti i caratteri ammessi al livello 4 più alòcuni caratteri speciali più complessi
    }

    for(var i=1; i <= lunghezza_psw; i++){
      this.password += possible.charAt(Math.floor(Math.random() * possible.length)); // estraggo un carattere casuale e lo accodo alla variabile "text"
    }

    this.controllo_sicurezza(); // richiamo funzione per controllo sicurezza
  }

  controllo_sicurezza(){
    // livelli di sicurezza
    var reg5 = new RegExp("[a-z]{1,}[0-9]{1,}[A-Z]{1,}[?!%()$]{1,}[¢©÷><µ·¶±®™¥æÆ]{1,}");
    var reg4 = new RegExp("[a-z]{1,}[0-9]{1,}[A-Z]{1,}[?!%$\\~@#§*€£]{1,}");
    var reg3 = new RegExp("[a-z]{1,}[0-9]{1,}[A-Z]{1,}");

    var reg2 = new RegExp("[a-z]{1,}[0-9]{1,}");

    var reg = new RegExp("[a-z]");

    if(this.sic == 1){ // se la sicurezza si ferma al primo livello
      if(!reg.test(this.password)){ // se non viene rispettata rag
        this.generapsw(); // richiamo nuovamente generapsw (funzione ricorsiva) e genero una nuova password
      }
    }
    if(this.sic == 2){ // se la sicurezza si ferma al primo livello
      if(!reg2.test(this.password)){ // se non viene rispettata rag
        this.generapsw(); // richiamo nuovamente generapsw (funzione ricorsiva) e genero una nuova password
      }
    }
    if(this.sic == 3){ // se la sicurezza si ferma al primo livello
      if(!reg3.test(this.password)){ // se non viene rispettata rag
        this.generapsw(); // richiamo nuovamente generapsw (funzione ricorsiva) e genero una nuova password
      }
    }
    if(this.sic == 4){ // se la sicurezza si ferma al primo livello
      if(!reg4.test(this.password)){ // se non viene rispettata rag
        this.generapsw(); // richiamo nuovamente generapsw (funzione ricorsiva) e genero una nuova password
      }
    }
    if(this.sic == 5){ // se la sicurezza si ferma al primo livello
      if(!reg5.test(this.password)){ // se non viene rispettata rag
        this.generapsw(); // richiamo nuovamente generapsw (funzione ricorsiva) e genero una nuova password
      }
    }
  }
}
