import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class ElementRepository {
  // The C of CRUD - Create operation

  async create(element: Omit<MyElement, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into element (text) values (?)",
      [element.text],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from element where id = ? and deleted_at is null",
      [id],
    );

    return rows[0] as MyElement | null;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "select * from element where deleted_at is null order by created_at desc",
    );

    return rows as MyElement[];
  }

  // The Ds of CRUD - Delete operations

  async softDelete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "update element set deleted_at = now() where id = ?",
      [id],
    );

    return result.affectedRows;
  }

  async softUndelete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "update element set deleted_at = null where id = ?",
      [id],
    );

    return result.affectedRows;
  }

  async hardDelete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from element where id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new ElementRepository();
