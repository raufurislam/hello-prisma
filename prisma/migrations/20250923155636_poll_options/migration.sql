/*
  Warnings:

  - You are about to drop the column `title` on the `Option` table. All the data in the column will be lost.
  - Added the required column `text` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Option" DROP COLUMN "title",
ADD COLUMN     "text" TEXT NOT NULL;
