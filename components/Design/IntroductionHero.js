// Introduction Hero
// Contains a little information text on top (monospace), big title (serif) and a little information text on the bottom (sans)

import React from 'react';
import styles from './introduction-hero.module.css';
import { Text } from "@nextui-org/react";
import DownArrow from '../../public/img/icon/down.svg';
import Ttten from '../../public/img/design/ttten.svg';

export default function IntroductionHero() {
	return (
		<div className={styles.introductionHero}>
			<Text
				p
				className={styles.introductionHeroSubtext}
			>
				Machine Learning, Web Designer
			</Text>
			<div>
				<Text
					h1
					className={styles.introductionHeroTitle}
					css={{
						textGradient: "15deg, #FF0000 0%, #FFFF00 100%"
					}}
				>
					ThunderRedStar
				</Text>
			</div>
			<Text
				p
				className={styles.introductionHeroText}
			>
				Award-winning <span className={styles.introductionHeroTextUnderline}>web, Discord, and ML developer</span> executing ideas at a pace <span className={styles.introductionHeroTextUnderline}>fast enough to keep up</span> with the <span className={styles.introductionHeroTextUnderline}>ever-changing world of technology</span>.
			</Text>
			<DownArrow className={styles.introductionHeroDownArrow} />
		</div>
	)
}