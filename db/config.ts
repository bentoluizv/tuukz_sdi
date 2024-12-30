import { column, defineDb, defineTable } from "astro:db";

const Contract = defineTable({
  columns: { id: column.number({ primaryKey: true }), address: column.text() },
});

const Token = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    tokenId: column.text(),
    image: column.text(),
    name: column.text(),
  },
});

const ContractsWithTokens = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    contract_id: column.number({ references: () => Contract.columns.id }),
    tokenId: column.number({ references: () => Token.columns.id }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Contract, Token, ContractsWithTokens },
});
