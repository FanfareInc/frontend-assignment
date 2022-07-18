import { format, parse, Locale } from 'date-fns';
import ja from 'date-fns/locale/ja';

/**
 * ISO8601 の年月日だけのフォーマットで返す
 * 標準では ja 基準になる
 *
 * @param date
 * @param locale = ja
 */
export const formatDateToString = (date: Date, locale: Locale = ja): string => {
  return format(date, 'yyyy-MM-dd', { locale });
};

/**
 * ISO8601 のフォーマットの文字列を Date で返す
 * 標準では ja 基準になる
 *
 * @param dateString
 * @param locale = ja
 */
export const parseStringToDate = (dateString: string, locale: Locale = ja): Date => {
  return parse(dateString, 'yyyy-MM-dd', new Date(), { locale });
};
