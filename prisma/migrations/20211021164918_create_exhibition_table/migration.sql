-- CreateTable
CREATE TABLE "Exhibition" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Exhibition_pkey" PRIMARY KEY ("id")
);
