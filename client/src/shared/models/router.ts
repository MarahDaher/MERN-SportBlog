export interface RouterModel {
  path: string;
  title?: string;
  element: any;
  children?: RouterModel[];
}
