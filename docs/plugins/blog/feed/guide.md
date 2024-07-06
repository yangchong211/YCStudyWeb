# Guide

## Usage

The plugin can generate feed files in the following three formats for you:

- Atom 1.0
- JSON 1.1
- RSS 2.0

Please set `atom`, `json` or `rss` to `true` in the plugin options according to the formats you want to generate.

To correctly generate feed links, you need to set `hostname` in the plugin options,

## Readable Preview

When you open the feed file in browser, we magically convert atom and rss feed xml to human readable html via xsl template. Check [atom](/atom.xml) and [rss](/rss.xml) feed of this site as an example!

If you want to preview your feed in devServer, set `devServer: true` in plugin options. You may also need to set `devHostname` if you are not using the default `http://localhost:{port}`.

## Channel settings

You can customize the feed channel information by setting the `channel` option.

We recommend the following settings:

- Convert the date of creating the feed to ISOString and write it into `channel.pubDate`
- The update period of the content set in `channel.ttl` (unit: minutes)
- Set copyright information via `channel.copyright`
- Set the channel author via `channel.author`.

For detailed options and their default values, see [Channel Config](./channel.md)

## Feed Generation

By default, all articles are added to the feed stream.

You can set `feed` and other options in page frontmatter to control contents of feed item. See [Frontmatter Config](./frontmatter.md) for how they are converted.

You can take full control of feed items generation by configuring the `getter` in the plugin options. For detailed options and their default values, see [Configuration → Feed Getter](./getter.md).

### I18n Config

The plugin generates separate feeds for each language.

You can provide different settings for different languages via `locales` in the plugin options.
