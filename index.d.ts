export type Options = Record<string, string> & {
  /** When you include a [default image](https://en.gravatar.com/site/implement/images/#default-image), Gravatar will automatically serve up
   * that image if there is no image associated with the requested email
   * hash. */
  readonly default?:
    | '404'
    | 'blank'
    | 'identicon'
    | 'monsterid'
    | 'mp'
    | 'retro'
    | 'robohash'
    | 'wavatar'
    | string;
  /** [Force](https://en.gravatar.com/site/implement/images/#force-default) the default image to always load. */
  readonly forcedefault?: 'y';
  /** By default, only 'g' rated images are displayed unless you indicate that
   * you would like to see higher [ratings](https://en.gravatar.com/site/implement/images/#rating). */
  readonly rating?: 'g' | 'pg' | 'r' | 'x';
  /** By default, images are presented at 80px by 80px if no [size](https://en.gravatar.com/site/implement/images/#size) parameter is
   * supplied. You can request images anywhere from 1px up to 2048px. */
  readonly size?: string;
};

/**
 * Get a Gravatar as a [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) from an email.
 * @param email - Email to get the Gravatar for
 * @param options - An Object that resembles {@link Options}
 *
 * @example
 * ```
 * import { gravatarFromEmail } from 'gravatar-from-email';
 *
 * gravatarFromEmail('to@example.com', { size: '1028' }).toString();
 * // => 'https://www.gravatar.com/avatar/19ac0b0dc7ca6d702fe6f221e8db880e?rating=g&size=1028'
 * ```
 */
declare const gravatarFromEmail: (
  email: string,
  options?: Options,
) => import('url').URL;

export { gravatarFromEmail };
