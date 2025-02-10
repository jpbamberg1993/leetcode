import fs from 'fs'
import path from 'path'

const benchDir = __dirname

// Read all files in the `bench` directory
const files = fs
	.readdirSync(benchDir)
	.filter((file) => file.endsWith(`.ts`) && file !== `index.ts`)

// Run each benchmark file
files.forEach((file) => {
	console.log(`Running benchmark: ${file}`)
	import(path.join(benchDir, file)) // Dynamically import each benchmark
})
