-- CreateTable
CREATE TABLE "guests" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "kids" INTEGER,
    "adults" INTEGER,

    CONSTRAINT "guests_pkey" PRIMARY KEY ("id")
);
