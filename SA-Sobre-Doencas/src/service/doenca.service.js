import pool from "../config/db.js";

export default {
  async getAll() {
    const result = await pool.query(
      "SELECT * FROM doencas ORDER BY id"
    );

    return result.rows;
  },

  async getById(id) {
    const result = await pool.query(
      "SELECT * FROM doencas WHERE id = $1",
      [id]
    );

    return result.rows[0];
  },

  async create(nome, fatal) {
    const result = await pool.query(
      "INSERT INTO doencas (nome, fatal) VALUES ($1, $2) RETURNING *",
      [nome, fatal]
    );

    return result.rows[0];
  },

  async update(id, nome, fatal) {
    const result = await pool.query(
      `
      UPDATE doencas
      SET nome = $1, fatal = $2
      WHERE id = $3
      RETURNING *
      `,
      [nome, fatal, id]
    );

    return result.rows[0];
  },

  async delete(id) {
    const result = await pool.query(
      "DELETE FROM doencas WHERE id = $1 RETURNING *",
      [id]
    );

    return result.rowCount > 0;
  },
};