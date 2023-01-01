# gravatar-from-email

> Get a [Gravatar](https://gravatar.com/) as a
> [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) from an email

## Install

```shell
pnpm add --save-prod gravatar-from-email
```

> **Warning**: This package is
> [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
> only

> **Note**: The [`engines`](./package.json#L114) field is set to `>=18`, but it
> should work with Node.js **>=14.16**, and **>=16.0**

## Usage

```typescript
import { gravatarFromEmail } from 'gravatar-from-email';
```

## API

### gravatarFromEmail(email, options?): [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL)

#### `email` (_required_)

Type: `string`

Email to get the Gravatar for.

#### `options?`

Type: [`Options`](./index.d.ts#L1)

An optional
[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
can be passed to the function. If omitted, the following defaults are **always**
applied:

```typescript
{
  rating: 'g',
  size: '80',
}
```

## Why?

#### Why bother making this?

A lot of websites support Gravatars these days, either implicitly, or they allow
you to set your profile picture explicitly by passing an
[image request URL](https://en.gravatar.com/site/implement/images/#base-request).

#### Why use this over existing implementations?

No reason at all. If you find existing implementations better suited to your
needs, by all means, use that. I wrote this for my own needs, and plan on
maintaining it for a long time.

#### Why does this not also check if the input (email) is _email-like_?

That’s not what this module is intended for[^1]. Use
[`email-regex`](https://www.npmjs.com/package/email-regex) for that.

#### Why does this return a `URL` and not a `string`?

Because it is more versatile. You can always use
[`.toJSON()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/toJSON), or
[`.toString()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/toString)
to convert the `URL` to a `string`.

#### Why use a named export instead of a default export?

In this case, it’s a preference. This is extensively discussed
[here](https://github.com/airbnb/javascript/issues/1365).

#### Why not support the `http://` protocol even though Gravatar supports it?

Because it’s 2023. Also, because it is more secure than the alternative.

## Related

- [gravatar-img](https://www.npmjs.com/package/gravatar-img)[^2]
- [gravatar-url](https://www.npmjs.com/package/gravatar-url)[^3]
- [machinepack-gravatar](https://www.npmjs.com/package/machinepack-gravatar)[^4]
- [js-gravatar](https://www.npmjs.com/package/js-gravatar)[^5]
- [More...](https://www.npmjs.com/search?q=gravatar)

[^1]:
    [DOTADIW](https://en.wikipedia.org/wiki/Unix_philosophy#Do_One_Thing_and_Do_It_Well).

[^2]:
    It does not support ESM, has an external dependency
    ([`crypto-js`](https://www.npmjs.com/package/crypto-js)), and is not
    actively maintained

[^3]:
    It does support ESM, is actively maintained, and will probably work just as
    well as this package. But it has external dependencies
    ([md5-hex](https://www.npmjs.com/package/md5-hex) and
    [`type-fest`](https://www.npmjs.com/package/type-fest))

[^4]:
    It does not support ESM, has external dependencies
    ([@sailshq/lodash](https://www.npmjs.com/package/@sailshq/lodash) and
    [`machine`](https://www.npmjs.com/package/machine)), and is not actively
    maintained

[^5]:
    It does not support ESM, has an external dependency
    ([`md5`](https://www.npmjs.com/package/md5)), and is not actively maintained
