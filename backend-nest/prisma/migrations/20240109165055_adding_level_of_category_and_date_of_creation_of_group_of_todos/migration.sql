/*
  Warnings:

  - You are about to drop the column `todoGroupId` on the `Category` table. All the data in the column will be lost.
  - Added the required column `level` to the `TodoGroupCategory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Category" ("id", "name") SELECT "id", "name" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
CREATE TABLE "new_TodoGroupCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "level" INTEGER NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "todoGroupId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "TodoGroupCategory_todoGroupId_fkey" FOREIGN KEY ("todoGroupId") REFERENCES "TodoGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TodoGroupCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TodoGroupCategory" ("categoryId", "id", "todoGroupId") SELECT "categoryId", "id", "todoGroupId" FROM "TodoGroupCategory";
DROP TABLE "TodoGroupCategory";
ALTER TABLE "new_TodoGroupCategory" RENAME TO "TodoGroupCategory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
