export interface BaseMenu {
  name: string;
  index: number;
  isDisabled: boolean;
}

export interface Menu extends BaseMenu {
  icon: string;
  hasChild: boolean;
  childs: MenuItem[];
}

export interface MenuItem extends BaseMenu {
  route: string;
  breadcrumb: string;
}
