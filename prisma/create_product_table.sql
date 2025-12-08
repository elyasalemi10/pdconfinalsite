-- SQL script to create Product table in Supabase PostgreSQL
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS "Product" (
  "id" TEXT PRIMARY KEY,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "code" TEXT NOT NULL UNIQUE,
  "area" TEXT NOT NULL,
  "areaDescription" TEXT,
  "description" TEXT NOT NULL,
  "manufacturerDescription" TEXT,
  "productDetails" TEXT,
  "price" DECIMAL(10, 2),
  "imageUrl" TEXT NOT NULL
);

-- Create index on code for faster lookups
CREATE INDEX IF NOT EXISTS "Product_code_idx" ON "Product"("code");

-- Create index on area for filtering
CREATE INDEX IF NOT EXISTS "Product_area_idx" ON "Product"("area");

