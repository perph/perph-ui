export type Label = {
  value: string;
  color: string;
}
export type Metadata = {
  name: string;
  labels: Array<Label>;
  createsBy: string;
}