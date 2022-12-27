import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { MadeWithLoveComponent } from './made-with-love/made-with-love.component';
import { HeartComponent } from './heart/heart.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    MadeWithLoveComponent,
    HeartComponent
  ],
  entryComponents: [
    MadeWithLoveComponent,
    HeartComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const madeWithLoveElement = createCustomElement(MadeWithLoveComponent, { injector });
    const heartElement = createCustomElement(HeartComponent, { injector });

    customElements.define('made-with-love', madeWithLoveElement);
    customElements.define('sample-heart', heartElement);
  }

  ngDoBootstrap() { }
}