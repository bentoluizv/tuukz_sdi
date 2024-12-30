/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Manifold {
  isAuthenticated: boolean;
  address: string;
  oauthToken: string;
  dataClient: {
    getNFT({ contractAddress: string, tokenId: number }): {
      contractAddress: string;
      count: string;
      image: string;
      lastTimestamp: number;
      metadata: {
        created_by: string;
        description: "";
        image: string;
        image_details: {
          bytes: number;
          width: number;
          height: number;
          format: string;
          sha256: string;
        };
        image_url: string;
        name: string;
      };
      mintBlockNumber: number;
      mintLogIndex: number;
      mintTimestamp: number;
      mintTransactionIndex: number;
      ownerAdress: string;
      spec: string;
      tokenId: string;
      name: string;
    };
  };
}

interface Window {
  manifold: Manifold;
}
