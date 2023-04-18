import {memo} from 'react';

import NextHead from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import {PAGE_TITLE_SUFFIX} from '@sternx/constants';

export interface HeadProps {
	/**
	 * The namespace of the page.
	 */
	ns?: string;
	/**
	 * The title of the page.
	 */
	title?: string;
	/**
	 * The description of the page.
	 */
	description?: string;
}
/**
 * The head component. Used to set the title and description of the page. Also sets the viewport and favicon.
 */
const Head = ({ns, title, description}: HeadProps) => {
	const {t} = useTranslation(ns);

	return (
		<NextHead>
			<title>{(title ?? t('HEAD_SEO.TITLE')) + PAGE_TITLE_SUFFIX}</title>
			<meta name='description' content={description ?? t('HEAD_SEO.DESCRIPTION')} />

			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link rel='icon' href='/favicon.ico' />
		</NextHead>
	);
};

const MemoizedHead = memo(Head);
export {MemoizedHead as Head};
