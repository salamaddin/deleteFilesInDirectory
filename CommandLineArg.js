const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Please provide some input.');
} else {
  console.log('Arguments:', args);
}

console.log(args[1]);
