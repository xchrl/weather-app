export type FetchInfo =
  | {
      fetchable: true;
    }
  | {
      fetchable: false;
      errorMessage: string;
    };
