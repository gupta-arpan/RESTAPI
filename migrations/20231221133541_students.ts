import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('students', (table) => {
        table.increments('id').primary().notNullable();
        table.string("name").notNullable();
        table.string("email").unique().notNullable;
        table.date("dob");
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('students');
}
