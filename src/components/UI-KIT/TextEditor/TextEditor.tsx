import React, {useState} from 'react'
import {Editor} from 'react-draft-wysiwyg'
import {convertToRaw, EditorState} from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import {ContentState} from 'draft-js'
import styles from './TextEditor.module.scss'
import classNames from 'classnames/bind'
import {textEditorConfig} from './textEditorConfig'
const cnb = classNames.bind(styles)

interface Props {}
const TextEditor: React.FC<Props> = () => {
	const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())
	let _contentState = ContentState.createFromText('Sample content state')
	const raw = convertToRaw(_contentState)
	const [contentState, setContentState] = useState(raw)
	console.log('contentState', contentState)
	return (
		<>
			<Editor
				editorState={editorState}
				onEditorStateChange={setEditorState}
				defaultContentState={contentState}
				onContentStateChange={setContentState}
				toolbarClassName={cnb('toolbarClassName')}
				wrapperClassName={cnb('wrapperClassName')}
				editorClassName={cnb('editorClassName')}
				toolbar={textEditorConfig}
			/>
		</>
	)
}
export default TextEditor
