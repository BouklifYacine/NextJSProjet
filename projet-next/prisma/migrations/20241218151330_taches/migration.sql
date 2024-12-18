-- CreateEnum
CREATE TYPE "Options" AS ENUM ('EN_COURS', 'FINI');

-- CreateTable
CREATE TABLE "Taches" (
    "Id" SERIAL NOT NULL,
    "Titre" VARCHAR(255) NOT NULL,
    "Message" VARCHAR(255) NOT NULL,
    "Status" "Options" NOT NULL DEFAULT 'EN_COURS',
    "CreerLe" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "MisaJourle" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Taches_pkey" PRIMARY KEY ("Id")
);
