import test from 'ava';

import { gravatarFromEmail } from '../source/index.js';

test('`deepEqual` assertion with custom options', t => {
  const gravatar1028 = gravatarFromEmail('to@example.com', { size: '1028' });
  const gravatarDefaultImage = gravatarFromEmail('to@example.com', {
    default: 'retro',
  });
  const gravatarDefaultImageURL = gravatarFromEmail('to@example.com', {
    default: 'https://example.com/images/avatar.jpg',
  });
  const gravatarForceDefault = gravatarFromEmail('to@example.com', {
    forcedefault: 'y',
  });
  const gravatarXRated = gravatarFromEmail('to@example.com', { rating: 'x' });

  t.deepEqual(
    gravatar1028,
    new URL(
      'https://www.gravatar.com/avatar/19ac0b0dc7ca6d702fe6f221e8db880e?rating=g&size=1028',
    ),
  );

  t.deepEqual(
    gravatarDefaultImage,
    new URL(
      'https://www.gravatar.com/avatar/19ac0b0dc7ca6d702fe6f221e8db880e?default=retro&rating=g&size=80',
    ),
  );

  t.deepEqual(
    gravatarDefaultImageURL,
    new URL(
      'https://www.gravatar.com/avatar/19ac0b0dc7ca6d702fe6f221e8db880e?default=https%3A%2F%2Fexample.com%2Fimages%2Favatar.jpg&rating=g&size=80',
    ),
  );

  t.deepEqual(
    gravatarForceDefault,
    new URL(
      'https://www.gravatar.com/avatar/19ac0b0dc7ca6d702fe6f221e8db880e?forcedefault=y&rating=g&size=80',
    ),
  );

  t.deepEqual(
    gravatarXRated,
    new URL(
      'https://www.gravatar.com/avatar/19ac0b0dc7ca6d702fe6f221e8db880e?rating=x&size=80',
    ),
  );
});

test('`deepEqual` assertion with default options', t => {
  const gravatar = gravatarFromEmail('to@example.com');

  t.deepEqual(
    gravatar,
    new URL(
      'https://www.gravatar.com/avatar/19ac0b0dc7ca6d702fe6f221e8db880e?rating=g&size=80',
    ),
  );
});

test('`URL` to `string` comparison', t => {
  const gravatarSerialized = gravatarFromEmail('to@example.com').toJSON();
  const gravatarString = gravatarFromEmail('to@example.com').toString();

  t.deepEqual(
    gravatarSerialized,
    new URL(
      'https://www.gravatar.com/avatar/19ac0b0dc7ca6d702fe6f221e8db880e?rating=g&size=80',
    ).toString(),
  );

  t.deepEqual(
    gravatarString,
    new URL(
      'https://www.gravatar.com/avatar/19ac0b0dc7ca6d702fe6f221e8db880e?rating=g&size=80',
    ).toString(),
  );
});
