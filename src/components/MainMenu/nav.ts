import { IMainMenuItem } from '../../interfaces/mainMenu';
import { ROUTES } from '../../routes';

export const MAIN_MENU_NAV_OPTIONS: IMainMenuItem[] = [
  {
    exact: true,
    id: 1,
    link: ROUTES.MAIN_PAGE,
    name: 'Главная',
  },
  {
    id: 2,
    link: ROUTES.HISTORY_PAGE,
    name: 'История',
  },
];
