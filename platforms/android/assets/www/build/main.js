webpackJsonp([1],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/riconoscimenti/riconoscimenti.module": [
		262,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 148;

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelloIonicPage = (function () {
    function HelloIonicPage(nav, alertCtrl) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.sic = 1; // inizializzo a 1 la variabile sic
        this.prefisso = ""; // inizializzo come vuota la variabile prefisso
        this.password = ""; // inizializzo come vuota la variabile password
    }
    HelloIonicPage.prototype.showAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Attenzione!',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    HelloIonicPage.prototype.change_sic = function (value) {
        this.sic = value;
    };
    HelloIonicPage.prototype.click_sic_5 = function () {
        this.showAlert('Sono sconsigliate password di questa complessità poichè potrebbero essere utilizzati caratteri con codifica differente dallo standard UTF-8!');
        this.change_sic(5);
    };
    HelloIonicPage.prototype.verifica = function () {
        if (this.sic == undefined) {
            this.showAlert('Devi specificare il livello di sicurezza della possword da generare');
            return false;
        }
        else if (this.lunghezza == undefined) {
            this.showAlert('Devi specificare la lunghezza della possword da generare');
            return false;
        }
        else if (this.lunghezza < 8 || this.lunghezza > 30) {
            this.showAlert('la lunghezza deve essere compresa tra 8 e 30 caratteri');
            return false;
        }
        else if (this.lunghezza < this.prefisso.length) {
            this.showAlert('il prefisso ' + this.prefisso + ' supera ' + this.lunghezza + ' caratteri');
        }
        else {
            this.generapsw();
        }
    };
    HelloIonicPage.prototype.generapsw = function () {
        this.password = this.prefisso;
        var lunghezza_psw = this.lunghezza - this.prefisso.length;
        var possible = "";
        if (this.sic == 1) {
            possible = "abcdefghijklmnopqrstuvwxyz"; // i valori possibili saranno solo le lettere dalla a alla z minuscole
        }
        if (this.sic == 2) {
            possible = "abcdefghijklmnopqrstuvwxyz0123456789"; // i valori possibili saranno tutte le lettere minuscole dalla a alla z e tutti i  numeri da 0 a 9
        }
        if (this.sic == 3) {
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // saranno ammesse tutte le lettere dalla a alla z maiuscole e minuscole più tutti i numeri da 0 a 9
        }
        if (this.sic == 4) {
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!%$[]{}~@#\\§*€£"; // oltre ai numeri da 0 a 9 e le lettere maiuscole e minuscole saranno ammessi un primo range di caratteri speciali
        }
        if (this.sic == 5) {
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!%()$[]{}~@#\\§*€£¢©÷><µ·¶±®™¥æÆ"; // saranno ammessi tutti i caratteri ammessi al livello 4 più alòcuni caratteri speciali più complessi
        }
        for (var i = 1; i <= lunghezza_psw; i++) {
            this.password += possible.charAt(Math.floor(Math.random() * possible.length)); // estraggo un carattere casuale e lo accodo alla variabile "text"
        }
        this.controllo_sicurezza(); // richiamo funzione per controllo sicurezza
    };
    HelloIonicPage.prototype.controllo_sicurezza = function () {
        // livelli di sicurezza
        var reg5 = new RegExp("[a-z]{1,}[0-9]{1,}[A-Z]{1,}[?!%()$]{1,}[¢©÷><µ·¶±®™¥æÆ]{1,}");
        var reg4 = new RegExp("[a-z]{1,}[0-9]{1,}[A-Z]{1,}[?!%$\\~@#§*€£]{1,}");
        var reg3 = new RegExp("[a-z]{1,}[0-9]{1,}[A-Z]{1,}");
        var reg2 = new RegExp("[a-z]{1,}[0-9]{1,}");
        var reg = new RegExp("[a-z]");
        if (this.sic == 1) {
            if (!reg.test(this.password)) {
                this.generapsw(); // richiamo nuovamente generapsw (funzione ricorsiva) e genero una nuova password
            }
        }
        if (this.sic == 2) {
            if (!reg2.test(this.password)) {
                this.generapsw(); // richiamo nuovamente generapsw (funzione ricorsiva) e genero una nuova password
            }
        }
        if (this.sic == 3) {
            if (!reg3.test(this.password)) {
                this.generapsw(); // richiamo nuovamente generapsw (funzione ricorsiva) e genero una nuova password
            }
        }
        if (this.sic == 4) {
            if (!reg4.test(this.password)) {
                this.generapsw(); // richiamo nuovamente generapsw (funzione ricorsiva) e genero una nuova password
            }
        }
        if (this.sic == 5) {
            if (!reg5.test(this.password)) {
                this.generapsw(); // richiamo nuovamente generapsw (funzione ricorsiva) e genero una nuova password
            }
        }
    };
    return HelloIonicPage;
}());
HelloIonicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/antonio/Ionic2/pswGenerator/src/pages/hello-ionic/hello-ionic.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Password Generator</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n      Livello di sicurezza\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Molto basso</ion-label>\n      <ion-radio checked="true" value="1" (click)="change_sic(1)"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Basso</ion-label>\n      <ion-radio value="2" (click)="change_sic(2)"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Medio</ion-label>\n      <ion-radio value="3" (click)="change_sic(3)"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Alto</ion-label>\n      <ion-radio value="4" (click)="change_sic(4)"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Esagerato</ion-label>\n      <ion-radio value="5" (click)="click_sic_5()"></ion-radio>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Prefix" [(ngModel)]="prefisso"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="number" min="8" max="30" placeholder="Lenght" [(ngModel)]="lunghezza"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button large full (click)=\'verifica()\'><span>Generate</span><ion-icon name="key"></ion-icon></button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label text-center id="psw"><span>{{password}}</span></ion-label>\n    </ion-item>\n\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/antonio/Ionic2/pswGenerator/src/pages/hello-ionic/hello-ionic.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HelloIonicPage);

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_riconoscimenti_riconoscimenti__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_riconoscimenti_riconoscimenti__["a" /* RiconoscimentiPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/riconoscimenti/riconoscimenti.module#RiconoscimentiPageModule', name: 'RiconoscimentiPage', segment: 'riconoscimenti', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_riconoscimenti_riconoscimenti__["a" /* RiconoscimentiPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_riconoscimenti_riconoscimenti__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Password Generator', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Riconoscimenti', component: __WEBPACK_IMPORTED_MODULE_3__pages_riconoscimenti_riconoscimenti__["a" /* RiconoscimentiPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/antonio/Ionic2/pswGenerator/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/antonio/Ionic2/pswGenerator/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiconoscimentiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RiconoscimentiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RiconoscimentiPage = (function () {
    function RiconoscimentiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RiconoscimentiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RiconoscimentiPage');
    };
    return RiconoscimentiPage;
}());
RiconoscimentiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-riconoscimenti',template:/*ion-inline-start:"/Users/antonio/Ionic2/pswGenerator/src/pages/riconoscimenti/riconoscimenti.html"*/'<!--\n  Generated template for the RiconoscimentiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Password Generator</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <br>\n  <ion-list>\n    <h4>Credits</h4>\n    <ion-item>\n      <ion-label>Project: Password Generator</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>License: Free</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sviluppatore back-end: <span>Antonio Riccio</span></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sviluppatore front-end: <span>Antonio Riccio</span></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Versione: <span>1.0</span></ion-label>\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n    <h4>Vedi anche</h4>\n    <ion-item>\n      <ion-label> jquery-password-generator: <a href="https://github.com/AntonioR19/jquery-password-generator">https://github.com/AntonioR19/jquery-password-generator</a></ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <h4>Sostienimi e seguimi</h4>\n\n    <ion-item>\n      <ion-label> <ion-icon name="logo-twitter"></ion-icon> <a href="https://twitter.com/AntonioR019">https://twitter.com/AntonioR019</a></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> <ion-icon name="logo-github"></ion-icon> <a href="https://github.com/AntonioR19">https://github.com/AntonioR19</a></ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/antonio/Ionic2/pswGenerator/src/pages/riconoscimenti/riconoscimenti.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], RiconoscimentiPage);

//# sourceMappingURL=riconoscimenti.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map