const os = require('os');
const chalk = require('chalk');

let osType = 'Unknown';
switch(os.type()) {
  case 'Darwin': osType = 'MacOS';
  break;
  case 'Linux': osType = 'Linux';
  break;
  case 'Windows_NT': osType = 'Windows';
  break;
}

module.exports = {

  smile: ':)',

  info: {
    os: osType,
    arch: os.arch(),
    cpus: {
      cores: os.cpus().length,
      model: os.cpus()[0].model
    },
    memory: {
      total: os.totalmem(),
      free: os.freemem()
    },
    dir: {
      home: os.homedir(),
      tmp: os.tmpdir(),
    }
  },

  log: function() {

    let cores = this.info.cpus.cores;
    switch(cores) {
      case 2: cores = 'Dual';
      break;
      case 4: cores = 'Quad';
      break;
      case 6: cores = 'Hex';
      break;
      case 8: cores = 'Octa';
      break;
      case 12: cores = 'Dodeca';
        break;
      default: cores = "more than 8";
      break;
    }
    const out = {
      os: chalk.cyan( this.info.os ),
      arch: chalk.grey( this.info.arch ),
      cores: `${cores} Core`,
      cpu: chalk.grey(this.info.cpus.model),
      ram: Math.floor( this.info.memory.total / 1000000000 ) + 'GB RAM'
    }

    console.log(
      os.EOL,
      out.os,
      out.arch,
      os.EOL,
      out.cores,
      out.cpu,
      os.EOL,
      out.ram
    )
  }
}