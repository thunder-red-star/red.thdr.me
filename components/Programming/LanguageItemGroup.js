// Language Item group
// This is the item group that contains the language items

import React from 'react';
import styles from './language-item-group.module.css';
import LanguageItem from './LanguageItem';
import {Text} from "@nextui-org/react";

export default function LanguageItemGroup({ title, languages }) {
	return (
		<div className={styles.languageItemGroup}>
			<Text
				h2
				className={styles.languageItemGroupTitle}
			>
				{title}
			</Text>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{languages.map((language) => (
					<LanguageItem
						name={language.name}
						icon={language.icon}
						skillLevel={language.skillLevel}
						key={language.name}
					/>
				))}
			</div>
		</div>
	)
};