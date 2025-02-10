import { equalPairs } from '../src/2352-equal-pairs'
import { equalPairsTests } from '../tests/2352-equal-pairs.test'

export function benchMarkEqualPairs() {
	const iterations = 100_000

	const start = performance.now()
	for (let i = 0; i < iterations; i++) {
		for (const unit of equalPairsTests) {
			equalPairs(unit.grid)
		}
	}
	const end = performance.now()

	console.log(`Took ${end - start}ms`)
	console.log(`Average time per iteration: ${(end - start) / iterations}ms`)
}

benchMarkEqualPairs()
