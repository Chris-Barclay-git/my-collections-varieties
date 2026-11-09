/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('varieties').del()
  await knex('varieties').insert([
    { id: 1, name: 'Pinot Noir', colour: 'red', country: 'France' },
    { id: 2, name: 'Chardonnay', colour: 'white', country: 'France' },
    { id: 3, name: 'Cabernet Sauvignon', colour: 'red', country: 'France' },
    { id: 4, name: 'Sauvignon Blanc', colour: 'white', country: 'France' },
    { id: 5, name: 'Syrah', colour: 'red', country: 'France' },
    { id: 6, name: 'Riesling', colour: 'white', country: 'Germany' },
    { id: 7, name: 'Nebbiolo', colour: 'red', country: 'Italy' },
  ])
}
