import { query } from './index';

export const getEncodingList = async () => {
  const sql = 'select * from encode_algorithms';
  const result = await query(sql, (res) => res);
  return result;
};
