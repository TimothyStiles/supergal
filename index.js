#!/usr/bin/env node

const program = require('commander')
const fs = require('fs')
const path = require('path')
const version = require('./package.json').version

program
    .version(version, '-v, --version')
    .arguments('<license>')
    .action(function (license) {
      switch (license) {
        case 'agpl3':
          setLicense('/licenses/agpl-3.0.txt')
          break
        case 'ap2':
          setLicense('/licenses/apache-license-2.0.txt')
          break
        case 'bsd2':
          setLicense('/licenses/bsd-2-clause.txt')
          break
        case 'bsd3':
          setLicense('/licenses/bsd-3-clause.txt')
          break
        case 'gpl2':
          setLicense('/licenses/gpl-2.0.txt')
          break
        case 'gpl3':
          setLicense('/licenses/gpl-3.0.txt')
          break
        case 'lgpl2':
          setLicense('/licenses/lgpl-2.0.txt')
          break
        case 'lgpl3':
          setLicense('/licenses/lgpl-3.0.txt')
          break
        case 'mit':
          setLicense('/licenses/mit.txt')
          break
        default:
          console.log('No license with that name.')
      }
    })
    .parse(process.argv)

function setLicense (license) {
  fs.copyFile(path.join(__dirname, license), 'LICENSE', (err) => {
    if (err) throw err
  })
}
