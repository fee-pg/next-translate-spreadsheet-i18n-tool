next-translate-spreadsheet-i18n-tool
=================
a next-translate's tool for google spreadsheet, it can flatten 2D locale-key array to multi 1D JSON.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Todos](#todos)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @uppo/next-translate-spreadsheet-i18n-tool
$ ntsit COMMAND
running command...
$ ntsit (--version)
@uppo/next-translate-spreadsheet-i18n-tool/1.1.0 darwin-x64 node-v16.14.2
$ ntsit --help [COMMAND]
USAGE
  $ ntsit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ntsit gen`](#ntsit-gen)
* [`ntsit help [COMMANDS]`](#ntsit-help-commands)
* [`ntsit plugins`](#ntsit-plugins)
* [`ntsit plugins:install PLUGIN...`](#ntsit-pluginsinstall-plugin)
* [`ntsit plugins:inspect PLUGIN...`](#ntsit-pluginsinspect-plugin)
* [`ntsit plugins:install PLUGIN...`](#ntsit-pluginsinstall-plugin-1)
* [`ntsit plugins:link PLUGIN`](#ntsit-pluginslink-plugin)
* [`ntsit plugins:uninstall PLUGIN...`](#ntsit-pluginsuninstall-plugin)
* [`ntsit plugins:uninstall PLUGIN...`](#ntsit-pluginsuninstall-plugin-1)
* [`ntsit plugins:uninstall PLUGIN...`](#ntsit-pluginsuninstall-plugin-2)
* [`ntsit plugins update`](#ntsit-plugins-update)

## `ntsit gen`

Start generating your files

```
USAGE
  $ ntsit gen

DESCRIPTION
  Start generating your files

EXAMPLES
  $ ntsit gen 1sdfU3AZuFPzP_sDeDdpwa21S0BcH-ETVwNViuU9GqlB 3 C1 B3(./src/commands/gen/index.ts)
```

_See code: [dist/commands/gen/index.ts](https://github.com/fee-pg/next-translate-spreadsheet-i18n-tool/blob/v1.1.0/dist/commands/gen/index.ts)_

## `ntsit help [COMMANDS]`

Display help for ntsit.

```
USAGE
  $ ntsit help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ntsit.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.10/src/commands/help.ts)_

## `ntsit plugins`

List installed plugins.

```
USAGE
  $ ntsit plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ntsit plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `ntsit plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ntsit plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ntsit plugins add

EXAMPLES
  $ ntsit plugins:install myplugin 

  $ ntsit plugins:install https://github.com/someuser/someplugin

  $ ntsit plugins:install someuser/someplugin
```

## `ntsit plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ntsit plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ntsit plugins:inspect myplugin
```

## `ntsit plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ntsit plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ntsit plugins add

EXAMPLES
  $ ntsit plugins:install myplugin 

  $ ntsit plugins:install https://github.com/someuser/someplugin

  $ ntsit plugins:install someuser/someplugin
```

## `ntsit plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ntsit plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ntsit plugins:link myplugin
```

## `ntsit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ntsit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ntsit plugins unlink
  $ ntsit plugins remove
```

## `ntsit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ntsit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ntsit plugins unlink
  $ ntsit plugins remove
```

## `ntsit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ntsit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ntsit plugins unlink
  $ ntsit plugins remove
```

## `ntsit plugins update`

Update installed plugins.

```
USAGE
  $ ntsit plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

# Todos
<!-- todos -->
- [ ] Optimize code: writeFile timing, logic, etc.
- [ ] Add tests(btw: How to test a cli that results in some generated file ?)
- [ ] Upgrade google-spredsheet to v4.
- [ ] Change to Single Command CLI? (e.g. `ntsit` instead of `ntsit gen`).
- [ ] Polish README.md: add demo gif, googlesheet template, tutorial for GCP(Google Cloud Platform) Authentication, etc.
- [ ] Beautify console output: spinner, color, etc.
<!-- todosstop -->
