export type Props = {
  limit: number;
  offset: number;
  count: number;
  cb: (page: number) => void;
};
