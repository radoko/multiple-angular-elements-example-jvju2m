import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'made-with-love',
  template: `
    <ng-template #noUrl>
      {{ name }}
    </ng-template>

    <span [style.font-size.em]="size">
      Made with <sample-heart></sample-heart> by 
      <ng-container *ngIf="url && url.length > 0; else noUrl">
        <a [attr.href]="url" target="_blank">{{ name }}</a>
      </ng-container>
    </span>
  `,
  styleUrls: ['./made-with-love.component.scss']
})
export class MadeWithLoveComponent implements OnInit {
  @Input()
  public name: string;

  @Input()
  public url: string;

  @Input()
  public color: string = 'red';

  @Input()
  public size: number = 1;

  ngOnInit() {
    if(!this.name || this.name.length === 0) {
      console.error(`Name attribute must be provided!`);
    }
  }
}