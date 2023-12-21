import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("students").del();

    // Inserts seed entries
    await knex("students").insert([
        { id: 1, name: "Arpan Gupta", email: "arpan@gmail.com", dob: "2002-07-02" },
        { id: 2, name: "Vishal Singh", email: "vishal@gmail.com", dob: "2002-09-05" },
    ]);
};
