# Product Selection Report - Template Setup Guide

## Overview

The PDCON product selection system uses **docxtemplater** with **PizZip** and **docxtemplater-image-module-free** to generate Word documents (.docx) from a template file.

## Technology Stack

| Package | Version | Purpose |
|---------|---------|---------|
| `docxtemplater` | Latest | Core templating engine for .docx files |
| `pizzip` | Latest | ZIP file manipulation (since .docx is a ZIP archive) |
| `docxtemplater-image-module-free` | Latest | Image injection into Word documents |
| `file-saver` | Latest | Client-side file download |
| `react-hot-toast` | Latest | Toast notifications |

## Template File Location

**Template:** `/public/product-selection.docx`

This is a standard Microsoft Word .docx file with special placeholder syntax.

## Placeholder Syntax

### Simple Text Placeholders
Use double curly braces for text:
- `{{address}}` - Property address
- `{{date}}` - Date (formatted as "10 December 2025")

### Image Placeholders
Use `{%placeholder-name}` syntax for images:
- `{%image}` - Product images in the table loop

### Loop/Array Syntax
For dynamic table rows that repeat for each product:

```
{#items}
{{code}} | {%image} | {{description}} | {{manufacturer-description}} | ...
{/items}
```

The `{#items}...{/items}` tags **must** wrap the table row that contains product data.

## Template Structure

### Required Placeholders

**Header Section:**
- `{{address}}` - The property address
- `{{date}}` - The report date

**Table Loop:**
Place these **inside** the `{#items}...{/items}` loop:
- `{{code}}` - Product code (e.g., A001, B002)
- `{%image}` - Product image (automatically sized to 120×90px)
- `{{description}}` - Product description
- `{{manufacturer-description}}` - Manufacturer description
- `{{product-details}}` - Product details
- `{{area-description}}` - Area description (e.g., Kitchen, Bedroom)
- `{{quantity}}` - Quantity
- `{{price}}` - Price
- `{{notes}}` - Optional notes

## Creating the Template in Microsoft Word

### Step 1: Create Header
1. Open Microsoft Word
2. Type the header text with placeholders:
   ```
   PRODUCT SELECTION
   {{address}}
   Date: {{date}}
   ```
3. **IMPORTANT:** Type placeholders as ONE continuous string without formatting

### Step 2: Create Table
Create a table with 9 columns:

| Code | Image | Description | Manufacturer Description | Product Details | Area Description | Quantity | Price | Notes |
|------|-------|-------------|--------------------------|-----------------|------------------|----------|-------|-------|

### Step 3: Add Header Row
First row should be the column headers (plain text, no placeholders).

### Step 4: Add Data Row with Loop
1. In the row BEFORE the data row, add: `{#items}` (on its own line or in a cell)
2. In the data row, add placeholders in each cell:
   - Cell 1: `{{code}}`
   - Cell 2: `{%image}`
   - Cell 3: `{{description}}`
   - Cell 4: `{{manufacturer-description}}`
   - Cell 5: `{{product-details}}`
   - Cell 6: `{{area-description}}`
   - Cell 7: `{{quantity}}`
   - Cell 8: `{{price}}`
   - Cell 9: `{{notes}}`
3. In the row AFTER the data row, add: `{/items}`

**Alternative:** Place loop tags in the same cells as placeholders (before first cell and after last cell).

### Example Structure:
```
PRODUCT SELECTION
{{address}}
Date: {{date}}

[Table]
┌─────────────────────────────────────────────────────────────┐
│ Code │ Image │ Description │ Manufacturer │ ... │ Notes    │  ← Header Row
├─────────────────────────────────────────────────────────────┤
│ {#items}                                                    │  ← Loop Start
│ {{code}} │ {%image} │ {{description}} │ {{manufacturer...│  ← Data Row
│ {/items}                                                    │  ← Loop End
└─────────────────────────────────────────────────────────────┘
```

## Critical Rules for Placeholders

### ✅ DO:
- Type placeholders as ONE continuous string
- Use plain text (no formatting)
- Use `{{placeholder}}` for text
- Use `{%placeholder}` for images
- Keep loop tags `{#items}` and `{/items}` in the same table

### ❌ DON'T:
- Apply bold, italic, or color to placeholders
- Copy/paste placeholders (type them fresh each time)
- Split placeholders across lines
- Add spaces inside curly braces: `{ {address} }` ❌
- Use wrong syntax: `{address}` (single brace) or `<address>` ❌

## Common Errors

### Error: "Duplicate open tag" or "Duplicate close tag"
**Cause:** Word has split your placeholder into multiple XML runs due to formatting.

**Solution:**
1. Delete the broken placeholder completely
2. Type it again as ONE continuous string
3. Do NOT apply any formatting
4. Save and try again

### Error: "Unclosed tag" or "Unopened tag"
**Cause:** Loop tags `{#items}` and `{/items}` are mismatched or in wrong locations.

**Solution:**
1. Ensure `{#items}` comes before the data row
2. Ensure `{/items}` comes after the data row
3. Both tags must be in the same table

### Images Not Showing
**Cause:** Using wrong placeholder syntax or image fetch failed.

**Solution:**
1. Use `{%image}` syntax (not `{{image}}`)
2. Ensure product has valid imageUrl in database
3. Check console for image fetch errors

## Image Configuration

Images are automatically:
- Fetched from R2 storage
- Converted to base64
- Embedded in the document
- Sized to **120 pixels wide × 90 pixels high** (1.25 inches × 0.94 inches at 96 DPI)
- Inserted at left alignment (not centered)

To change image size, edit `getSize` in `/app/admin/create-schedule/product-selection.tsx`:
```typescript
getSize: () => {
  return [width_in_pixels, height_in_pixels];
}
```

## Testing Your Template

1. Create a product in `/admin/create-product`
2. Go to `/admin/create-schedule`
3. Add the property address
4. Search and add the product
5. Fill in area description, quantity, price
6. Click "Generate"
7. Open the downloaded .docx file and verify:
   - Address and date appear correctly
   - Product row is duplicated for each item
   - Images are embedded and sized correctly
   - All placeholders are replaced

## Troubleshooting Checklist

- [ ] Template file is at `/public/product-selection.docx`
- [ ] All placeholders use correct syntax: `{{text}}` or `{%image}`
- [ ] Loop tags `{#items}...{/items}` wrap the data row
- [ ] No formatting applied to placeholders
- [ ] Table has correct number of columns (9)
- [ ] Products in database have valid imageUrl fields
- [ ] Images are accessible from R2 storage

## Technical Architecture

```
┌─────────────────────────────────────────────────────────┐
│  Frontend (Next.js Client Component)                    │
│  /app/admin/create-schedule/product-selection.tsx       │
│    ├─ User selects products and enters address/date     │
│    ├─ Fetches product images from R2 and converts to    │
│    │  base64                                            │
│    ├─ Loads template from /public/product-selection.docx│
│    ├─ Initializes PizZip to read .docx as ZIP          │
│    ├─ Creates Docxtemplater with ImageModule           │
│    ├─ Injects data via doc.setData()                   │
│    ├─ doc.render() replaces all placeholders           │
│    └─ Downloads generated .docx via file-saver          │
└─────────────────────────────────────────────────────────┘
```

## Data Structure

The template receives this data structure:

```typescript
{
  address: "123 Main St, Melbourne VIC 3000",
  date: "10 December 2025",
  items: [
    {
      code: "A001",
      image: "base64EncodedImageString...",
      description: "Premium Kitchen Flooring",
      "manufacturer-description": "XYZ Corp",
      "product-details": "Waterproof, scratch-resistant",
      "area-description": "Kitchen",
      quantity: 2,
      price: "199.99",
      notes: "Client prefers matte finish"
    },
    // ... more items
  ]
}
```

## Support

For issues with document generation:
1. Check browser console for errors
2. Verify template placeholders match exactly
3. Ensure products have valid images
4. Review this guide's troubleshooting section

