import { expectError, expectType } from 'tsd';

import { gravatarFromEmail } from '../source/index.js';

expectType<string>(gravatarFromEmail('to@example.com').toJSON());
expectType<string>(gravatarFromEmail('to@example.com').toString());

expectType<URL>(gravatarFromEmail('to@example.com'));

expectType<URL>(gravatarFromEmail('to@example.com', { default: '404' }));
expectType<URL>(gravatarFromEmail('to@example.com', { default: 'blank' }));
expectType<URL>(gravatarFromEmail('to@example.com', { default: 'identicon' }));
expectType<URL>(gravatarFromEmail('to@example.com', { default: 'mp' }));
expectType<URL>(gravatarFromEmail('to@example.com', { default: 'monsterid' }));
expectType<URL>(gravatarFromEmail('to@example.com', { default: 'retro' }));
expectType<URL>(gravatarFromEmail('to@example.com', { default: 'wavatar' }));
expectType<URL>(
  gravatarFromEmail('to@example.com', { default: 'https://example.com' }),
);

expectType<URL>(gravatarFromEmail('to@example.com', { rating: 'g' }));
expectType<URL>(gravatarFromEmail('to@example.com', { rating: 'pg' }));
expectType<URL>(gravatarFromEmail('to@example.com', { rating: 'r' }));
expectType<URL>(gravatarFromEmail('to@example.com', { rating: 'x' }));

expectType<URL>(gravatarFromEmail('to@example.com', { size: '210' }));

expectError(gravatarFromEmail('to@example.com', { rating: 'foo' }));
