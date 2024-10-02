import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCodes } from '../../shared/enums/language-codes.enum';
import { LanguageNames } from '../../shared/enums/language-names.enum';
import { LanguageImages } from '../../shared/enums/language-images.enum';
import { LanguageAlts } from '../../shared/enums/language-alts.enum';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrl: './language-menu.component.scss',
})
export class LanguageMenuComponent implements OnInit {
  private translator = inject(TranslateService);
  readonly languages = [
    {
      code: LanguageCodes.SPANISH,
      name: LanguageNames.SPANISH,
      img: LanguageImages.SPANISH,
      alt: LanguageAlts.SPANISH,
    },
    {
      code: LanguageCodes.ENGLISH,
      name: LanguageNames.ENGLISH,
      img: LanguageImages.ENGLISH,
      alt: LanguageAlts.ENGLISH,
    },
    {
      code: LanguageCodes.CATALAN,
      name: LanguageNames.CATALAN,
      img: LanguageImages.CATALAN,
      alt: LanguageAlts.CATALAN,
    },
  ];

  ngOnInit() {
    this.translator.setDefaultLang(LanguageCodes.SPANISH);
  }

  switchLanguage(language: string) {
    this.translator.use(language);
  }
}
