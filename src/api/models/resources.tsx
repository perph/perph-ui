import { TLSSettings } from './tls';
export type HostRule = {
  name: string;
  host: string;
  url: string;
  tls: TLSSettings;
}