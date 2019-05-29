import { TLSSettings } from './tls';
import { Authentication } from './authentication';
import { Metadata } from './metadata';
import { Target } from './target';

export type Synthetic = {
  _id: string;
  type: string;
  metadata: Metadata;
  interval: string;
  samplesize: number;
  target: Target;
  tls: TLSSettings;
  authentication: Authentication;
  payload: JSON;
};
