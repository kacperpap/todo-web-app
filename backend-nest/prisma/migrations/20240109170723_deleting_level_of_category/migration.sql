/*
  Warnings:

  - You are about to drop the column `level` on the `TodoGroupCategory` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TodoGroupCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "todoGroupId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "TodoGroupCategory_todoGroupId_fkey" FOREIGN KEY ("todoGroupId") REFERENCES "TodoGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TodoGroupCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TodoGroupCategory" ("categoryId", "created", "id", "todoGroupId") SELECT "categoryId", "created", "id", "todoGroupId" FROM "TodoGroupCategory";
DROP TABLE "TodoGroupCategory";
ALTER TABLE "new_TodoGroupCategory" RENAME TO "TodoGroupCategory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
