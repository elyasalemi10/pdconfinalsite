import { prisma } from "@/lib/prisma";

async function main() {
  // Example: store external URLs (e.g., from S3/Cloudflare R2/public hosting)
  // Replace with your actual secure image hosting links
  const assets = [
    {
      filename: "NewPDLogo.png",
      publicUrl: "https://example-cdn.com/pdcon/NewPDLogo.png",
      contentType: "image/png",
      alt: "PdCon Logo",
      tag: "header-logo",
    },
    {
      filename: "NewPDLogo.png",
      publicUrl: "https://example-cdn.com/pdcon/NewPDLogo.png",
      contentType: "image/png",
      alt: "PdCon Logo",
      tag: "footer-logo",
    },
  ];

  for (const a of assets) {
    await prisma.asset.upsert({
      where: { tag: a.tag ?? undefined },
      update: a,
      create: a,
    } as any);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


