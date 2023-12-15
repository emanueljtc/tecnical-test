/**
 * Renders a language switcher component.
 *
 * @param {ISwitchLenguageProps} dataNodeParents - The data node parents.
 * @param {function} setDataNodeParents - The function to set the data node parents.
 * @return {JSX.Element} The language switcher component.
 */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { getLocalesLenguage, getSearchNode } from '../../../services';
import { handleErrorToast } from '../../../utils/tostifty';
import { ISwitchLenguageProps, ILocale, ILocaleTransformed } from './interface';
import { TNode } from '../../../pages/Home/types';

const SwitchLenguage = ({
  dataNodeParents,
  setDataNodeParents,
}: ISwitchLenguageProps) => {
  const [locales, setLocales] = useState<ILocale[]>([]);
  const [localesTransform, setLocalesTransform] = useState<
    ILocaleTransformed[]
  >([]);
  const [localeSelected, setLocaleSelected] = useState<string>('en_US');

  const onChangeLenguage = async (locale: string) => {
    setLocaleSelected(locale);

    const dataNodeTranslations: TNode[] = [];

    for (let i = 0; i < dataNodeParents.length; i++) {
      try {
        const response: any = await getSearchNode({
          id: dataNodeParents[i].id,
          locale,
        });
        const { data: dataNode } = response;
        const node = {
          id: dataNode.id,
          title:
            dataNode.translation.length > 0
              ? dataNode.translation.map((item: any) => item.title).join('')
              : dataNode.title,
          parent: dataNode.parent,
          created_at: dataNode.created_at,
          updated_at: dataNode.updated_at,
        };
        dataNodeTranslations.push(node);
      } catch (error: any) {
        if (error) {
          const { message } = error.response?.data;
          handleErrorToast(message);
        }
      }
    }
    if (dataNodeTranslations.length > 0) {
      setDataNodeParents(dataNodeTranslations);
    }
  };

  const runLocales = () => {
    const arrTempLocale: ILocaleTransformed[] = [];
    locales.map((itemLocale: ILocale) => {
      const localeTransformed: ILocaleTransformed = {
        locale: itemLocale.locale,
        label: itemLocale.label,
        flagUrl:
          itemLocale.locale.substring(0, 2) !== 'en'
            ? `https://flagcdn.com/w20/${itemLocale.locale.substring(0, 2)}.png`
            : 'https://flagcdn.com/w20/us.png',
      };
      arrTempLocale.push(localeTransformed);
    });
    setLocalesTransform(arrTempLocale);
  };
  const handleGetLocalesLenguage = async () => {
    /**
     * Handles getting the locales and lenguages.
     *
     * @return {Promise<void>} - A promise that resolves when the locales and lenguages are retrieved.
     */
    try {
      const response: any = await getLocalesLenguage();
      setLocales(response.data);
    } catch (error: any) {
      if (error) {
        const message = error.response?.data.message;
        handleErrorToast(message);
      }
    }
  };

  useMemo(() => handleGetLocalesLenguage(), []);

  useEffect(() => {
    if (locales.length > 0) {
      runLocales();
    }
  }, [locales]);

  return (
    <div className="flex justify-start items-center flex-col lg:flex-row gap-4">
      {localesTransform.map((locale: ILocaleTransformed) => (
        <div
          className="flex justify-between items-center gap-4"
          key={locale.locale}
        >
          <input
            type="radio"
            name="color"
            value={locale.locale}
            id={locale.locale}
            checked={locale.locale === localeSelected}
            onChange={(e) => {
              const { value } = e.target as HTMLInputElement;
              onChangeLenguage(value);
            }}
          />
          <label
            htmlFor={locale.locale}
            className="flex justify-between items-center gap-4 cursor-pointer text-xl text-white hover:text-purple-400"
          >
            <img src={locale.flagUrl} alt={locale.label} /> {locale.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SwitchLenguage;
