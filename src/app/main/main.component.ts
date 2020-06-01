import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {MatDialogModule} from '@angular/material/dialog';
// import { TimeZoneService } from '../timezone.service';
// import moment from 'moment-timezone';
// import { Moment } from 'moment';
// import 'moment/locale/hi';
// import 'moment-range';
// import 'moment/locale/fr';
// import 'moment/locale/es';
// import 'moment/locale/de';
// import 'moment/locale/en-gb';
// import 'moment/locale/ar';
// import { hours } from '../data.service/hours';
// import {  } from 'countries-and-timezones';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  title = 'Angular Task';
  name;
  date;
  shour;
  smin;
  ssec;
  ehour;
  emin;
  esec;
  starttime;
  endtime;
  // Full Name, Meeting Date, Start time and End time

  timezones = [
    {value: 'Timezone 1'},
    {value: 'Timezone 2'},
    {value: 'Timezone 3'},
  ];

  languages = ['en', 'hi'];

  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  minutes = [ 1, 2,	3, 4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,19,20	,21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,	51,	52,	53,	54,	55,	56,	57,	58,	59,	60];


  minDate: Date;
  maxDate: Date;

  constructor(private translateService: TranslateService,
              dialoue: MatDialogModule) {

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    const browserlang = this.translateService.getBrowserLang();

    this.minDate = new Date(currentYear - 0, currentMonth, currentDate);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.translateService.addLangs(this.languages);
    this.translateService.setDefaultLang('en');
    this.translateService.use(browserlang);
    
    //store Full Name, Meeting Date, Start time and End time. with encryption
    // Store
    // localStorage.setItem("lastname", "Smith");
    // Retrieve
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  }

  ngOnInit(): void { }

  submit(f){
    
    // for (let i = 0; i < 6; i++){
    //   console.log(f._directives[i].viewModel);
    //   localStorage.setItem(i.toString(), (f._directives[i].viewModel));
    // }
  console.log(f);
   alert(" Your meeting has been created.");


  }


  selectLang(lang: string){
    this.translateService.use(lang);
  }

  log(val){
    // console.log(val.);
  }
}
