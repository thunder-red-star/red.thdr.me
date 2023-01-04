// Theme Switcher button

import React from 'react';
import styles from './theme-switcher.module.css';
import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import Moon from '../../public/img/icon/moon.svg';
import Sun from '../../public/img/icon/sun.svg';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	return (
		<div className={styles.themeSwitcher}>
			<Sun className={styles.switcherIcon} />
			<Switch
				className={styles.themeSwitcherSwitch}
				checked={theme === "dark"}
				onChange={() => {
					setTheme(theme === "dark" ? "light" : "dark");
				}}
			/>
			<Moon className={styles.switcherIcon} />
		</div>
	);
}