module.exports = {
  apps: [
    {
      name: 'server',
      script: 'npm',
      args: 'start',
    }, {
      script: 'npm',
      // seperate error logs
      error_file: 'err.log',
      out_file: 'out.log',
      //combine error logs and other logs
      log_file: 'combined.log',
      time: true
    }
  ],
};
