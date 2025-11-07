import { calculateEaster, getCurrentLiturgicalSeason } from './lib/utils/liturgical';

console.log('=== Liturgical Calendar Test ===\n');

// Test Easter dates
console.log('Easter Dates:');
console.log('2024:', calculateEaster(2024).toLocaleDateString());
console.log('2025:', calculateEaster(2025).toLocaleDateString());
console.log('2026:', calculateEaster(2026).toLocaleDateString());
console.log('Expected: 2024=March 31, 2025=April 20, 2026=April 5\n');

// Test current season
const currentSeason = getCurrentLiturgicalSeason();
console.log('Current Season (November 5, 2025):');
console.log('Season:', currentSeason.season);
console.log('Color:', currentSeason.color);
console.log('Theme:', currentSeason.theme);
console.log('Is Requiem?:', currentSeason.isRequiem);
console.log('\nExpected: requiem (November is All Souls month)');
