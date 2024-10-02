import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageMenuComponent } from '../components/language-menu/language-menu.component';
import { BranchIndicatorComponent } from '../components/branch-indicator/branch-indicator.component';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

//@MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

//@I18N
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LanguageMenuComponent,
    BranchIndicatorComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    TranslateModule,
    BreadcrumbComponent,
    BreadcrumbItemDirective,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
