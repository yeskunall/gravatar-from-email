import { createHash } from 'node:crypto';

import type { Options } from '../index.d.js';

const IMAGE_REQUEST_URL = 'https://www.gravatar.com/avatar';

const gravatarFromEmail = (email: string, options?: Options) => {
  const defaultOptions: Options = {
    rating: 'g',
    size: '80',
  };
  // See https://en.gravatar.com/site/implement/hash/ for more
  const hash = createHash('md5')
    .update(email.trim().toLocaleLowerCase())
    .digest('hex');
  const searchParams = new URLSearchParams(
    Object.assign(defaultOptions, options),
  );
  // Sort in-place
  searchParams.sort();

  if (options?.default?.includes('https://')) {
    searchParams.set('default', encodeURI(options.default));
  }

  return new URL(`${IMAGE_REQUEST_URL}/${hash}?${searchParams.toString()}`);
};

export { gravatarFromEmail };
