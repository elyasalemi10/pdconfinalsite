-- SQL script to create Product table in Supabase PostgreSQL
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS "Product" (
  "id" TEXT PRIMARY KEY,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "code" TEXT NOT NULL UNIQUE,
  "area" TEXT NOT NULL,
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

-- Enable Row Level Security (RLS)
ALTER TABLE "Product" ENABLE ROW LEVEL SECURITY;

-- Create policy: Allow all authenticated users to SELECT products
CREATE POLICY "Allow authenticated users to read products"
  ON "Product"
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy: Allow all authenticated users to INSERT products
CREATE POLICY "Allow authenticated users to insert products"
  ON "Product"
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy: Allow all authenticated users to UPDATE products
CREATE POLICY "Allow authenticated users to update products"
  ON "Product"
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policy: Allow all authenticated users to DELETE products
CREATE POLICY "Allow authenticated users to delete products"
  ON "Product"
  FOR DELETE
  TO authenticated
  USING (true);
