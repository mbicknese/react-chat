const exec = require('child_process').exec
const intervalInMinutes = 10;

const run = cmd => exec(cmd, (_, stdout) => console.log(stdout))

const commitAll = () => {
  run('git add --all --verbose')
  run(`git commit -m "[BOT] Auto commit"`)
}

run(`echo "Starting to commit every ${intervalInMinutes} min"`)
setInterval(commitAll, intervalInMinutes * 60 * 1000)
