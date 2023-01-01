export type Options = Record<string, string> & {
  /** When you include a default image, Gravatar will automatically serve up
   * that image if there is no image associated with the requested email
   * hash. */
  default?:
    | '404'
    | 'blank'
    | 'identicon'
    | 'monsterid'
    | 'mp'
    | 'retro'
    | 'robohash'
    | 'wavatar'
    | string;
  /** Force the default image to always load. */
  forcedefault?: 'y';
  /** By default, only 'g' rated images are displayed unless you indicate that
   * you would like to see higher ratings. */
  rating?: 'g' | 'pg' | 'r' | 'x';
  /** By default, images are presented at 80px by 80px if no size parameter is
   * supplied. You can request images anywhere from 1px up to 2048px. */
  size?: string;
};
declare const gravatarFromEmail: (
  email: string,
  options?: Options,
) => import('url').URL;
export { gravatarFromEmail };
