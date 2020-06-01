import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulartask';
  supportLanguage = ['en', 'hi'];
  
  constructor(private translateService: TranslateService){
    this.translateService.addLangs(this.supportLanguage);
    this.translateService.setDefaultLang('en');

    const browserlang = this.translateService.getBrowserLang();
    this.translateService.use(browserlang);
  }

  selectLang(lang: string){
    this.translateService.use(lang);
  }
}
