declare module '*.module.scss' {
	const content: Record<string, string>
	export default content
}
declare module '*.scss' {
	export const content: {[className: string]: string}
	export default content
}
declare module 'react-markup'
declare module '*.webp'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
