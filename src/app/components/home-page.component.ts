import { Component } from '@angular/core';
import { HeroSectionComponent } from '../layout/hero-section.component';
import { HeroFeaturesComponent } from '../layout/features-section.component';
import { BalanceSectionComponent } from '../layout/balance-section.component';

@Component({
  standalone: true,
  imports: [
    HeroSectionComponent,
    HeroFeaturesComponent,
    BalanceSectionComponent
  ],
  selector: 'connectamind-home-page',
  template: `<connectamind-hero-section></connectamind-hero-section>
  <connectamind-balance-section></connectamind-balance-section>
  <connectamind-features-section></connectamind-features-section>
  `,

})

export class HomePageComponent{


}
