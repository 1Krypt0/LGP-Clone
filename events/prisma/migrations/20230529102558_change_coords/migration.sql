/*
  Warnings:

  - You are about to drop the column `coordinates` on the `Event` table. All the data in the column will be lost.
  - Added the required column `xCoord` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yCoord` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "date" DATETIME NOT NULL,
    "xCoord" REAL NOT NULL,
    "yCoord" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Event" ("createdAt", "date", "description", "id", "name", "price", "updatedAt") SELECT "createdAt", "date", "description", "id", "name", "price", "updatedAt" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;