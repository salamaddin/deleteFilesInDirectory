const args = process.argv.slice(2);

// Check if there are any arguments
if (args.length === 0) {
  console.log('Please provide some input.');
} else {
  // Process the arguments
  console.log('Arguments:', args);
}

console.log(args[1]);