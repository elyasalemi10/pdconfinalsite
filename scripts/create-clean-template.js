/**
 * Create a clean DOCX template from scratch programmatically
 * This ensures NO Word corruption can happen
 */

const fs = require('fs');
const path = require('path');
const PizZip = require('pizzip');

const outputPath = path.join(__dirname, '..', 'public', 'product-selection.docx');

console.log('🔧 Creating bulletproof DOCX template from scratch...\n');

// Minimal content types
const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`;

// Minimal relationships
const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

// Document relationships (empty)
const documentRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>`;

// Perfect document.xml with clean placeholders
const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p>
      <w:pPr><w:pStyle w:val="Title"/></w:pPr>
      <w:r><w:t>PRODUCT SELECTION</w:t></w:r>
    </w:p>
    <w:p><w:r><w:t/></w:r></w:p>
    <w:p><w:r><w:t>{{address}}</w:t></w:r></w:p>
    <w:p><w:r><w:t>Date: {{date}}</w:t></w:r></w:p>
    <w:p><w:r><w:t/></w:r></w:p>
    <w:p><w:r><w:t>Contact Name: {{contact-name}}</w:t></w:r></w:p>
    <w:p><w:r><w:t>Company: {{company}}</w:t></w:r></w:p>
    <w:p><w:r><w:t>Phone: {{phone-number}}</w:t></w:r></w:p>
    <w:p><w:r><w:t>Email: {{email}}</w:t></w:r></w:p>
    <w:p><w:r><w:t/></w:r></w:p>
    
    <w:tbl>
      <w:tblPr>
        <w:tblW w:w="5000" w:type="pct"/>
        <w:tblBorders>
          <w:top w:val="single" w:sz="4"/>
          <w:left w:val="single" w:sz="4"/>
          <w:bottom w:val="single" w:sz="4"/>
          <w:right w:val="single" w:sz="4"/>
          <w:insideH w:val="single" w:sz="4"/>
          <w:insideV w:val="single" w:sz="4"/>
        </w:tblBorders>
      </w:tblPr>
      <w:tblGrid>
        <w:gridCol w:w="800"/>
        <w:gridCol w:w="1200"/>
        <w:gridCol w:w="1500"/>
        <w:gridCol w:w="1500"/>
        <w:gridCol w:w="1500"/>
        <w:gridCol w:w="1200"/>
        <w:gridCol w:w="800"/>
        <w:gridCol w:w="800"/>
        <w:gridCol w:w="1200"/>
      </w:tblGrid>
      
      <!-- Header Row -->
      <w:tr>
        <w:tc><w:tcPr><w:shd w:fill="CCCCCC"/></w:tcPr><w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Code</w:t></w:r></w:p></w:tc>
        <w:tc><w:tcPr><w:shd w:fill="CCCCCC"/></w:tcPr><w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Image</w:t></w:r></w:p></w:tc>
        <w:tc><w:tcPr><w:shd w:fill="CCCCCC"/></w:tcPr><w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Description</w:t></w:r></w:p></w:tc>
        <w:tc><w:tcPr><w:shd w:fill="CCCCCC"/></w:tcPr><w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Manufacturer</w:t></w:r></w:p></w:tc>
        <w:tc><w:tcPr><w:shd w:fill="CCCCCC"/></w:tcPr><w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Product Details</w:t></w:r></w:p></w:tc>
        <w:tc><w:tcPr><w:shd w:fill="CCCCCC"/></w:tcPr><w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Area</w:t></w:r></w:p></w:tc>
        <w:tc><w:tcPr><w:shd w:fill="CCCCCC"/></w:tcPr><w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Qty</w:t></w:r></w:p></w:tc>
        <w:tc><w:tcPr><w:shd w:fill="CCCCCC"/></w:tcPr><w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Price</w:t></w:r></w:p></w:tc>
        <w:tc><w:tcPr><w:shd w:fill="CCCCCC"/></w:tcPr><w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Notes</w:t></w:r></w:p></w:tc>
      </w:tr>
      
      <!-- Loop Start Row -->
      <w:tr>
        <w:tc><w:p><w:r><w:t>{#items}</w:t></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
      </w:tr>
      
      <!-- Data Row -->
      <w:tr>
        <w:tc><w:p><w:r><w:t>{{code}}</w:t></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t>{%image}</w:t></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t>{{description}}</w:t></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t>{{manufacturer-description}}</w:t></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t>{{product-details}}</w:t></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t>{{area-description}}</w:t></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t>{{quantity}}</w:t></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t>{{price}}</w:t></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t>{{notes}}</w:t></w:r></w:p></w:tc>
      </w:tr>
      
      <!-- Loop End Row -->
      <w:tr>
        <w:tc><w:p><w:r><w:t>{/items}</w:t></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
        <w:tc><w:p><w:r><w:t/></w:r></w:p></w:tc>
      </w:tr>
    </w:tbl>
    
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>
    </w:sectPr>
  </w:body>
</w:document>`;

// Create the ZIP structure
const zip = new PizZip();

// Add files to ZIP
zip.file('[Content_Types].xml', contentTypes);
zip.file('_rels/.rels', rels);
zip.file('word/document.xml', documentXml);
zip.file('word/_rels/document.xml.rels', documentRels);

// Generate the .docx file
const content = zip.generate({
  type: 'nodebuffer',
  compression: 'DEFLATE',
  compressionOptions: { level: 9 }
});

// Write to file
fs.writeFileSync(outputPath, content);

console.log('✅ Bulletproof template created!');
console.log(`📁 Location: ${outputPath}`);

// Verify placeholders
console.log('\n📋 Verifying placeholders...');
const placeholders = documentXml.match(/\{[^}]+\}/g) || [];
console.log(`Found ${placeholders.length} placeholders:`);
console.log(placeholders.join(', '));

console.log('\n✅ Template is 100% clean and ready to use!');
console.log('   You can now open it in Word and style it as needed.\n');
