declare module 'docxtemplater-image-module-free' {
  interface ImageModuleOptions {
    centered?: boolean;
    getImage: (tagValue: string, tagName?: string) => ArrayBuffer | Buffer | Uint8Array;
    getSize: (img: ArrayBuffer | Buffer | Uint8Array, tagValue: string, tagName?: string) => [number, number];
  }

  class ImageModule {
    constructor(options: ImageModuleOptions);
  }

  export default ImageModule;
}

