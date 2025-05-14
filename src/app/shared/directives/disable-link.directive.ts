import { Directive, Input, Optional } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Directive({
  selector: '[routerLink][isoDisableLink]',
})
export class DisableLinkDirective {
  @Input() disableLink: boolean = false;

  constructor(
    @Optional() routerLink: RouterLink,
    @Optional() routerLinkWithHref: RouterLinkWithHref
  ) {
    const link = routerLink || routerLinkWithHref;

    const onClick = link.onClick;

    link.onClick = (...args) => {
      if (this.disableLink) {
        return routerLinkWithHref ? false : true;
      } else {
        return onClick.apply(link, args);
      }
    };
  }
}
