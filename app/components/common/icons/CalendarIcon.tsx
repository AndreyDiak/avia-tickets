import React from 'react';

interface Props {
	color?: string;
	width?: number;
	height?: number;
}

const DEFAULT_PROPS: Record<keyof Props, string | number> = {
	color: 'black',
	width: 16,
	height: 16,
};

export const CalendarIcon = React.memo(({ color, width, height }: Props) => {
	const iWidth = width ?? DEFAULT_PROPS.width;
	const iHeight = height ?? DEFAULT_PROPS.height;
	const iColor = (color ?? DEFAULT_PROPS.color) as string;

	return (
		<svg
			width={iWidth}
			height={iHeight}
			viewBox={`0 0 ${DEFAULT_PROPS.width} ${DEFAULT_PROPS.height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="cursor-pointer"
		>
			<g clipPath="url(#clip0_4424_21)">
				<path
					d="M12.6667 1.33333H12V0.666667C12 0.489856 11.9298 0.320286 11.8047 0.195262C11.6797 0.0702379 11.5101 0 11.3333 0C11.1565 0 10.987 0.0702379 10.8619 0.195262C10.7369 0.320286 10.6667 0.489856 10.6667 0.666667V1.33333H5.33333V0.666667C5.33333 0.489856 5.2631 0.320286 5.13807 0.195262C5.01305 0.0702379 4.84348 0 4.66667 0C4.48986 0 4.32029 0.0702379 4.19526 0.195262C4.07024 0.320286 4 0.489856 4 0.666667V1.33333H3.33333C2.4496 1.33439 1.60237 1.68592 0.97748 2.31081C0.352588 2.93571 0.00105857 3.78294 0 4.66667L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H12.6667C13.5504 15.9989 14.3976 15.6474 15.0225 15.0225C15.6474 14.3976 15.9989 13.5504 16 12.6667V4.66667C15.9989 3.78294 15.6474 2.93571 15.0225 2.31081C14.3976 1.68592 13.5504 1.33439 12.6667 1.33333ZM1.33333 4.66667C1.33333 4.13623 1.54405 3.62753 1.91912 3.25245C2.29419 2.87738 2.8029 2.66667 3.33333 2.66667H12.6667C13.1971 2.66667 13.7058 2.87738 14.0809 3.25245C14.456 3.62753 14.6667 4.13623 14.6667 4.66667V5.33333H1.33333V4.66667ZM12.6667 14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V6.66667H14.6667V12.6667C14.6667 13.1971 14.456 13.7058 14.0809 14.0809C13.7058 14.456 13.1971 14.6667 12.6667 14.6667Z"
					fill={iColor}
				/>
				<path
					d="M8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11Z"
					fill={iColor}
				/>
				<path
					d="M4.66675 11C5.21903 11 5.66675 10.5523 5.66675 10C5.66675 9.44772 5.21903 9 4.66675 9C4.11446 9 3.66675 9.44772 3.66675 10C3.66675 10.5523 4.11446 11 4.66675 11Z"
					fill={iColor}
				/>
				<path
					d="M11.3333 11C11.8855 11 12.3333 10.5523 12.3333 10C12.3333 9.44772 11.8855 9 11.3333 9C10.781 9 10.3333 9.44772 10.3333 10C10.3333 10.5523 10.781 11 11.3333 11Z"
					fill={iColor}
				/>
			</g>
			<defs>
				<clipPath id="clip0_4424_21">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
});

CalendarIcon.displayName = 'CalendarIcon';
