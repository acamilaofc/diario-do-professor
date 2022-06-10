/*
  Warnings:

  - You are about to alter the column `nota` on the `Notas` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avaliacao" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    CONSTRAINT "Notas_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Notas" ("alunoId", "avaliacao", "id", "nota") SELECT "alunoId", "avaliacao", "id", "nota" FROM "Notas";
DROP TABLE "Notas";
ALTER TABLE "new_Notas" RENAME TO "Notas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
