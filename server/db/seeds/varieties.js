/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('varieties').del()
  await knex('varieties').insert([
    { name: 'Pinot Noir', colour: 'red', country: 'France' },
    { name: 'Chardonnay', colour: 'white', country: 'France' },
    { name: 'Cabernet Sauvignon', colour: 'red', country: 'France' },
    { name: 'Sauvignon Blanc', colour: 'white', country: 'France' },
    { name: 'Syrah', colour: 'red', country: 'France' },
    { name: 'Riesling', colour: 'white', country: 'Germany' },
    { name: 'Nebbiolo', colour: 'red', country: 'Italy' },
  ])
}
