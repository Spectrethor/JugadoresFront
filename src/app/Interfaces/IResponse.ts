import { IJugador } from './Ijugador';
export interface IResponse {
  code: number;
  message?: string;
  list?: IJugador[];
}
