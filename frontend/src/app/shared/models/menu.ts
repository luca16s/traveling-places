export interface BaseMenu {
  name: string;
  index: number;
  isDisabled: boolean;
}

export interface Menu extends BaseMenu {
  icon: string;
  route: string;
  breadcrumb: string;
  hasSubMenu: boolean;
  subMenus: Menu[];
}
