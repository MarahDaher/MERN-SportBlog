export interface RouterModel {
  path: string;
  title?: string;
  element: any;
  isPrivate?: boolean;
  children?: RouterModel[];
}
