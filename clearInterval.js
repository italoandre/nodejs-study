const timeout = 1000
const checking = () => console.log('checking')

let interval = setInterval(checking, timeout)
setTimeout(() => clearInterval(interval), 3500)